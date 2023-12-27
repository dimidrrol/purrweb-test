import './Footer.scss';
import ButtonSales from '../ButtonSales/ButtonSales';
import FooterLogo from '../../images/Footer-logo.svg';

export default function Footer({ handleOpenPopupWithForm }) {
    return (
        <footer className='footer'>
            <div className='footer__links'>
                <img className='footer__logo' src={FooterLogo} alt='Logo' />
                <nav className='footer__navigate-desktop'>
                    <button type='button' className='footer__button'>For Business</button>
                    <button type='button' className='footer__button'>For Customers</button>
                </nav>
                <nav className='footer__navigate-mobile'>
                    <button type='button' className='footer__button'>For Business</button>
                    <button type='button' className='footer__button'>For Customers</button>
                    <button type='button' className='footer__button'>Privacy Policy</button>
                    <button type='button' className='footer__button'>Terms Of Use - Seller</button>
                    <button type='button' className='footer__button'>Terms of Use - Sellers & Customers</button>
                </nav>
                <div className='footer__buttons'>
                    <ButtonSales
                        type='button'
                        handleOpenPopupWithForm={handleOpenPopupWithForm}
                    />
                    <div className='footer__stores'>
                        <button type='button' className='footer__store footer__store_type_apple-store'></button>
                        <button type='button' className='footer__store footer__store_type_google-store'></button>
                    </div>
                </div>
            </div>
            <div className='footer__underline'>
                <p className='footer__copy'>&copy; Copyright 2023, All Rights Reserved by Budss</p>
                <nav className='footer__navigation'>
                    <button type='button' className='footer__navigation-button'>Privacy Policy</button>
                    <button type='button' className='footer__navigation-button'>Terms Of Use - Seller</button>
                    <button type='button' className='footer__navigation-button'>Terms of Use - Sellers & Customers</button>
                </nav>
            </div>
        </footer>
    )
}