import { useEffect, useState } from 'react';
import { doc, collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

export function useExecom() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Subscribe to the current active year pointer
    const currentDocRef = doc(db, 'execom', 'current');
    
    let unsubMembers = null;

    const unsubCurrent = onSnapshot(
      currentDocRef,
      (currentDocSnap) => {
        if (!currentDocSnap.exists()) {
          console.warn('[useExecom] "execom/current" document does not exist.');
          setLoading(false);
          return;
        }

        const yearId = currentDocSnap.data().year;
        if (!yearId) {
          console.warn('[useExecom] "year" field is missing in "execom/current".');
          setLoading(false);
          return;
        }

        // Clean up previous subcollection subscription if any
        if (unsubMembers) {
          unsubMembers();
        }

        // 2. Subscribe to the members list under the active year subcollection
        const colRef = collection(db, 'execom', yearId, 'members');
        const q = query(colRef, orderBy('displayOrder', 'asc'));

        unsubMembers = onSnapshot(
          q,
          (snapshot) => {
            const list = [];
            snapshot.forEach((docSnap) => {
              const data = docSnap.data();
              list.push({
                id: docSnap.id,
                ...data,
              });
            });
            setMembers(list);
            setLoading(false);
          },
          (err) => {
            console.error('[useExecom] Members subscription error:', err);
            setError(err.message);
            setLoading(false);
          }
        );
      },
      (err) => {
        console.error('[useExecom] Current year subscription error:', err);
        setError(err.message);
        setLoading(false);
      }
    );

    return () => {
      unsubCurrent();
      if (unsubMembers) unsubMembers();
    };
  }, []);

  return { members, loading, error };
}
