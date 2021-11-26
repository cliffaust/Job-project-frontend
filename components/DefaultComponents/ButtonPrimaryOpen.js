const ButtonPrimaryOpen = (props) => {
  return (
    <button
      className={
        "border-2 border-purple-600 bg-transparent text-black rounded-full " +
        props.className
      }
    >
      {props.children}
    </button>
  );
};

export default ButtonPrimaryOpen;
