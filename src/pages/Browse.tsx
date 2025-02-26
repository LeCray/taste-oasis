
import NavigationBar from "@/components/common/NavigationBar";
import RestaurantCard from "@/components/home/RestaurantCard";
import { Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const restaurants = [
  {
    id: 1,
    name: "Coastal Paradise",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    rating: 4.8,
    cuisine: "Seafood • Local",
    deliveryTime: "25-35",
  },
  {
    id: 2,
    name: "Garden Fresh",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    rating: 4.5,
    cuisine: "Vegetarian • Healthy",
    deliveryTime: "20-30",
  },
  {
    id: 3,
    name: "Spice Route",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    rating: 4.7,
    cuisine: "Indian • Asian",
    deliveryTime: "30-40",
  },
];

const categories = [
  "Popular", "Trending", "New", "Healthy", "Local Favorites"
];

const Browse = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="p-4 glass-card sticky top-0 z-10">
        <div className="container max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-4">Browse</h1>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search restaurants, dishes..."
              className="w-full pl-10 pr-4 h-12 rounded-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          </div>
        </div>
      </header>

      <main className="container max-w-lg mx-auto px-4 pb-24">
        {/* Categories */}
        <div className="my-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Categories</h2>
            <Button variant="ghost" className="text-sm text-coral hover:text-coral-light">
              See all <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Restaurants */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Popular Restaurants</h2>
            <Button variant="ghost" className="text-sm text-coral hover:text-coral-light">
              See all <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="grid gap-4">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id}>
                <RestaurantCard {...restaurant} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <NavigationBar />
    </div>
  );
};

export default Browse;
