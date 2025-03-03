import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Star } from "lucide-react";
import { useRef } from "react";

interface Recommendation {
  id: number;
  title: string;
  restaurant: string;
  image: string;
  time: string;
  price: string;
  rating: number;
}

interface RecommendationCarouselProps {
  recommendations: Recommendation[];
}

const RecommendationCarousel = ({
  recommendations,
}: RecommendationCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
      >
        {recommendations.map((item) => (
          <Card
            key={item.id}
            className="min-w-[280px] flex-shrink-0 snap-start overflow-hidden dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="relative h-40">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded-full text-xs font-medium">
                {item.price}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground dark:text-gray-400 mb-2">
                {item.restaurant}
              </p>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
                  <span className="dark:text-gray-300">{item.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm">{item.rating}</span>
                </div>
              </div>
              <Button className="w-full bg-coral hover:bg-coral/90 text-white dark:bg-coral dark:hover:bg-coral/90 dark:text-white">
                Order Now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecommendationCarousel;
