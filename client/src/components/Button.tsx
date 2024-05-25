import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  onClick: () => void;
  type?: "primary" | "secondary";
  className?: string;
  btnType?: "button" | "submit";
};

const Button = ({
  text,
  onClick,
  type = "primary",
  className,
  btnType = "button",
}: Props) => {
  return (
    <button
      type={btnType}
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
