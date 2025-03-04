import { Home, Search, ShoppingCart, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 backdrop-blur-md border-t border-border py-3 px-4 z-10 animate-slideUp bg-background/95 dark:bg-background/95 shadow-[0_-4px_10px_rgba(0,0,0,0.03)] dark:shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
      <div className="w-full">
        <div className="flex justify-between items-center">
          <NavButton
            path="/"
            currentPath={location.pathname}
            icon={<Home className="h-5 w-5" />}
            label="Home"
            handleNavigation={handleNavigation}
          />
          <NavButton
            path="/browse"
            currentPath={location.pathname}
            icon={<Search className="h-5 w-5" />}
            label="Browse"
            handleNavigation={handleNavigation}
          />
          <NavButton
            path="/cart"
            currentPath={location.pathname}
            icon={<ShoppingCart className="h-5 w-5" />}
            label="Cart"
            handleNavigation={handleNavigation}
          />
          <NavButton
            path="/order-tracking"
            currentPath={location.pathname}
            icon={<MessageCircle className="h-5 w-5" />}
            label="Orders"
            handleNavigation={handleNavigation}
          />
          <NavButton
            path="/profile"
            currentPath={location.pathname}
            icon={<User className="h-5 w-5" />}
            label="Profile"
            handleNavigation={handleNavigation}
          />
        </div>
      </div>
    </nav>
  );
};

interface NavButtonProps {
  path: string;
  currentPath: string;
  icon: React.ReactNode;
  label: string;
  handleNavigation: (path: string) => void;
}

const NavButton = ({
  path,
  currentPath,
  icon,
  label,
  handleNavigation,
}: NavButtonProps) => {
  const isActive =
    path === "/" ? currentPath === path : currentPath.includes(path);

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`relative rounded-full w-12 h-12 ${
        isActive
          ? "text-primary bg-primary/10"
          : "text-muted-foreground hover:text-primary/80"
      }`}
      onClick={() => handleNavigation(path)}
      aria-label={label}
    >
      {icon}
      {isActive && (
        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
      )}
    </Button>
  );
};

export default NavigationBar;
