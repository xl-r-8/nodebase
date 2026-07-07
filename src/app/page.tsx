import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
// import { Button } from "@base-ui/react";
//how 2 buttons?

export const abc = () => {
  const something = true;
  return (
    //js doesnt support and
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <Button variant="outline">
        {/* i can change the components: every property of theirs coz i have the exact code for em, which is not the general case for every component library */}
        Click me
      </Button>
    </div>
  );
};

export default abc;