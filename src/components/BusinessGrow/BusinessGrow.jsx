import './BusinessGrow.scss';
import ButtonSales from '../ButtonSales/ButtonSales';
import Facebook from '../../images/Facebook.svg';
import Instagram from '../../images/Instagram.svg';
import Twitter from '../../images/Twitter.svg';
import TikTok from '../../images/TikTok.svg';
import Woo from '../../images/Woo.svg';
import Shopify from '../../images/Shopify.svg';
import Square from '../../images/Square.svg';
import Squarespace from '../../images/Squarespace.svg';
import Clover from '../../images/Clover.svg';

export default function BusinessGrow({ handleOpenPopupWithForm }) {
    return (
        <div className='business-grow'>
            <div className='business-grow__title-container'>
                <h2 className='business-grow__title'>Let  Your Business Grow</h2>
                <ButtonSales
                    type='button'
                    handleOpenPopupWithForm={handleOpenPopupWithForm}
                />
            </div>
            <div className='business-grow__socials'>
                <div className='business-grow__info'>
                    <h3 className='business-grow__info-title'>Your Brand Awareness Maters</h3>
                    <p className='business-grow__info-description'>Budss is a husle free solution to put your brand on any digital surface including Instagram, Facebook, Twitter and TikTok</p>
                </div>
                <div className='business-grow__icons'>
                    <img className='business-grow__icon business-grow__icon_type_facebook' src={Facebook} alt='Facebook' />
                    <img className='business-grow__icon business-grow__icon_type_instagram' src={Instagram} alt='Instagram' />
                    <img className='business-grow__icon business-grow__icon_type_twitter' src={Twitter} alt='Twitter' />
                    <img className='business-grow__icon business-grow__icon_type_tiktok' src={TikTok} alt='TikTok' />
                </div>
            </div>
            <div className='business-grow__logos-desktop'>
                <img className='business-grow__logo' src={Woo} alt='Woo' />
                <img className='business-grow__logo' src={Shopify} alt='Shopify' />
                <img className='business-grow__logo' src={Square} alt='Square' />
                <img className='business-grow__logo' src={Squarespace} alt='Squarespace' />
                <img className='business-grow__logo' src={Clover} alt='Clover' />
            </div>
            <div className='business-grow__logos-mobile'>
                <img className='business-grow__logo' src={Square} alt='Square' />
                <img className='business-grow__logo' src={Shopify} alt='Shopify' />
                <img className='business-grow__logo' src={Woo} alt='Woo' />
                <img className='business-grow__logo' src={Squarespace} alt='Squarespace' />
                <img className='business-grow__logo' src={Clover} alt='Clover' />
            </div>
        </div>
    )
}