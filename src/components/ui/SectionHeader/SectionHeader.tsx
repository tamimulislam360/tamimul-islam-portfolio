import React from 'react';

type SectionHeader = {
    children?: React.ReactNode,
    header?: string,
    headerSpan?: string,
    spanClasses?: string,
    subheader?: string,
    headerClasses?: string,
    subheaderClasses?: string,
    icon?: string,
    iconClasses?: string
}

const SectionHeader = ({
    children,
    header,
    headerSpan,
    spanClasses,
    subheader,
    headerClasses,
    subheaderClasses,
    icon,
    iconClasses
} : SectionHeader) => {
    return (
        <div className="max-w-md mx-auto my-12 flex flex-col justify-center items-center gap-2">
            {
                children && (
                    children
                )
            }
            {
                !children && (
                    <>
                       
                        <img data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="easeIn" className={`max-w-[120px] max-h-[160px] ${iconClasses}`} src={icon} alt="" />
                        
                        <h1 className={`text-2xl md:text-4xl font-bold text-dark-primary dark:text-white-primary ${headerClasses}`}>{header} <span className={`text-accent-primary dark:text-accent-secondary ${spanClasses}`}>{headerSpan}</span></h1>
                        <p className={`text-sm md:text-lg font-semibold text-dark-secondary dark:text-white-secondary text-center ${subheaderClasses}`}>{subheader} </p>
                    </>
                )
            }
        </div>
    );
};

export default SectionHeader;