import obdback from "../assets/PHOTO-2020-09-29-15-25-59-removebg-preview.png";
import obdside from "../assets/PHOTO-2020-09-29-15-26-00_1_-removebg-preview.png";

export const MakingSafer = () => {
  return (
    <section className="flex justify-between overflow-hidden lg:justify-center lg:gap-x-80">
      <div className="flex flex-col gap-8">
        <h3 className="text-3xl">Making Cars - </h3>
        <ul className="text-6xl leading-relaxed">
          <li>Smarter</li>
          <li>Safer</li>
          <li>Reliable</li>
        </ul>
      </div>
      <div className="flex gap-8">
        <img src={obdside} className="w-32" alt="" />
        <img src={obdback} className="w-18" alt="" />
      </div>
    </section>
  );
};
