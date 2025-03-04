import { Star, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      className={`overflow-hidden transform transition-all duration-300 hover:scale-[1.02] glass-card ${
        theme === "dark"
          ? "border-border/60 hover:border-primary/30"
          : "border-border/40 hover:border-primary/20"
      }`}
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {isNew && (
          <Badge className="absolute top-3 left-3 bg-primary text-white font-medium">
            New
          </Badge>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg leading-tight">{name}</h3>
          <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
            <Star className="h-3.5 w-3.5 text-primary fill-current" />
            <span className="text-xs font-medium text-primary">{rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-3">{cuisine}</p>
        <div className="flex items-center text-sm font-medium text-foreground/80">
          <Clock className="h-3.5 w-3.5 mr-1.5 text-primary/80" />
          <span>{deliveryTime} min</span>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
