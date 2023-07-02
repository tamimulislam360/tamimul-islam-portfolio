
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

const SeeAllButton = ({link, className} : {link?: string, className?: string}) => {
    return (
        <div className={`absolute inset-x-0 bottom-0 p-7 pt-11 flex justify-center items-center bg-gradient-to-t from-white-primary to-transparent ${className}`}>
            <Link to={link || '/'}>
            <Button
            className={`bg-dark-primary dark:bg-accent-secondary text-white-primary font-bold rounded-full p-3 px-6 shadow-none hover:shadow-none hover:bg-dark-secondary dark:hover:bg-accent-secondary/90 ${className}`}
        >
            See All
        </Button>
            </Link>
        </div>
    );
};

export default SeeAllButton;