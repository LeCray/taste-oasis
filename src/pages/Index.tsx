import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "@/components/common/NavigationBar";
import RecommendationCarousel from "@/components/home/RecommendationCarousel";
import { Button } from "@/components/ui/button";
import { Sun, Clock, MapPin } from "lucide-react";

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const navigate = useNavigate();

  const currentTime = new Date().getHours();
  const greeting =
    currentTime < 12
      ? "Good morning"
      : currentTime < 18
      ? "Good afternoon"
      : "Good evening";

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
    {
      id: 3,
      title: "Spicy Beef Ramen",
      restaurant: "Noodle House",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
      time: "15-25 min",
      price: "$18.50",
      rating: 4.6,
    },
  ];

  const quickPrompts = [
    { label: "Show me something affordable", icon: "$" },
    { label: "I need something quick", icon: "⏳" },
    { label: "I want something healthy", icon: "🥗" },
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-background transition-colors duration-200">
      {/* Header */}
      <header className="py-6 pl-4 sticky top-0 z-10 backdrop-blur-md border-b border-border bg-background/95 dark:bg-background/95 shadow-[0_4px_10px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
        <div className="max-w-lg">
          <h1 className="text-2xl font-bold">Paradise Eats</h1>
        </div>
      </header>

      <main className="container max-w-lg mx-auto px-4 py-6 space-y-8 pb-24">
        {/* AI Greeting */}
        <section className="space-y-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">{greeting}, Wesley!</h2>
            <p className="text-muted-foreground">
              Ready for something delicious?
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Cape Town, CBD</span>
            </div>

            <div
              style={{ marginTop: 10 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Sun className="h-4 w-4 text-primary" />
              <span>25°C</span>
            </div>
          </div>
        </section>

        {/* AI Recommendations */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Perfect for Lunch</h2>
          </div>

          <RecommendationCarousel recommendations={recommendations} />
        </section>

        {/* Quick Prompts */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Quick Prompts</h2>
          <div className="flex flex-wrap gap-2">
            {quickPrompts.map((prompt) => (
              <Button
                key={prompt.label}
                variant="outline"
                className="flex items-center gap-2 bg-card hover:bg-card/90"
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
          className="w-full bg-card hover:bg-card/90"
        >
          Browse All Restaurants
        </Button>
      </main>

      <NavigationBar />
    </div>
  );
};

export default Index;
