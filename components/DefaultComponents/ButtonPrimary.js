const ButtonPrimary = (props) => {
  return (
    <button
      className={
        "bg-purple-600 border-2 border-purple-600 font-muli font-bold text-white rounded-full " +
        props.className
      }
    >
      {props.children}
    </button>
  );
};

export default ButtonPrimary;
