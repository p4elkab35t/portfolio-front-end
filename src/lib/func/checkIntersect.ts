interface InViewParams {
    root?: Element | Document | null;
    top?: number;
    bottom?: number;
  }
  
  export default function inView(node: HTMLElement, params: InViewParams = {}) {
    let observer: IntersectionObserver | null;
  
    const handleIntersect = (entries: IntersectionObserverEntry[]): void => {
      const v = entries[0].isIntersecting ? "enter" : "exit";
      node.dispatchEvent(new CustomEvent(v));
    };
  
    const setObserver = ({ root, top, bottom }: InViewParams): void => {
      const marginTop = top ? top * -1 : 0;
      const marginBottom = bottom ? bottom * -1 : 0;
      const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
      const options: IntersectionObserverInit = { root, rootMargin };
      if (observer) observer.disconnect();
      observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(node);
    };
  
    setObserver(params);
  
    return {
      update(params: InViewParams): void {
        setObserver(params);
      },
  
      destroy(): void {
        if (observer) observer.disconnect();
      }
    };
  }
  