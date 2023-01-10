function Button({ text, icon, onClick }) {
  return (
    <button
      style={{
        border: "2px solid",
        borderRadius: "10px",
        width: "50%",
        lineHeight: "30px",
      }}
      onClick={onClick}
    >
      <img
        src={icon}
        style={{
          widtd: "30px",
          height: "30px",
          float: "left",
        }}
      ></img>
      {text}
    </button>
  );
}

export default Button;
