
import { Outlet } from 'react-router-dom';
import NavBar from '../components/shared/NavBar/NavBar';
import BackToTop from '../components/ui/BackToTop/BackToTop';
import { useTheme } from '../context/ThemeProvider';
import Socials from '../components/ui/buttons/Socials/Socials';

const Main = () => {
    const [theme] = useTheme()
    return (
        <div className={`${theme === 'dark' ? 'dark' : ''} relative`}>
            <NavBar/>
            <Outlet />
            <BackToTop />
            <Socials className="hidden sm:flex flex-col justify-center items-center fixed top-52 right-4 z-50" />
        </div>
    );
};

export default Main;