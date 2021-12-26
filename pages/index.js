import Navbar from "../components/HomeNavbar/Navbar";
import Hero from "../components/HeroSection/Hero";
import Section from "../components/HomeSections/Section";
import Form from "../components/HomeSignin/Form";
import Footer from "../components/HomeFooter/Footer";
import getUserProfile from "../lib/userProfile";

export default function Home() {
  return (
    <main className="">
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="flex px-20 justify-between mt-20 mb-10">
        <Section
          title="Profile Based Choice"
          text="Lorem ipsum dolor sit amet. egestas urna vel ultrices risus, maecenas. Fames turpis morbi est sagittis nulla elementum dignissim tellus aenean."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="137px"
            height="137px"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <defs />
            <path
              d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2zm1 16h-2v-2h2zm0-4h-2v-2h2zm4 4h-2v-8h-6v8h-2v-8a2.002 2.002 0 0 1 2-2h6a2.002 2.002 0 0 1 2 2z"
              fill="#00000"
            />
          </svg>
        </Section>
        <Section
          title="Hire a student"
          text="Lorem ipsum dolor sit amet. egestas urna vel ultrices risus, maecenas. Fames turpis morbi est sagittis nulla elementum dignissim tellus aenean."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="137px"
            height="137px"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 128 128"
          >
            <path
              d="M73.76 89.08H54.23v19.33c0 4.85 3.98 8.78 8.88 8.78h1.77c4.9 0 8.88-3.93 8.88-8.78V89.08z"
              fill="#3c2b24"
            />
            <path
              d="M91.33 50.41H36.67c-5.89 0-10.71 5.14-10.71 11.41c0 6.28 4.82 11.41 10.71 11.41h54.65c5.89 0 10.71-5.14 10.71-11.41c.01-6.27-4.81-11.41-10.7-11.41z"
              fill="#3c2b24"
            />
            <path
              d="M64 11.05c-17.4 0-33.52 18.61-33.52 45.39c0 26.64 16.61 39.81 33.52 39.81s33.52-13.17 33.52-39.81c0-26.78-16.12-45.39-33.52-45.39z"
              fill="#70534a"
            />
            <g fill="#1a1717">
              <ellipse cx="47.56" cy="58.79" rx="4.93" ry="5.1" />
              <ellipse cx="80.44" cy="58.79" rx="4.93" ry="5.1" />
            </g>
            <path
              d="M67.86 68.04c-.11-.04-.21-.07-.32-.08h-7.07c-.11.01-.22.04-.32.08c-.64.26-.99.92-.69 1.63s1.71 2.69 4.55 2.69s4.25-1.99 4.55-2.69c.29-.71-.06-1.37-.7-1.63z"
              fill="#33251f"
            />
            <path
              d="M72.42 76.12c-3.19 1.89-13.63 1.89-16.81 0c-1.83-1.09-3.7.58-2.94 2.24c.75 1.63 6.45 5.42 11.37 5.42s10.55-3.79 11.3-5.42c.75-1.66-1.09-3.33-2.92-2.24z"
              fill="#1a1717"
            />
            <g>
              <path
                d="M64.02 5.03h-.04c-45.44.24-36.13 50.14-36.13 50.14s2.04 5.35 2.97 7.71c.13.34.63.3.71-.05c.97-4.34 4.46-19.73 6.22-24.41a6.075 6.075 0 0 1 6.79-3.83c4.46.81 11.55 1.81 19.38 1.81h.16c7.82 0 14.92-1 19.37-1.81c2.9-.53 5.76 1.08 6.79 3.83c1.75 4.66 5.22 19.96 6.2 24.36c.08.36.58.39.71.05l2.98-7.67c.02.01 9.32-49.89-36.11-50.13z"
                fill="#232020"
              />
              <radialGradient
                id="ssvg-id-man-student-dark-skin-tonea"
                cx="64.001"
                cy="81.221"
                r="37.873"
                gradientTransform="matrix(1 0 0 -1.1282 0 138.298)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".794" stopColor="#444140" stopOpacity="0" />
                <stop offset="1" stopColor="#444140" />
              </radialGradient>
              <path
                d="M100.15 55.17s9.31-49.9-36.13-50.14h-.04c-.71 0-1.4.02-2.08.05c-1.35.06-2.66.16-3.92.31h-.04c-.09.01-.17.03-.26.04c-38.25 4.81-29.84 49.74-29.84 49.74l2.98 7.68c.13.34.62.31.7-.05c.98-4.39 4.46-19.71 6.22-24.37a6.08 6.08 0 0 1 6.8-3.83c4.46.8 11.55 1.8 19.38 1.8h.16c7.82 0 14.92-1 19.37-1.81c2.9-.53 5.76 1.08 6.79 3.83c1.76 4.68 5.25 20.1 6.21 24.42c.08.36.57.39.7.05c.94-2.35 3-7.72 3-7.72z"
                fill="url(#ssvg-id-man-student-dark-skin-tonea)"
              />
            </g>
            <g fill="#1a1717">
              <path d="M40.01 50.72c2.99-4.23 9.78-4.63 13.67-1.48c.62.5 1.44 1.2 1.68 1.98c.4 1.27-.82 2.26-2.01 1.96c-.76-.19-1.47-.6-2.22-.83c-1.37-.43-2.36-.55-3.59-.55c-1.82-.01-2.99.22-4.72.92c-.71.29-1.29.75-2.1.41c-.93-.39-1.27-1.57-.71-2.41z" />
              <path d="M86.07 53.12c-.29-.13-.57-.29-.86-.41c-1.78-.74-2.79-.93-4.72-.92c-1.7.01-2.71.24-4.04.69c-.81.28-1.84.98-2.74.71c-1.32-.4-1.28-1.84-.56-2.76c.86-1.08 2.04-1.9 3.29-2.44c2.9-1.26 6.44-1.08 9.17.55c.89.53 1.86 1.26 2.4 2.18c.78 1.31-.4 3.03-1.94 2.4z" />
            </g>
            <g>
              <path
                d="M116.5 54.28c-1.24 0-2.25.96-2.25 2.14v9.2c0 1.18 1.01 2.14 2.25 2.14s2.25-.96 2.25-2.14v-9.2c0-1.18-1.01-2.14-2.25-2.14z"
                fill="#e8ad00"
              />
              <path
                d="M112 54.28c-1.24 0-2.25.96-2.25 2.14v9.2c0 1.18 1.01 2.14 2.25 2.14s2.25-.96 2.25-2.14v-9.2c0-1.18-1.01-2.14-2.25-2.14z"
                fill="#e8ad00"
              />
              <path
                d="M114.25 54.28c-1.24 0-2.25.96-2.25 2.14v11.19c0 1.18 1.01 2.14 2.25 2.14s2.25-.96 2.25-2.14V56.42c0-1.18-1.01-2.14-2.25-2.14z"
                fill="#ffca28"
              />
              <ellipse
                cx="114.25"
                cy="53.05"
                rx="2.76"
                ry="2.63"
                fill="#ffca28"
              />
              <path
                d="M114.25 53.02c-.55 0-1-.45-1-1v-38c0-.55.45-1 1-1s1 .45 1 1v38c0 .56-.45 1-1 1z"
                fill="#504f4f"
              />
              <linearGradient
                id="ssvg-id-man-student-dark-skin-toneb"
                gradientUnits="userSpaceOnUse"
                x1="64"
                y1="127.351"
                x2="64"
                y2="98.71"
                gradientTransform="matrix(1 0 0 -1 0 128)"
              >
                <stop offset=".003" stopColor="#424242" />
                <stop offset=".472" stopColor="#353535" />
                <stop offset="1" stopColor="#212121" />
              </linearGradient>
              <path
                d="M116 12.98c-30.83-7.75-52-8-52-8s-21.17.25-52 8v.77c0 1.33.87 2.5 2.14 2.87c3.72 1.1 13.13 3.53 18.18 4.54c-.08.08-1.1 1.87-1.83 3.53c0 0 8.14 5.72 33.52 8.28c25.38-2.56 33.76-7.58 33.76-7.58c-.88-1.81-1.79-3.49-1.79-3.49c4.5-.74 14.23-4.07 17.95-5.26c1.25-.4 2.09-1.55 2.09-2.86v-.8z"
                fill="url(#ssvg-id-man-student-dark-skin-toneb)"
              />
              <linearGradient
                id="ssvg-id-man-student-dark-skin-tonec"
                gradientUnits="userSpaceOnUse"
                x1="64"
                y1="127.184"
                x2="64"
                y2="96.184"
                gradientTransform="matrix(1 0 0 -1 0 128)"
              >
                <stop offset=".003" stopColor="#616161" />
                <stop offset=".324" stopColor="#505050" />
                <stop offset=".955" stopColor="#242424" />
                <stop offset="1" stopColor="#212121" />
              </linearGradient>
              <path
                d="M64 4.98s-21.17.25-52 8c0 0 35.41 9.67 52 9.38c16.59.29 52-9.38 52-9.38c-30.83-7.75-52-8-52-8z"
                fill="url(#ssvg-id-man-student-dark-skin-tonec)"
              />
              <linearGradient
                id="ssvg-id-man-student-dark-skin-toned"
                gradientUnits="userSpaceOnUse"
                x1="13.893"
                y1="109.017"
                x2="114.721"
                y2="109.017"
                gradientTransform="matrix(1 0 0 -1 0 128)"
              >
                <stop offset=".001" stopColor="#bfbebe" />
                <stop offset=".3" stopColor="#212121" stopOpacity="0" />
                <stop offset=".7" stopColor="#212121" stopOpacity="0" />
                <stop offset="1" stopColor="#bfbebe" />
              </linearGradient>
              <path
                d="M116 12.98c-30.83-7.75-52-8-52-8s-21.17.25-52 8v.77c0 1.33.87 2.5 2.14 2.87c3.72 1.1 13.13 3.69 18.18 4.71c0 0-.96 1.56-1.83 3.53c0 0 8.14 5.55 33.52 8.12c25.38-2.56 33.76-7.58 33.76-7.58c-.88-1.81-1.79-3.49-1.79-3.49c4.5-.74 14.23-4.07 17.95-5.26c1.25-.4 2.09-1.55 2.09-2.86v-.81z"
                opacity=".4"
                fill="url(#ssvg-id-man-student-dark-skin-toned)"
              />
            </g>
            <g>
              <path
                d="M114.5 120.99c0-14.61-21.75-21.54-40.72-23.1l-8.6 11.03c-.28.36-.72.58-1.18.58c-.46 0-.9-.21-1.18-.58L54.2 97.87c-10.55.81-40.71 4.75-40.71 23.12V124h101l.01-3.01z"
                fill="#212121"
              />
              <radialGradient
                id="ssvg-id-man-student-dark-skin-tonee"
                cx="64"
                cy="5.397"
                r="54.167"
                gradientTransform="matrix(1 0 0 -.5247 0 125.435)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".598" stopColor="#212121" />
                <stop offset="1" stopColor="#616161" />
              </radialGradient>
              <path
                d="M114.5 120.99c0-14.61-21.75-21.54-40.72-23.1l-8.6 11.03c-.28.36-.72.58-1.18.58c-.46 0-.9-.21-1.18-.58L54.2 97.87c-10.55.81-40.71 4.75-40.71 23.12V124h101l.01-3.01z"
                fill="url(#ssvg-id-man-student-dark-skin-tonee)"
              />
            </g>
          </svg>
        </Section>
        <Section
          title="Make a change"
          text="Lorem ipsum dolor sit amet. egestas urna vel ultrices risus, maecenas. Fames turpis morbi est sagittis nulla elementum dignissim tellus aenean."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="137px"
            height="137px"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M17.66 9.53l-7.07 7.07l-4.24-4.24l1.41-1.41l2.83 2.83l5.66-5.66l1.41 1.41zM4 12c0-2.33 1.02-4.42 2.62-5.88L9 8.5v-6H3l2.2 2.2C3.24 6.52 2 9.11 2 12c0 5.19 3.95 9.45 9 9.95v-2.02c-3.94-.49-7-3.86-7-7.93zm18 0c0-5.19-3.95-9.45-9-9.95v2.02c3.94.49 7 3.86 7 7.93c0 2.33-1.02 4.42-2.62 5.88L15 15.5v6h6l-2.2-2.2c1.96-1.82 3.2-4.41 3.2-7.3z"
              fill="#00000"
            />
          </svg>
        </Section>
      </div>
      <div className="px-20 my-40">
        <Form></Form>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </main>
  );
}

export async function getServerSideProps(context) {
  try {
    const response = await getUserProfile(context);

    return {
      props: {
        data: response.data,
      },
    };
  } catch (error) {
    console.log("this is the error ", error);
    return {
      props: {
        data: "",
      },
    };
  }
}
