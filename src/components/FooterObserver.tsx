import { useEffect, useRef } from 'react';

interface FooterObserverProps {
  onContactVisible: () => void;
  onContactHidden: () => void;
}

export default function FooterObserver({
  onContactVisible,
  onContactHidden,
}: FooterObserverProps) {
  const callbacks = useRef({ onContactVisible, onContactHidden });

  useEffect(() => {
    callbacks.current = { onContactVisible, onContactHidden };
  });

  useEffect(() => {
    const el = document.getElementById('contact');
    if (!el) return;

    // Trigger when the footer is meaningfully in view.
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) callbacks.current.onContactVisible();
        else callbacks.current.onContactHidden();
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return null;
}


