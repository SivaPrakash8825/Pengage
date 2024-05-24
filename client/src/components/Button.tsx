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
            ? "border-2  border-blue-700 bg-blue-700 text-white"
            : "border-2  border-blue-700 bg-white text-blue-700"
        } rounded-md px-10  py-2 capitalize `,
        className,
      )}
    >
      {text}
    </button>
  );
};

export default Button;
