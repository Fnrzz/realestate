import ScrollAnimate from "../../animate/ScrollAnimate";
import { Button } from "@/components/ui/button";
import ListNews from "./ListNews";

const LastestNews = () => {
  return (
    <section className="flex flex-col gap-8 w-full h-full py-10 px-6 lg:p-15">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <ScrollAnimate
          direction="right"
          className="w-full md:w-[50%] lg:w-[40%]"
        >
          <h2 className="text-3xl/10 lg:text-4xl/12 font-light tracking-wide text-center md:text-left">
            Our Lastest <span className="font-semibold">News & Blogs</span>
          </h2>
        </ScrollAnimate>
        <Button size={"lg"} variant={"outline"}>
          See More Blogs
        </Button>
      </div>
      <ListNews />
    </section>
  );
};

export default LastestNews;
