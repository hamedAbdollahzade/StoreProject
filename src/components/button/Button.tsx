import { ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "danger" | "warning" | "success";

type TButton = ComponentProps<"button"> & {
  variant?: TVariant;
};

const checkVariant = (variant?: TVariant) => {
  if (variant === "danger") {
    return { backgroundColor: "red", color: "white" };
  } else if (variant === "primary") {
    return { backgroundColor: "blue", color: "white" };
  } else if (variant === "secondary") {
    return { backgroundColor: "gray", color: "black" };
  } else if (variant === "success") {
    return { backgroundColor: "green", color: "white" };
  } else if (variant === "warning") {
    return { backgroundColor: "yellow", color: "white" };
  }
};

const Button = ({ children, variant, className, style, ...rest }: TButton) => {
  const defaultClass = "p-1 rounded m-1";
  return (
    <button
      className={`${defaultClass} ${className}`}
      {...rest}
      style={{ ...style, ...checkVariant(variant) }}
    >
      {children}
    </button>
  );
};

export default Button;
