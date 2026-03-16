"use client";
import { Button, ButtonProps as MuiButtonProps } from "@mui/material";
import { ReactNode } from "react";

type MyButtonProps = MuiButtonProps & {
  label?: string;
  children?: ReactNode;
};

const MyButton = ({ onClick, label, children, ...props }: MyButtonProps) => {
  return (
    <Button onClick={onClick} {...props}>
      {label || children}
    </Button>
  );
};

export default MyButton;
