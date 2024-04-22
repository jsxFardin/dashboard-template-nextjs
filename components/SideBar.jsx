"use client";

import { HiMenu } from "react-icons/hi";
import { TypographyH3 } from "./micro-components/TypographyH3";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { MdDashboard } from "react-icons/md";
import { FaTable } from "react-icons/fa";
import { MdFormatAlignLeft } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { useState } from "react";
const SideBar = () => {
    const router = useRouter();
    const [isCollapsed, setIsCollapsed] = useState(false); // State to track sidebar collapse

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const sidebarClasses = `flex flex-col gap-2 w-[${isCollapsed ? '80px' : '300px'}] h-100vh border-r min-h-screen p-4`; // Dynamic class based on collapse state
    const logoClasses = `flex items-center pl-1 gap-4 ${isCollapsed && 'hidden'}`; // Hide logo when collapsed
    const buttonTextClasses = `${isCollapsed && 'hidden'}  text-md`; // Hide button text when collapsed
    const navClass = `rounded-md my-2 gap-1 border-none`
    return (
        <aside className={sidebarClasses}>
            <div className="flex flex-col mb-8 mt-2">
                <div className="flex items-center justify-center gap-3">
                    <div className={logoClasses}>
                        <TypographyH3 text={"WEB 3 APP"} />
                    </div>
                    <HiMenu size={40} className="p-2 mb-0.5 rounded-full hover:bg-purple-500 hover:text-white" onClick={toggleSidebar} />
                </div>
            </div>
            <div className="flex flex-col items-start justify-center ">
                <Button
                    className={navClass}
                    variant="outline"
                    onClick={() => router.push("/")}
                >
                    <MdDashboard size={19} />
                    <span className={buttonTextClasses}>Dashboard</span>
                </Button>
                <Button
                    className={navClass}
                    variant="outline"
                    onClick={() => router.push("/table/")}
                >
                    <FaTable size={18} />
                    <span className={buttonTextClasses}>Table</span>
                </Button>
                <Button
                    className={navClass}
                    variant="outline"
                    onClick={() => router.push("/form/")}
                >
                    <MdFormatAlignLeft size={18} />
                    <span className={buttonTextClasses}>Form</span>
                </Button>
                <Button
                    className={navClass}
                    variant="outline"
                    onClick={() => router.push("/login/")}
                >
                    <CiLogin size={18} />
                    <span className={buttonTextClasses}>Login</span>
                </Button>
            </div>
        </aside>
    );
};

export default SideBar;