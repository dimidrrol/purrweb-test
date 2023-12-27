import './Navigation.scss';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();

    function navigateMain() {
        navigate('/', { replace: true });
    }

    function navigateSlider() {
        navigate('/slider', { replace: true });
    }

    return (
        <div className='navigation'>
            <nav className='navigation__panel'>
                <button onClick={navigateMain} type='button' className={`navigation__button ${location.pathname === '/' ? 'navigation__button_type_select' : ''}`}>For Business</button>
                <button onClick={navigateSlider} type='button' className={`navigation__button ${location.pathname === '/slider' ? 'navigation__button_type_select' : ''}`}>To Slider</button>
            </nav>
        </div>
    )
}