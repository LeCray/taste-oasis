
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface RestaurantCardProps {
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  deliveryTime: string;
}

const RestaurantCard = ({ name, image, rating, cuisine, deliveryTime }: RestaurantCardProps) => {
  return (
    <Card className="overflow-hidden transform transition-all duration-300 hover:scale-[1.02] glass-card">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg leading-tight">{name}</h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-2">{cuisine}</p>
        <p className="text-sm font-medium text-coral">{deliveryTime} min</p>
      </div>
    </Card>
  );
};

export default RestaurantCard;
