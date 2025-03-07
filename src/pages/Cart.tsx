import { Button } from "@/components/ui/button";
import NavigationBar from "@/components/common/NavigationBar";
import { Minus, Plus, MapPin, Clock, CreditCard } from "lucide-react";

const Cart = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-background pb-24">
      <header className="sticky py-6 pl-4 top-0 z-10 backdrop-blur-md border-b border-border bg-background/95 dark:bg-background/95 shadow-[0_4px_10px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_10px_rgba(0,0,0,0.2)] p-4">
        <div className=" max-w-lg mx-auto">
          <h1 className="text-2xl font-bold">Your Cart</h1>
        </div>
      </header>

      <main className="container max-w-lg mx-auto p-4">
        <div className="space-y-6">
          {/* Delivery Address */}
          <div className="rounded-lg p-4 bg-card border border-border">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="text-primary" />
              <h2 className="font-semibold">Delivery Address</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              123 Main Street, Apartment 4B
            </p>
            <Button variant="link" className="text-primary p-0 h-auto mt-1">
              Change Address
            </Button>
          </div>

          {/* Delivery Time */}
          <div className="rounded-lg p-4 bg-card border border-border">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="text-primary" />
              <h2 className="font-semibold">Delivery Time</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Estimated delivery: 25-35 min
            </p>
          </div>

          {/* Cart Items */}
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="rounded-lg p-4 flex gap-4 bg-card border border-border"
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={`https://picsum.photos/200/200?random=${index + 10}`}
                    alt="Food item"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Food Item {index + 1}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Extra toppings
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">R 12.99</span>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">2</span>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="rounded-lg p-4 space-y-3 bg-card border border-border">
            <h2 className="font-semibold mb-3">Order Summary</h2>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>R 38.97</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Delivery Fee</span>
              <span>R 2.99</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Service Fee</span>
              <span>R 1.99</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-semibold">
              <span>Total</span>
              <span className="text-primary">R 43.95</span>
            </div>
          </div>

          {/* Checkout Button */}
          <Button className="w-full h-12 gap-2">
            <CreditCard className="h-5 w-5" />
            Proceed to Checkout
          </Button>
        </div>
      </main>

      <NavigationBar />
    </div>
  );
};

export default Cart;
