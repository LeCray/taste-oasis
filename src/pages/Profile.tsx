import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  MapPin,
  CreditCard,
  Clock,
  Bell,
  LogOut,
  ChevronRight,
  ShoppingBag,
  Heart,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import NavigationBar from "@/components/common/NavigationBar";
import ThemeToggle from "@/components/common/ThemeToggle";

const Profile = () => {
  const navigate = useNavigate();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleLogout = () => {
    // Implement logout functionality
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background transition-colors duration-200 pb-24">
      <header className="p-6 sticky top-0 z-10 backdrop-blur-md border-b border-border bg-background/95 dark:bg-background/95 shadow-[0_4px_10px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
        <div className="container max-w-lg mx-auto">
          <h1 className="text-2xl font-bold">Profile</h1>
        </div>
      </header>

      <main className="container max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Profile Info */}
        <section className="rounded-lg p-6 space-y-4 bg-card border border-border">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20 border-2 border-primary">
              <AvatarImage
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80"
                alt="John Doe"
              />
              <AvatarFallback className="bg-primary/10 text-primary text-xl">
                JD
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-muted-foreground">johndoe@example.com</p>
              <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full mt-2 bg-card hover:bg-card/90"
            onClick={() => navigate("/edit-profile")}
          >
            Edit Profile
          </Button>
        </section>

        {/* Quick Access */}
        <section className="rounded-lg p-4 grid grid-cols-3 gap-2 bg-card border border-border">
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-2 h-auto py-4"
            onClick={() => navigate("/order-history")}
          >
            <ShoppingBag className="h-6 w-6 text-primary" />
            <span className="text-xs">Orders</span>
          </Button>

          <Button
            variant="ghost"
            className="flex flex-col items-center gap-2 h-auto py-4"
            onClick={() => navigate("/favorites")}
          >
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xs">Favorites</span>
          </Button>

          <Button
            variant="ghost"
            className="flex flex-col items-center gap-2 h-auto py-4"
            onClick={() => navigate("/help")}
          >
            <HelpCircle className="h-6 w-6 text-primary" />
            <span className="text-xs">Help</span>
          </Button>
        </section>

        {/* Settings */}
        <section className="rounded-lg overflow-hidden bg-card border border-border">
          <h3 className="font-semibold p-4 pb-2">Settings</h3>

          <div className="space-y-1">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Saved Addresses</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/addresses")}
              >
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </Button>
            </div>

            <Separator />

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-primary" />
                <span>Payment Methods</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/payment-methods")}
              >
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </Button>
            </div>

            <Separator />

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-primary" />
                <span>Notifications</span>
              </div>
              <Switch
                checked={notificationsEnabled}
                onCheckedChange={handleNotificationsToggle}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-primary" />
                <span>Dark Mode</span>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </section>

        {/* Account Actions */}
        <Button
          variant="ghost"
          className="w-full flex items-center justify-center gap-2 text-red-500 hover:text-red-600"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />
          Log Out
        </Button>
      </main>

      <NavigationBar />
    </div>
  );
};

export default Profile;
