import type { ButtonHTMLAttributes, ReactNode } from "react";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary'; //'| 'ghost'
}


export const Button = ({ children, variant='primary', className='', ...rest }: ButtonProps) => {
    const baseStyles = 'flex items-center justify-center gap-1 rounded-lg text-base text-label-text';

    const variantStyles = {
        primary: 'bg-main-bg border border-solid border-label-text text-label-text',
        ghost: 'bg-main-bg text-label-text'
    }

    return (
        <button className={`${baseStyles} ${variantStyles[variant]}`}>
            {children}
        </button>
    )
}