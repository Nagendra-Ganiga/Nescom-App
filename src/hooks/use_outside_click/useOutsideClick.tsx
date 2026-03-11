import { useState, useEffect, useRef } from "react";

export function useOutsideClick(initialState = false) {
  const [active, setActive] = useState(initialState);
  const ref = useRef<HTMLDivElement | null>(null);

  const toggleActive = () => setActive(!active);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        !ref.current.contains(event.target as Node)
      ) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // This makes these values available to the component that calls the hook.
  return { ref, active, setActive, toggleActive };
}
