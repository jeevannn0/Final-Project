import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    light_blue_500: "bg-light_blue-500 text-white-A700",
    white_A700: "bg-white-A700 shadow-xs",
    blue_A400: "bg-blue-A400",
  },
  outline: {
    white_A700: "border-white-A700 border border-solid text-white-A700",
  },
};
const sizes = {
  md: "h-[50px] px-[15px]",
  xs: "h-5",
  sm: "h-[45px] px-[15px] text-sm",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "circle",
  variant = "outline",
  size = "sm",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["md", "xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["light_blue_500", "white_A700", "blue_A400"]),
};

export { Button };
