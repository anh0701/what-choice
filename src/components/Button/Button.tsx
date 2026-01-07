import type { MouseEventHandler, ReactNode } from "react";

type ButtonVariant = "primary" | "danger" | "secondary";

interface ButtonProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    variant?: ButtonVariant;
    disabled?: boolean;
}

function Button({
    children,
    onClick,
    type = "button",
    variant = "primary",
    disabled = false,
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btn btn-${variant}`}
        >
            {children}
        </button>
    )
}

export default Button