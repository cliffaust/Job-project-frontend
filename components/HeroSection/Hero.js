import ButtonPrimary from "../DefaultComponents/ButtonPrimary";

const Hero = () => {
  return (
    <header className="flex justify-between items-center px-20 mt-10 overflow-hidden">
      <div className="w-2/5">
        <h1 className="font-standardTT font-bold text-4xl mb-6">
          Start building your team just with a click
        </h1>
        <ButtonPrimary className="!px-6 !py-1">Hire an intern</ButtonPrimary>
      </div>
      <div className="w-2/5 relative -mr-20">
        <div className="w-600 h-600 circle-gradient rounded-full"></div>
        <div className="px-6 py-4 flex flex-col items-center gap-1 rounded-lg circle-gradient w-500 absolute top-40 -left-52">
          <div className="w-20 h-20 rounded-full bg-pink-500">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="./images/image1.jpg"
              alt=""
            />
          </div>
          <h3 className="text-white">Software engineers</h3>
          <h4 className="text-white font-bold">@Marco</h4>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat risus
            dapibus amet odio consectetur. Facilisis neque ultrices pretium
            fusce lectus. Aliquet in dolor nibh amet, tellus. Pellentesque lorem
            diam mollis tristique accumsan.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
