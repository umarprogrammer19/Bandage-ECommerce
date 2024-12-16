import React from "react";

interface ButtonProps {
  text: string;
  paddingY: string;
  paddingL: string;
  paddingR: string;
  rounded: string;
  backgroundColor?: string; // Optional backgroundColor prop
  textColor?: string; // Optional textColor prop
  borderColor?: string; // Optional borderColor prop
  outline?: boolean; // Optional outline prop
}

const Button: React.FC<ButtonProps> = ({
  text,
  paddingY,
  paddingL,
  paddingR,
  rounded,
  backgroundColor = "bg-primaryColor",
  textColor = "text-white", // Default text color
  borderColor = "border-primaryColor", // Default border color
  outline = false, // Default no outline
}) => {
  return (
    <div>
      <button
        className={`${textColor} font-semibold text-sm ${rounded} ${backgroundColor} ${borderColor} ${
          outline ? "border-[0.1rem]" : "border"
        }`}
        style={{
          paddingTop: paddingY,
          paddingBottom: paddingY,
          paddingLeft: paddingL,
          paddingRight: paddingR,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
