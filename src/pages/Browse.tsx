
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import NavigationBar from "@/components/common/NavigationBar";
import { Search, SlidersHorizontal, Clock, Star, DollarSign } from "lucide-react";

const Browse = () => {
  const filters = [
    { icon: <Clock className="w-4 h-4" />, label: "Delivery Time" },
    { icon: <Star className="w-4 h-4" />, label: "Rating 4.5+" },
    { icon: <DollarSign className="w-4 h-4" />, label: "Price" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-10 bg-background p-4 glass-card">
        <div className="container max-w-lg mx-auto space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search dishes or restaurants"
                className="w-full pl-10 pr-4 h-12 rounded-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            </div>
            <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <Button
                key={filter.label}
                variant="outline"
                className="rounded-full flex gap-2 whitespace-nowrap"
              >
                {filter.icon}
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </header>

      <main className="container max-w-lg mx-auto p-4">
        <h2 className="text-lg font-semibold mb-4">Today's Special</h2>
        <div className="grid gap-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="glass-card rounded-lg p-4 flex gap-4 items-center"
            >
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={`https://picsum.photos/200/200?random=${index}`}
                  alt="Food"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Special Dish {index + 1}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Restaurant {index + 1}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-coral">$12.99</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm">4.8</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <NavigationBar />
    </div>
  );
};

export default Browse;
