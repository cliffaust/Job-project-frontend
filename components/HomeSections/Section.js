import NextLink from "../DefaultComponents/NextLink";

const Section = ({ title, text, children }) => {
  return (
    <section className="px-6 md:w-325 py-4 bg-gray-100 rounded-lg">
      <div className="flex flex-col items-center gap-4">
        {children}
        <h1 className="text-2xl font-standardTT">{title}</h1>
        <p className="text-base">{text}</p>
      </div>
      <NextLink>Learn More</NextLink>
    </section>
  );
};

export default Section;
