import React from "react";
import NavBar from "../JobsNavbar/Navbar";
import ButtonPrimary from "../DefaultComponents/ButtonPrimary";
import ImageGallery from "./ImageGallery";

function Profile() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="mt-10 px-20 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="w-36 h-36 rounded-full">
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
              alt="Image"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Namiba</h1>
            <p className="text-base">Since 2009</p>
            <p className="text-base text-green-600">20 Applicant</p>
          </div>
        </div>
        <ButtonPrimary className="px-6 py-2 !rounded-md">
          Go to jobs
        </ButtonPrimary>
      </div>
      <div className="flex flex-col mt-10">
        <div className="flex items-center justify-between px-20 mb-8 mt-10">
          <div className="text-2xl font-standardTT font-bold"></div>
          <div className="flex items-center gap-1 text-purple-600">
            <span>See all images</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </div>
        </div>
        <ImageGallery></ImageGallery>
      </div>
      <div className="flex flex-col mt-10 px-20">
        <div className="text-2xl mb-8 font-standardTT font-bold">
          About Company
        </div>
        <div className="pl-8">
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
            consectetur eu sed erat lorem. Et sed nisi, ipsum aenean tortor
            aliquam in condimentum. Ornare scelerisque et sociis mauris mattis
            quis felis pellentesque. Feugiat massa in lectus nunc, pellentesque
            tempus. Odio aliquet quis vel facilisis nullam a. Euismod urna,
            penatibus sed lectus in. Velit dignissim arcu nec nibh velit
            vestibulum. Eget porttitor massa ultricies sed amet volutpat sed
            morbi. Faucibus pulvinar elementum porttitor et volutpat. Quis duis
            metus turpis nunc. Cursus laoreet volutpat hac sed sem diam. Lorem
            amet, quis ut metus consequat, sem venenatis facilisi. Fringilla
            amet mattis duis elit varius eget consectetur. Egestas orci quis
            viverra orci.Euismod urna, penatibus sed lectus in. Velit dignissim
            arcu nec nibh velit vestibulum. Eget porttitor massa ultricies sed
            amet volutpat sed morbi. Faucibus pulvinar elementum porttitor et
            volutpat. Quis duis metus turpis nunc. Cursus laoreet volutpat hac
            sed sem diam. Lorem amet, quis ut metus quis vel facilisis nullam a.
            Euismod urna, penatibus sed lectus in. Velit dignissim arcu nec nibh
            velit vestibulum. Eget porttitor massa ultricies sed amet volutpat
            sed morbi... &nbsp;
            <span className="font-bold text-purple-600 cursor-pointer">
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-10 px-20">
        <div className="text-2xl mb-8 font-standardTT font-bold">
          Company Values
        </div>
        <div className="pl-8">
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
            consectetur eu sed erat lorem. Et sed nisi, ipsum aenean tortor
            aliquam in condimentum. Ornare scelerisque et sociis mauris mattis
            quis felis pellentesque. Feugiat massa in lectus nunc, pellentesque
            tempus. Odio aliquet quis vel facilisis nullam a. Euismod urna,
            penatibus sed lectus in. Velit dignissim arcu nec nibh velit
            vestibulum. Eget porttitor massa ultricies sed amet volutpat sed
            morbi. Faucibus pulvinar elementum porttitor et volutpat. Quis duis
            metus turpis nunc. Cursus laoreet volutpat hac sed sem diam. Lorem
            amet, quis ut metus consequat, sem venenatis facilisi. Fringilla
            amet mattis duis elit varius eget consectetur. Egestas orci quis
            viverra orci.Euismod urna, penatibus sed lectus in. Velit dignissim
            arcu nec nibh velit vestibulum. Eget porttitor massa ultricies sed
            amet volutpat sed morbi. Faucibus pulvinar elementum porttitor et
            volutpat. Quis duis metus turpis nunc. Cursus laoreet volutpat hac
            sed sem diam. Lorem amet, quis ut metus quis vel facilisis nullam a.
            Euismod urna, penatibus sed lectus in. Velit dignissim arcu nec nibh
            velit vestibulum. Eget porttitor massa ultricies sed amet volutpat
            sed morbi... &nbsp;
            <span className="font-bold text-purple-600 cursor-pointer">
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-10 px-20">
        <div className="text-2xl mb-8 font-standardTT font-bold">
          Available jobs(2)
        </div>
      </div>
    </div>
  );
}

export default Profile;
