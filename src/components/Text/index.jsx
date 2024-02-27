import React from "react";

const sizes = {
  xs: "text-[11px] font-normal leading-4",
  lg: "text-sm font-normal leading-5",
  s: "text-xs font-normal leading-[15px]",
  "2xl": "text-base font-medium leading-[22px]",
  xl: "text-[15px] font-normal leading-[21px]",
  md: "text-[13px] font-normal leading-[19px]",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
