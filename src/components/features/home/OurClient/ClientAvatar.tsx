import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import { ArrowRightIcon } from "lucide-react";

const clients = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&h=128&q=80",
    alt: "@client1",
    fallback: "C1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=128&h=128&q=80",
    alt: "@client2",
    fallback: "C2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&h=128&q=80",
    alt: "@client3",
    fallback: "C3",
  },
];

const ClientAvatar = () => {
  return (
    <div
      className="w-full md:w-[40%] flex flex-col sm:flex-row items-center justify-end gap-4"
      data-aos="fade-left"
    >
      <AvatarGroup>
        {clients.map((client) => (
          <Avatar key={client.id} className="w-12 h-12 border-2 border-white">
            <AvatarImage
              src={client.src}
              alt={client.alt}
              className="object-cover"
            />
            <AvatarFallback>{client.fallback}</AvatarFallback>
          </Avatar>
        ))}

        <AvatarGroupCount className="w-12 h-12 text-lg border-2 border-white bg-gray-100">
          <ArrowRightIcon className="w-5 h-5 text-gray-600" />
        </AvatarGroupCount>
      </AvatarGroup>

      <p className="text-base md:text-sm lg:text-lg/5 font-light text-center sm:text-left">
        More than <span className="font-semibold">500+</span> <br /> Client
        Reviews
      </p>
    </div>
  );
};

export default ClientAvatar;
