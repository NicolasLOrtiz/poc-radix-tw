import React from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ asChild = false, className, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        return (
            <Comp
                ref={ref}
                className={`inline-flex items-center justify-center px-4 py-2 bg-blue-500 text-white 
                            font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 
                            focus:ring-blue-400 ${className}`}
                {...props}
            >
                {children}
            </Comp>
        );
    }
);

Button.displayName = "Button";
