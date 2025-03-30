// import React from 'react';

interface NavItemProps {
    label: string;
}

const NavItem: React.FC<NavItemProps> = ({ label }) => {
    return (
        <li className="group flex items-center py-3 w-[150px]">
            <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                {label}
            </span>
        </li>
    );
};

export default NavItem;