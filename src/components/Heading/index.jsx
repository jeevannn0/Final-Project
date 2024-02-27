import React from "react";

const sizes = {
  s: "text-2xl font-semibold leading-[17px]",
  md: "text-[32px] font-bold leading-[39px]",
  xs: "text-sm font-bold leading-5",
  lg: "text-[40px] font-bold leading-[48px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
