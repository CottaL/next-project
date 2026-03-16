"use client";
import { Button } from "@mui/material";

type ButtonProps = {
  onClick: () => unknown;
  label: string;
};

const MyButton = ({ onClick, label }: ButtonProps) => {
  return <Button onClick={onClick}>{label}</Button>;
};

export default MyButton;
