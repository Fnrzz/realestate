import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

const ScrollDown = () => {
  return (
    <div
      data-aos="fade-down"
      className="flex flex-col md:flex-row items-center gap-2"
    >
      <span className="text-md text-white">Scroll down</span>
      <Button size="icon-lg" aria-label="scroll down">
        <ArrowDownIcon />
      </Button>
    </div>
  );
};

export default ScrollDown;
