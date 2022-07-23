import obd1 from "../assets/obd 1.png"

export const GetStarted = () => {
  return (
    <section className="flex justify-between xl:justify-evenly">
      <div className="flex flex-col gap-8 mt-60 text-white items-start">
        <h1 className="text-6xl space-y-4">
          <p>SIX</p>
          <p>SENSE</p>
          <p>MOBILITY</p>
        </h1>
      <h2 className="text-3xl">Making cars smarter</h2>
      <button className="px-6 py-3 bg-white rounded-full text-black">Get Started</button>
      </div>
      <img src={obd1} className="mt-60 w-2/5 xl:w-1/6" alt="" />
    </section>
  );
};
