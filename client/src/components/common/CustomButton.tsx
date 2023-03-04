import { Button, textTransform } from "@pankod/refine-mui"
import { CustomButtonProps } from "interfaces/common"
import React from "react"

const CustomButton = ({
  title,
  type,
  backgroundColor,
  color,
  fullWidth,
  icon,
  handleClick,
  disabled,
}: CustomButtonProps) => {
  return (
    <Button
      disabled={disabled}
      type={type === "submit" ? "submit" : "button"}
      sx={{
        flex: fullWidth ? 1 : "unset",
        width: fullWidth ? "100%" : "fit-content",
        minWidth: 130,
        padding: "10px 15px",
        fontSize: 16,
        backgroundColor,
        color,
        fontWeight: 600,
        textTransform: "capitalize",
        "&:hover": {
          opacity: 0.9,
          backgroundColor,
        },
      }}
      onClick={handleClick}
    >
      {icon}
      {title}
    </Button>
  )
}

export default CustomButton
