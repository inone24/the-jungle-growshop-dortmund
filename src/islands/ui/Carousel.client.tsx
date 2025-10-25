import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function Carousel({ children, options }: { children: React.ReactNode; options?: EmblaOptionsType }) {
  const [ref, api] = useEmblaCarousel(options);
  const [canPrev, setPrev] = React.useState(false);
  const [canNext, setNext] = React.useState(true);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setPrev(api.canScrollPrev());
      setNext(api.canScrollNext());
    };
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={ref}>
        <div className="flex">{children}</div>
      </div>
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-2 text-white disabled:opacity-40"
        onClick={() => api?.scrollPrev()}
        disabled={!canPrev}
        aria-label="vorheriges Bild"
      >
        <ArrowLeft className="w-4 h-4" />
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-2 text-white disabled:opacity-40"
        onClick={() => api?.scrollNext()}
        disabled={!canNext}
        aria-label="nächstes Bild"
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export function CarouselItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`min-w-0 shrink-0 grow-0 basis-full px-2 ${className}`}>{children}</div>;
}
