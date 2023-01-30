import { RefObject, useEffect, useRef } from "react";

export const useObserver = (ref: RefObject<Element>, canLoad: boolean, isLoading:boolean, callback: () => void) => {
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    let cb = function (entries: any[]) {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };

    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current!);
  }, [isLoading]);
};
