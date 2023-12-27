import './Header.scss';
import logo from '../../images/logo.svg';
import ButtonSales from '../ButtonSales/ButtonSales';

export default function Header({ handleOpenPopupNavigate, handleOpenPopupWithForm }) {
    return (
        <header className='header'>
            <div className='header__box'>
                <div className='header__logo-box'>
                    <img className='header__logo' src={logo} />
                    <p className='header__brand-name'>budss</p>
                </div>
                <div className='header__button-container'>
                    <ButtonSales
                        type='button'
                        handleOpenPopupWithForm={handleOpenPopupWithForm}
                    />
                </div>
                <button onClick={handleOpenPopupNavigate} type='button' className='header__hamburger-button'></button>
            </div>

        </header>
    )
}