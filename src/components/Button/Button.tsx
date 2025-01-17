import React, {ButtonHTMLAttributes, HTMLAttributes} from 'react';
import {Slot} from "@radix-ui/react-slot";

type ButtonVariants = 'filled' | 'outlined' | 'text';

interface BaseButtonProps {
    variant?: ButtonVariants;
    className?: string;
    children?: React.ReactNode;
}

interface ButtonAsButtonProps
    extends BaseButtonProps,
        ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: false;
    ref?: React.Ref<HTMLButtonElement>;
}

interface ButtonAsSlotProps
    extends BaseButtonProps,
        HTMLAttributes<HTMLElement> {
    asChild: true;
    ref?: React.Ref<HTMLElement>;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsSlotProps;

/**
 * Componente de botão que suporta:
 * - variant = 'filled' | 'outlined' | 'text' (padrão: 'filled')
 * - estados: enabled (padrão), hovered, focused, pressed e disabled
 * - asChild: caso seja true, usa <Slot> do Radix UI ao invés de <button>
 * - dark mode
 * - animação de transição entre estados
 * - repassa props adicionais para o container
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'filled',
            asChild = false,
            className,
            children,
            ...props
        },
        ref
    ) => {

        const baseClasses = [
            'inline-flex',
            'items-center',
            'justify-center',
            'rounded-md',
            'px-4',
            'py-2',
            'text-sm',
            'font-medium',
            'transition-colors',
            'duration-200',
            'ease-in-out',
            'focus:outline-none',
            'focus:ring-2',
            'focus:ring-offset-2',
            'disabled:opacity-50',
            'disabled:cursor-not-allowed',
        ];

        const variantClasses: Record<ButtonVariants, string[]> = {
            filled: [
                'bg-blue-600',
                'text-white',
                'dark:bg-red-500',
                'dark:text-white',
                'hover:bg-blue-700',
                'dark:hover:bg-red-400',
                'active:bg-blue-800',
                'dark:active:bg-red-600',
                'focus:ring-blue-500',
            ],
            outlined: [
                'border',
                'border-blue-600',
                'text-blue-600',
                'dark:border-red-500',
                'dark:text-red-400',
                'hover:bg-blue-50',
                'dark:hover:bg-red-600/20',
                'active:bg-blue-100',
                'dark:active:bg-red-600/30',
                'focus:ring-blue-500',
            ],
            text: [
                'text-blue-600',
                'dark:text-red-400',
                'hover:bg-blue-50',
                'dark:hover:bg-red-700/20',
                'active:bg-blue-100',
                'dark:active:bg-red-700/30',
                'focus:ring-blue-500',
            ],
        };

        const combinedClasses = [
            ...baseClasses,
            ...variantClasses[variant],
            className ?? '',
        ]
            .filter(Boolean)
            .join(' ');


        if (asChild) {
            return (
                <Slot
                    {...props}
                    ref={ref as React.Ref<HTMLElement>}
                    className={combinedClasses}
                >
                    {children}
                </Slot>
            )
        }

        return (
            <button
                {...props}
                ref={ref as React.Ref<HTMLButtonElement>}
                className={combinedClasses}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
