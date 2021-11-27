import ButtonPrimary from "../DefaultComponents/ButtonPrimary";

const Hero = () => {
  return (
    <header className="flex justify-between items-center px-20 mt-10 overflow-hidden">
      <div className="w-2/5">
        <h1 className="font-openSans text-3xl mb-6">
          Start building your team just with a click
        </h1>
        <ButtonPrimary className="!px-6 !py-1">Hire an intern</ButtonPrimary>
      </div>
      <div className="w-2/5">
        <div className="w-700 h-700 circle-gradient rounded-full"></div>
      </div>
    </header>
  );
};

export default Hero;
