const Logo = ({ type }) => {
  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer">
      <h1
        className={
          "block font-lobster " +
          (type === "large"
            ? "text-3xl"
            : type === "medium"
            ? "text-2xl"
            : "text-xl")
        }
      >
        Job Finder
      </h1>
      <div
        className={
          "h-1 bg-purple-800 rounded " +
          (type === "large" ? "w-16" : type === "medium" ? "w-14" : "w-12")
        }
      ></div>
    </div>
  );
};

export default Logo;
