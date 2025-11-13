import React from "react";
import Link from "next/link";

interface CustomButtonProps {
    label: string;
    href?: string;
    type?: "button" | "submit" | "reset";
    buttonType: "filled-outlined" | "filled-nonoutlined" | "outlined";
    btnPadding: "more" | "less";
    disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    href,
    type = "button",
    buttonType,
    btnPadding,
    disabled,
}) => {
    const baseClasses =
        "inline-block font-semibold tracking-wide md:text-[15px] text-xs sm:text-sm lg:text-[16px] xl:text-[17px] transition focus:outline-none focus:ring-0 ease-in-out duration-300 transition-all cursor-pointer";

    let buttonClasses = "";

    switch (buttonType) {
        case "filled-outlined":
            buttonClasses =
                "bg-[#D1792C] border-2 border-[#D1792C] text-white hover:bg-white hover:text-[#D1792C] hover:border-[#D1792C] focus:ring-[#D1792C]/70";
            break;

        case "filled-nonoutlined":
            buttonClasses =
                "bg-[#D1792C] border-2 border-[#D1792C] text-white hover:bg-white hover:text-[#D1792C] hover:border-white focus:ring-[#D1792C]/70";
            break;

        case "outlined":
            buttonClasses =
                "bg-transparent border-2 border-white text-white hover:bg-[#D1792C] hover:border-[#D1792C] hover:text-white focus:ring-[#D1792C]/70";
            break;

        default:
            buttonClasses =
                "bg-[#D1792C] border-2 border-[#D1792C] text-white hover:bg-[#b85f1f] focus:ring-[#D1792C]/70";
    }

    let paddingClasses = "";

    switch (btnPadding) {
        case "more":
            paddingClasses =
                "md:px-[16px] px-[12px] rounded-xl sm:rounded-2xl sm:px-[18px] lg:px-[24px] xl:px-[26px] sm:py-[9px] py-[8px] md:py-[11px] lg:py-[13px] xl:py-[14px]";
            break;

        case "less":
            paddingClasses =
                "md:px-[22px] px-[14px] rounded-md sm:rounded-lg sm:px-[18px] xl:px-[26px] sm:py-[6px] py-[4px] md:py-[8px] xl:py-[10px]";
            break;
        default:
            paddingClasses =
                "md:px-[24px] px-[15px] rounded-xl sm:rounded-2xl sm:px-[18px] xl:px-[28px] sm:py-[9px] py-[8px] md:py-[12px] xl:py-[15px]";
    }

    // 🔹 Disabled style (light grey, no hover)
    const disabledClasses =
        "bg-gray-300 border-gray-300 text-gray-600 cursor-not-allowed opacity-80";

    const finalClasses = `${baseClasses} ${paddingClasses} ${disabled ? disabledClasses : buttonClasses
        }`;

    if (href) {
        return (
            <Link href={href} className={finalClasses}>
                {label}
            </Link>
        );
    }

    return (
        <button type={type} className={finalClasses} disabled={disabled}>
            {label}
        </button>
    );
};

export default CustomButton;
