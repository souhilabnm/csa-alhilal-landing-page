import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 tracking-wide";
  
  const variants = {
    primary: "border border-transparent text-white bg-brand-primary hover:bg-brand-deep shadow-lg hover:shadow-brand-primary/30 focus:ring-brand-primary",
    secondary: "border border-transparent text-brand-dark bg-brand-ice hover:bg-white hover:shadow-lg focus:ring-brand-ice",
    outline: "border-2 border-white text-white hover:bg-white hover:text-brand-dark focus:ring-white",
    dark: "border border-transparent text-white bg-brand-dark hover:bg-brand-deep focus:ring-brand-dark",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};