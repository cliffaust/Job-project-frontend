const ButtonPrimary = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={
        "bg-purple-600 border-2 border-purple-600 font-muli text-white rounded-full " +
        props.className
      }
    >
      {props.children}
    </button>
  );
};

export default ButtonPrimary;
