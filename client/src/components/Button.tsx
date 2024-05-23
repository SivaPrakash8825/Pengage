import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  onClick: () => void;
  type?: "primary" | "secondary";
  className?: string;
};

const Button = ({ text, onClick, type = "primary", className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        `${
          type == "primary"
            ? "bg-blue-700  text-white border-2 border-blue-700"
            : "bg-white  text-blue-700 border-2 border-blue-700"
        } capitalize rounded-md  py-2 px-10 `,
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
