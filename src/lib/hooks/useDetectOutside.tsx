import { useEffect } from "react";

type DetectOutsideProps = {
  ref: React.RefObject<HTMLDivElement>;
  callback: () => void;
};

export function useDetectOutside({ ref, callback }: DetectOutsideProps) {
  useEffect(() => {
    // handler to detect clicks outside the ref
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    // add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);

  return ref;
}
