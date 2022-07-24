import sosImg from "../assets/sos mockup six sense.png";

export const Accident = () => {
  return (
    <section className="flex justify-between items-center overflow-hidden lg:justify-center lg:gap-x-36">
      <div className="flex flex-col gap-3 w-1/2 max-w-xl">
        <h1 className="text-6xl leading-relaxed font-semibold">
          Unfortunate accident ?
        </h1>
        <p className="text-xl">
          With our advanced collision detection and 24x7 SOS feature, our
          automated system sends an SOS message to your emergency contacts and
          dispatches emergency services to your location at the earliest
        </p>
      </div>
      <img src={sosImg} className="h-[550px]" alt="" />
    </section>
  );
};
