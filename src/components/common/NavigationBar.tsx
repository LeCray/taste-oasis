
import { Home, Search, ShoppingCart, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavigationBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 p-4 glass-card border-t animate-slideUp">
      <div className="container max-w-lg mx-auto">
        <div className="flex justify-between items-center">
          <Button variant="ghost" size="icon" className="text-coral hover:text-coral-light">
            <Home className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-coral hover:text-coral-light">
            <Search className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-coral hover:text-coral-light">
            <ShoppingCart className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-coral hover:text-coral-light">
            <MessageCircle className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-coral hover:text-coral-light">
            <User className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
