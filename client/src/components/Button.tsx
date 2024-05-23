type Props = {
  text: string;
  onClick: () => void;
  type?: "primary" | "secondary";
};

const Button = ({ text, onClick, type = "primary" }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${
        type == "primary"
          ? "bg-blue-700  text-white border-2 border-blue-700"
          : "bg-white  text-blue-700 border-2 border-blue-700"
      } capitalize rounded-md  py-2 px-8 `}
    >
      {text}
    </button>
  );
};

export default Button;
