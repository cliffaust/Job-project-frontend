const Section = ({ title, text, children }) => {
  return (
    <section className="px-6 w-325 py-4 bg-gray-100 rounded-lg">
      <div className="flex flex-col items-center gap-4">
        {children}
        <h1 className="text-2xl font-standardTT">{title}</h1>
        <p className="text-base">{text}</p>
      </div>
      <div className="flex items-center gap-1 mt-5">
        <h1 className="text-lg tracking-wider">Learn more</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </section>
  );
};

export default Section;
