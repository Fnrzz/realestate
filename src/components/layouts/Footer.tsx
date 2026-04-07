import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MailIcon } from "lucide-react";
import Link from "next/link";
import ScrollAnimate from "../features/animate/ScrollAnimate";

const Footer = () => {
  return (
    <footer className="flex flex-col  w-full py-10 px-6 lg:py-16 lg:px-16 bg-white border-t">
      <ScrollAnimate
        direction="up"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2 lg:mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 border rounded-full shadow-sm overflow-hidden shrink-0">
              <h6 className="text-lg font-bold text-black">GH</h6>
            </div>
            <h6 className="flex text-xl font-semibold">GreenHouse</h6>
          </div>

          <h6 className="text-md font-semibold m-0">Subscribe</h6>
          <p className="text-sm text-gray-600 w-full sm:w-[80%] lg:w-[90%]">
            Join our newsletter to get the latest news and updates.
          </p>

          <div className="w-full max-w-md flex items-center gap-2 bg-white rounded-full border p-1 shadow-sm mt-2">
            <div className="p-3 bg-gray-100 rounded-full shrink-0">
              <MailIcon className="text-black w-5 h-5" />
            </div>

            <Input
              placeholder="Enter your email..."
              className="bg-transparent text-black placeholder:text-gray-500 border-none shadow-none py-6 min-w-0 flex-1 focus-visible:ring-0"
            />
            <Button
              className="p-6 shrink-0 rounded-full"
              aria-label="subscribe"
            >
              Subscribe
            </Button>
          </div>

          <p className="text-xs text-gray-500 mt-1">
            By subscribing, you agree to with our Privacy Policy
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 ">
          <div className="flex flex-col gap-4">
            <h6 className="text-md font-semibold text-black">Quick Links</h6>
            <Link
              className="text-sm text-gray-500 hover:text-primary transition-colors"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-sm text-gray-500 hover:text-primary transition-colors"
              href="/"
            >
              About
            </Link>
            <Link
              className="text-sm text-gray-500 hover:text-primary transition-colors"
              href="/"
            >
              Services
            </Link>
            <Link
              className="text-sm text-gray-500 hover:text-primary transition-colors"
              href="/"
            >
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h6 className="text-md font-semibold text-black">Products</h6>
            <Link
              className="text-sm text-gray-500 hover:text-primary transition-colors"
              href="/"
            >
              Ai Assistant
            </Link>
            <Link
              className="text-sm text-gray-500 hover:text-primary transition-colors"
              href="/"
            >
              Mobile App
            </Link>
            <Link
              className="text-sm text-gray-500 hover:text-primary transition-colors"
              href="/"
            >
              Account
            </Link>
            <Link
              className="text-sm text-gray-500 hover:text-primary transition-colors"
              href="/"
            >
              Credit Card
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h6 className="text-md font-semibold text-black">Company</h6>
            <Link
              className="text-sm text-gray-500 hover:text-primary transition-colors"
              href="/"
            >
              About
            </Link>
            <Link
              className="text-sm text-gray-500 hover:text-primary transition-colors"
              href="/"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm text-gray-500 hover:text-primary transition-colors"
              href="/"
            >
              Support
            </Link>
            <Link
              className="text-sm text-gray-500 hover:text-primary transition-colors"
              href="/"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </ScrollAnimate>
    </footer>
  );
};

export default Footer;
