import React from "react";

interface BigButtonProps {
    type?: string;
    children: React.ReactNode;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    onClick?: () => void;
}

const BigButton = ({ type = 'Primary', children, icon: Icon, onClick }: BigButtonProps) => {
    return (
        <button onClick={onClick} className={`bigButton${type} flex items-center justify-center gap-4`}>
            {Icon && <Icon className="w-[30px] h-[30px]" />}
            {children}
        </button>
    );
};

export default BigButton;
