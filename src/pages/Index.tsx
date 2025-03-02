
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "@/components/common/NavigationBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Clock, MapPin, Star } from "lucide-react";

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const currentTime = new Date().getHours();
  const greeting = currentTime < 12 ? "Good morning" : currentTime < 18 ? "Good afternoon" : "Good evening";
  
  const recommendations = [
    {
      id: 1,
      title: "Fresh Sushi Combo",
      restaurant: "Sushi Master",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      time: "20-30 min",
      price: "$24.99",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Grilled Salmon Bowl",
      restaurant: "Ocean Fresh",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
      time: "25-35 min",
      price: "$19.99",
      rating: 4.7,
    },
  ];

  const quickPrompts = [
    { label: "Show me something affordable", icon: "$" },
    { label: "I need something quick", icon: "⏳" },
    { label: "I want something healthy", icon: "🥗" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="p-6 glass-card sticky top-0 z-10">
        <div className="container max-w-lg mx-auto">
          <h1 className="text-2xl font-bold">Paradise Eats</h1>
        </div>
      </header>

      <main className="container max-w-lg mx-auto px-4 py-6 space-y-8 pb-24">
        {/* AI Greeting - Moved below header */}
        <section className="space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-2">{greeting}, John!</h2>
              <p className="text-muted-foreground">Ready for something delicious?</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sun className="h-5 w-5 text-coral" />
              <span>25°C</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Cape Town, CBD</span>
          </div>
        </section>

        {/* AI Recommendations */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-coral" />
            <h2 className="text-lg font-semibold">Perfect for Lunch</h2>
          </div>

          <div className="grid gap-4">
            {recommendations.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="flex gap-4 p-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.restaurant}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{item.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm">{item.rating}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-3">Order Now</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Prompts */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Quick Prompts</h2>
          <div className="flex flex-wrap gap-2">
            {quickPrompts.map((prompt) => (
              <Button
                key={prompt.label}
                variant="outline"
                className="flex items-center gap-2"
              >
                <span>{prompt.icon}</span>
                {prompt.label}
              </Button>
            ))}
          </div>
        </section>

        {/* Browse All Option */}
        <Button
          variant="outline"
          onClick={() => navigate("/browse")}
          className="w-full"
        >
          Browse All Restaurants
        </Button>
      </main>

      <NavigationBar />
    </div>
  );
};

export default Index;
