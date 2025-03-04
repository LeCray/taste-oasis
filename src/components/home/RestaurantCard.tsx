import { Star, Clock, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

interface RestaurantCardProps {
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  deliveryTime: string;
  isNew?: boolean;
}

const RestaurantCard = ({
  name,
  image,
  rating,
  cuisine,
  deliveryTime,
  isNew = false,
}: RestaurantCardProps) => {
  const { theme } = useTheme();

  return (
    <Card
      className={`overflow-hidden transform transition-all duration-300 hover:scale-[1.02] ${
        theme === "dark"
          ? "bg-card border-border/60 hover:border-primary/30"
          : "bg-card border-border/40 hover:border-primary/20"
      }`}
    >
      <div className="relative h-48 w-full">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        {isNew && (
          <Badge className="absolute top-3 left-3 bg-primary text-white font-medium">
            New
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
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
            <Star className="h-3.5 w-3.5 text-primary fill-current" />
            <span className="text-xs font-medium text-primary">{rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-3">{cuisine}</p>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-primary/80" />
          <span className="text-foreground/80">{deliveryTime} min</span>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
