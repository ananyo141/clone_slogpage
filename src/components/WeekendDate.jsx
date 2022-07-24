import diagimg from "../assets/obd config remote diagnos.png";

export const WeekendDate = () => {
  return (
    <section className="flex justify-between items-center overflow-hidden lg:justify-center lg:gap-x-36">
      <div className="flex flex-col gap-3 w-1/2 max-w-xl">
        <h1 className="text-6xl leading-relaxed font-semibold">
          No more weekend dates with a mechanic
        </h1>
        <p className="text-xl">
          With remote diagnostics and our fault prediction{" "}
          <span className="text-red-800">AI,</span> stay upto date with your
          vehicle health and ahead of any unexpected repairs
        </p>
      </div>
      <img src={diagimg} className="h-[550px]" alt="" />
    </section>
  );
};
