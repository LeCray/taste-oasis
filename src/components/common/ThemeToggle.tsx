import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleTheme();
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      tabIndex={0}
      className={`rounded-full w-10 h-10 ${
        theme === "dark"
          ? "border-border/70 bg-muted/50 hover:bg-primary/10"
          : "border-border/50 bg-background/80 hover:bg-primary/5 hover:border-primary/20"
      }`}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-primary" />
      ) : (
        <Sun className="h-5 w-5 text-primary" />
      )}
    </Button>
  );
};

export default ThemeToggle;
