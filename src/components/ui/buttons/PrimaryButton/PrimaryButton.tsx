import { Button } from '@material-tailwind/react';
import React from 'react';

type ButtonProps = {
    children: React.ReactNode,
    className?: string
}

type ButtonTypes = {
    type?: "button" | "submit" | "reset" | undefined
}

const PrimaryButton = ({ children, className, type }: ButtonProps & ButtonTypes) => {
    const hndleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
    }
    return (
        <Button
            onClick={(e)=> hndleClick(e)}
            type={type || 'button'}
            className={`bg-dark-primary dark:bg-accent-secondary text-white-primary font-bold rounded-full p-3 px-6 shadow-none hover:shadow-none hover:bg-dark-secondary dark:hover:bg-accent-secondary/90 ${className}`}
        >
            {children}
        </Button>
    );
};

export default PrimaryButton;