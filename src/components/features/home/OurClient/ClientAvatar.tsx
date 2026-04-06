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
    src: "/assets/avatar/diego.avif",
    alt: "diego",
    fallback: "DE",
  },
  {
    src: "/assets/avatar/alex.avif",
    alt: "alex",
    fallback: "AL",
  },
  {
    src: "/assets/avatar/mariola.avif",
    alt: "mariola",
    fallback: "MA",
  },
];

const ClientAvatar = () => {
  return (
    <div
      className="w-full md:w-[40%] flex flex-col sm:flex-row items-center justify-end gap-4"
      data-aos="fade-left"
    >
      <AvatarGroup>
        {clients.map((client, index) => (
          <Avatar key={index} className="w-12 h-12">
            <AvatarImage
              src={client.src}
              alt={client.alt}
              className="object-cover"
            />
            <AvatarFallback>{client.fallback}</AvatarFallback>
          </Avatar>
        ))}

        <AvatarGroupCount className="w-12 h-12 text-lg  bg-gray-100">
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
