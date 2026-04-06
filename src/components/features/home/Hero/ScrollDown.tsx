import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import ScrollAnimate from "../../animate/ScrollAnimate";

const ScrollDown = () => {
  return (
    <ScrollAnimate
      direction="down"
      className="flex flex-col md:flex-row items-center gap-2"
    >
      <span className="text-md text-white">Scroll down</span>
      <Button size="icon-lg" aria-label="scroll down">
        <ArrowDownIcon />
      </Button>
    </ScrollAnimate>
  );
};

export default ScrollDown;
