import { ButtonShape, ButtonSize, ButtonVariants } from "@/scripts/types/ui";

export function useBaseButton() {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    danger: "btn-danger",
    success: "btn-success",
    warning: "btn-warning",
    info: "btn-info",
    light: "btn-light",
    dark: "btn-dark",
    "outline-primary": "btn-outline-primary",
    "outline-secondary": "btn-outline-secondary",
    "outline-danger": "btn-outline-danger",
    "outline-success": "btn-outline-success",
    "outline-warning": "btn-outline-warning",
    "outline-info": "btn-outline-info",
    "outline-light": "btn-outline-light",
    "outline-dark": "btn-outline-dark"
  };

  const sizes = {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg"
  };

  const shapes = {
    default: "",
    pill: "rounded-pill",
    square: "rounded-0"
  };

  const getClassVariant = (variant: ButtonVariants) => variants[variant];

  const getClassSize = (size: ButtonSize) => sizes[size];

  const getClassShape = (shape: ButtonShape) => shapes[shape];

  return {
    getClassVariant,
    getClassSize,
    getClassShape
  };
}
