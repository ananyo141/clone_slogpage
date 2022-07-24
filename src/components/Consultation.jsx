import formbg from "../assets/formbg.png";

export const Consultation = () => {
  return (
    <section className="flex items-center">
      <img src={formbg} className="w-5/12 -ml-4 sm:-ml-20" alt="" />
      <div className="mx-auto">
        <p>Need an expert team for your car services?</p>
        <p>Fill out the form to get a free consultation.</p>
        <form className="max-w-sm mt-8 space-y-8 text-xl">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Nature of Business"
            />
          </div>
          <div className="flex items-center py-2">
            <input
              className="border-b border-teal-500 appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Address"
            />
            <input
              className="border-b border-teal-500 appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Post code"
            />
          </div>
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Contact name"
            />
          </div>
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="Contact Phone"
            />
          </div>
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="email"
              placeholder="example@email.com"
            />
          </div>
          <input
            className="cursor-pointer appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="file"
          />
          <p className="text-sm text-gray-500">
            Attach file. File size of your documents should not exceed 10MB
          </p>
          <input
            type="submit"
            value="SUBMIT"
            className="cursor-pointer block px-4 py-2 bg-lime-700"
          />
          <input type="checkbox" />
          <label htmlFor="NDA" className="ml-4 text-base">
            I want to protect my data by signing an NDA
          </label>
        </form>
      </div>
    </section>
  );
};
