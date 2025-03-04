import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Star, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/contexts/ThemeContext";

interface Recommendation {
  id: number;
  title: string;
  restaurant: string;
  image: string;
  time: string;
  price: string;
  rating: number;
  isPopular?: boolean;
}

interface RecommendationCarouselProps {
  recommendations: Recommendation[];
  title?: string;
}

const RecommendationCarousel = ({
  recommendations,
  title = "Recommended for you",
}: RecommendationCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const { theme } = useTheme();

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const handleScrollButton = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    const newScrollPosition =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      handleScroll();
      container.addEventListener("scroll", handleScroll);

      // Check if we can scroll right initially
      setCanScrollRight(container.scrollWidth > container.clientWidth);

      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [recommendations]);

  return (
    <div className="space-y-4">
      {title && (
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      )}

      <div className="relative">
        {canScrollLeft && (
          <Button
            variant="outline"
            size="icon"
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 ${
              theme === "dark"
                ? "bg-card/90 backdrop-blur-sm hover:bg-primary/20 border-border/70 rounded-full shadow-md"
                : "bg-background/90 backdrop-blur-sm hover:bg-primary/10 hover:text-primary rounded-full shadow-md border-border/50"
            }`}
            onClick={() => handleScrollButton("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 pt-1 px-1 snap-x snap-mandatory scrollbar-hide"
          aria-label="Food recommendations carousel"
        >
          {recommendations.map((item) => (
            <Card
              key={item.id}
              className={`min-w-[280px] flex-shrink-0 snap-start overflow-hidden transition-all duration-300 hover:shadow-lg ${
                theme === "dark"
                  ? "bg-card border-border/60 hover:border-primary/30"
                  : "bg-card border-border/40 hover:border-primary/20"
              }`}
            >
              <div className="relative h-44">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium shadow-sm ${
                    theme === "dark"
                      ? "bg-card/90 backdrop-blur-sm text-foreground"
                      : "bg-background/90 backdrop-blur-sm text-foreground"
                  }`}
                >
                  {item.price}
                </div>
                {item.isPopular && (
                  <Badge className="absolute top-3 left-3 bg-primary text-white font-medium">
                    Popular
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute bottom-3 right-3 rounded-full w-8 h-8 ${
                    theme === "dark"
                      ? "bg-card/80 backdrop-blur-sm hover:bg-primary/20"
                      : "bg-background/80 backdrop-blur-sm hover:bg-primary/10"
                  }`}
                  aria-label="Add to favorites"
                >
                  <Heart className="h-4 w-4 text-foreground" />
                </Button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.restaurant}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary/80" />
                    <span className="text-foreground/80">{item.time}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
                    <Star className="h-3.5 w-3.5 text-primary fill-current" />
                    <span className="text-xs font-medium text-primary">
                      {item.rating}
                    </span>
                  </div>
                </div>
                <Button
                  className="w-full bg-primary hover:bg-primary-hover text-white font-medium"
                  onClick={() => {}}
                  aria-label={`Order ${item.title} from ${item.restaurant}`}
                >
                  Order Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {canScrollRight && (
          <Button
            variant="outline"
            size="icon"
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 ${
              theme === "dark"
                ? "bg-card/90 backdrop-blur-sm hover:bg-primary/20 border-border/70 rounded-full shadow-md"
                : "bg-background/90 backdrop-blur-sm hover:bg-primary/10 hover:text-primary rounded-full shadow-md border-border/50"
            }`}
            onClick={() => handleScrollButton("right")}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default RecommendationCarousel;
