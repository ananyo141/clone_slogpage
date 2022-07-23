import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
      <nav className="fixed bg-white w-full flex justify-between items-center px-3">
        <img src={logo} className="w-60 inline-block" alt="logo" />
        <button className="rounded-full inline-block p-4 border border-black">
          Pre Book Now
        </button>
      </nav>
  );
};
