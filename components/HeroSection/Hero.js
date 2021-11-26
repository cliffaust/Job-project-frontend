import ButtonPrimary from "../DefaultComponents/ButtonPrimary";

const Hero = () => {
  return (
    <header className="flex justify-between items-center px-20 mt-10">
      <div className="w-2/5 flex flex-col gap-4">
        <h1 className="font-openSans text-3xl">
          Start building your team just with a click
        </h1>
        <ButtonPrimary>Hire an intern</ButtonPrimary>
      </div>
      <div className="w-2/5">
        <div className="w-2/6 bg-purple-800 rounded-full"></div>
      </div>
    </header>
  );
};

export default Hero;
