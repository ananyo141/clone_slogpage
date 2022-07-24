import immobilise from "../assets/IMMOBILISER.png";

export const SomeoneStole = () => {
  return (
    <section className="flex flex-row-reverse justify-between items-center overflow-hidden lg:justify-center lg:gap-x-36">
      <div className="flex flex-col gap-3 w-1/2 max-w-xl">
        <h1 className="text-6xl leading-relaxed font-semibold">
          Someone stole your car ?
        </h1>
        <p className="text-xl">
          With our built-in 2-stage immobilization system, you can remotely
          disable your vehicle incase of theft or unauthorised use
        </p>
      </div>
      <img src={immobilise} className="h-[550px]" alt="" />
    </section>
  );
};
