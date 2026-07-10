import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Classifies a Firestore event document into one of three buckets:
 *   'running'     — startDate <= now <= endDate
 *   'coming_soon' — startDate > now  (or no dates yet)
 *   'past'        — endDate < now
 *
 * Handles both date-only strings ("YYYY-MM-DD") and full
 * datetime strings ("YYYY-MM-DDTHH:mm" or ISO 8601).
 */
function classifyEvent(data) {
  const now = new Date();

  const parseDate = (str) => {
    if (!str) return null;
    // Append :00Z if the string is missing seconds/timezone so Date parses correctly
    const normalized = str.length === 16 ? str + ':00' : str; // "2026-07-09T19:00" → "2026-07-09T19:00:00"
    const d = new Date(normalized);
    return isNaN(d.getTime()) ? null : d;
  };

  const start = parseDate(data.startDate);
  const end   = parseDate(data.endDate);

  if (!start && !end) return 'coming_soon';

  if (end && end < now)   return 'past';
  if (start && start > now) return 'coming_soon';

  // start <= now AND (no end OR end >= now)
  return 'running';
}

/**
 * Palette for coming-soon sticky-note cards. Cycles if more than 5 events.
 */
const STICKY_PALETTES = [
  { color: '#E2D7FF', accentColor: '#B6A6EB', tapeColor: '#C1B5F3', tapeRotate: -1.5, cardRotate: -2,  icon: 'star'     },
  { color: '#FFF5C6', accentColor: '#DDD08E', tapeColor: '#EDDE95', tapeRotate:  2,   cardRotate:  1.8, icon: 'scribble' },
  { color: '#FFD5E4', accentColor: '#E2ADB9', tapeColor: '#EDAFC1', tapeRotate: -1,   cardRotate: -1,   icon: 'heart'    },
  { color: '#C6F4E2', accentColor: '#8ED0B6', tapeColor: '#95EDB7', tapeRotate:  1.5, cardRotate:  1,   icon: 'star'     },
  { color: '#FFE2C6', accentColor: '#E0B08E', tapeColor: '#EDBE95', tapeRotate: -2,   cardRotate:  2,   icon: 'heart'    },
];

export function useEvents() {
  const [running,    setRunning]    = useState([]);
  const [comingSoon, setComingSoon] = useState([]);
  const [past,       setPast]       = useState([]);
  const [loading,    setLoading]    = useState(true);
  const [error,      setError]      = useState(null);

  useEffect(() => {
    // Use a simple collection query without orderBy to avoid index issues
    // when some docs are missing the startDate field.
    const q = query(collection(db, 'events'));

    const unsub = onSnapshot(
      q,
      (snapshot) => {
        const runningList    = [];
        const comingSoonList = [];
        const pastList       = [];

        snapshot.forEach((doc) => {
          const data = { id: doc.id, ...doc.data() };
          const bucket = classifyEvent(data);

          if (bucket === 'running')      runningList.push(data);
          else if (bucket === 'past')    pastList.push(data);
          else                           comingSoonList.push(data);
        });

        // Sort: running / coming-soon → earliest start first; past → newest first
        const byStart = (a, b) => {
          const da = new Date(a.startDate || '9999');
          const db_ = new Date(b.startDate || '9999');
          return da - db_;
        };
        runningList.sort(byStart);
        comingSoonList.sort(byStart);
        pastList.sort((a, b) => {
          const da = new Date(a.endDate || a.startDate || '0');
          const db_ = new Date(b.endDate || b.startDate || '0');
          return db_ - da; // newest first
        });

        // Attach palette + sequential number to coming-soon events
        const comingSoonWithPalette = comingSoonList.map((ev, i) => ({
          ...ev,
          num: String(i + 1).padStart(2, '0'),
          ...STICKY_PALETTES[i % STICKY_PALETTES.length],
        }));

        setRunning(runningList);
        setComingSoon(comingSoonWithPalette);
        setPast(pastList);
        setLoading(false);
      },
      (err) => {
        console.error('[useEvents] Firestore error:', err);
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsub();
  }, []);

  return { running, comingSoon, past, loading, error };
}
