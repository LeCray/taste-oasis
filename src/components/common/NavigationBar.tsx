import { Home, Search, ShoppingCart, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background dark:bg-gray-900 border-t border-border dark:border-gray-800 p-4 z-10 animate-slideUp">
      <div className="container max-w-lg mx-auto">
        <div className="flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            className={`${
              location.pathname === "/" ? "text-coral" : "text-muted-foreground"
            } hover:text-coral-light`}
            onClick={() => handleNavigation("/")}
            aria-label="Home"
          >
            <Home className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`${
              location.pathname === "/browse"
                ? "text-coral"
                : "text-muted-foreground"
            } hover:text-coral-light`}
            onClick={() => handleNavigation("/browse")}
            aria-label="Search"
          >
            <Search className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`${
              location.pathname === "/cart"
                ? "text-coral"
                : "text-muted-foreground"
            } hover:text-coral-light`}
            onClick={() => handleNavigation("/cart")}
            aria-label="Cart"
          >
            <ShoppingCart className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`${
              location.pathname.includes("/order-tracking")
                ? "text-coral"
                : "text-muted-foreground"
            } hover:text-coral-light`}
            onClick={() => handleNavigation("/order-tracking")}
            aria-label="Order Tracking"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`${
              location.pathname === "/profile"
                ? "text-coral"
                : "text-muted-foreground"
            } hover:text-coral-light`}
            onClick={() => handleNavigation("/profile")}
            aria-label="Profile"
          >
            <User className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
