import { Button } from "@material-tailwind/react";
import {BsArrowRight} from 'react-icons/bs'
import { Link } from "react-router-dom";

type ButtonProps = {
    children?: React.ReactNode,
    link?: string,
    icon?: string | React.ReactNode,
    className?: string,
    linkClasses?: string,
    iconClasses?: string
}

const ReadMoreButton = ({children, link, icon, className, linkClasses, iconClasses}: ButtonProps) => {
  return (
    <Link to={link || '/'} className={` ${linkClasses}`}>
      <Button variant="text" className={`flex items-center gap-2 hover:bg-transparent focus:bg-transparent pl-0 ${className}`}>
        {children || 'Read More'} 
        {icon || <BsArrowRight strokeWidth={2} className={`h-5 w-5 ${iconClasses}`} />}
      </Button>
    </Link>
  );
};

export default ReadMoreButton;
