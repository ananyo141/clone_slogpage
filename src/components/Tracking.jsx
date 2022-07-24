import gpsscreen from "../assets/gps mockup screen 3.png";

export const Tracking = () => {
  return (
    <section className="flex justify-between items-center overflow-hidden lg:justify-center lg:gap-x-36">
      <div className="flex flex-col gap-3 w-1/2 max-w-xl">
        <h1 className="text-6xl leading-relaxed font-semibold">
          Track your car wherever you are
        </h1>
        <p className="text-xl">
          With our built-in global positioning system, you can track your
          vehicle no matter where you are
        </p>
      </div>
      <img src={gpsscreen} className="h-[550px]" alt="" />
    </section>
  );
};
