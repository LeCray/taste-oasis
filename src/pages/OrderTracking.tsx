import { Button } from "@/components/ui/button";
import NavigationBar from "@/components/common/NavigationBar";
import { Phone, MessageCircle, Clock, MapPin, User } from "lucide-react";

const OrderTracking = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-background pb-24">
      <header className="sticky py-6 pl-4  top-0 z-10 backdrop-blur-md border-b border-border bg-background/95 dark:bg-background/95 shadow-[0_4px_10px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_10px_rgba(0,0,0,0.2)] p-4">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold">Track Order</h1>
          <p className="text-sm text-muted-foreground">Order #123456</p>
        </div>
      </header>

      <main className="container max-w-lg mx-auto p-4 space-y-6">
        {/* Delivery Status */}
        <div className="rounded-lg p-6 space-y-4 bg-card border border-border">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-semibold mb-1">Estimated Delivery</h2>
              <p className="text-2xl font-bold text-primary">12:45 PM</p>
            </div>
            <Clock className="h-12 w-12 text-primary" />
          </div>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1.5 bg-primary/90 rounded-full relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-md border border-background" />
              </div>
              <div className="flex-1 pb-4">
                <h3 className="font-semibold">Order Confirmed</h3>
                <p className="text-sm text-muted-foreground">12:15 PM</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1.5 bg-primary/90 rounded-full relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-md border border-background" />
              </div>
              <div className="flex-1 pb-4">
                <h3 className="font-semibold">Preparing Your Order</h3>
                <p className="text-sm text-muted-foreground">12:20 PM</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1.5 bg-gray-300 dark:bg-gray-600 rounded-full relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 border-2 border-primary rounded-full bg-background shadow-md" />
              </div>
              <div className="flex-1 pb-4">
                <h3 className="font-semibold">On the Way</h3>
                <p className="text-sm text-muted-foreground">--:-- PM</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1.5 bg-gray-300 dark:bg-gray-600 rounded-full relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 border-2 border-gray-300 dark:border-gray-500 rounded-full bg-background shadow-md" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Delivered</h3>
                <p className="text-sm text-muted-foreground">--:-- PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Details */}
        <div className="rounded-lg p-4 space-y-4 bg-card border border-border">
          <div className="flex items-center gap-4 pb-4 border-b">
            <div className=" h-12 rounded-full bg-primary/10 flex items-center ">
              <User className="h-6 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Donald</h3>
              <p className="text-sm text-muted-foreground">
                Your Delivery Partner
              </p>
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" className="rounded-full">
                <Phone className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex gap-3">
            <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold">Delivery Address</p>
              <p className="text-sm text-muted-foreground">
                123 Main Street, Apartment 4B
              </p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="rounded-lg p-4 bg-card border border-border">
          <h2 className="font-semibold mb-4">Order Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>2× Spicy Ramen</span>
              <span>R 25.98</span>
            </div>
            <div className="flex justify-between items-center">
              <span>1× California Roll</span>
              <span>R 12.99</span>
            </div>
            <div className="pt-3 border-t mt-3">
              <div className="flex justify-between items-center font-semibold">
                <span>Total</span>
                <span className="text-primary">R 38.97</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <NavigationBar />
    </div>
  );
};

export default OrderTracking;
