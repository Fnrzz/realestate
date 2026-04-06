import ClientAvatar from "./ClientAvatar";

const OurClient = () => {
  return (
    <section className="flex flex-col gap-8 w-full h-full py-10 px-6 lg:p-15">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="w-full md:w-[50%] lg:w-[40%]" data-aos="fade-right">
          <h2 className="text-3xl/10 lg:text-4xl/12 font-light tracking-wide text-center md:text-left">
            Our Client <span className="font-semibold">Feedback</span>
          </h2>
        </div>
        <ClientAvatar />
      </div>
    </section>
  );
};

export default OurClient;
