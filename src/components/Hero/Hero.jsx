import './Hero.scss';
import HeroPicture from '../../images/hero-picture.png';
import ButtonSales from '../ButtonSales/ButtonSales';

export default function Hero({ handleOpenPopupWithForm }) {
    return (
        <div className='hero'>
            <div className='hero__text-box'>
                <h2 className='hero__title'>Everyone is an Influencer</h2>
                <p className='hero__description'>Budss is a payments as a service and WOM engine dedicated to acquisition and retention of customers to your business.</p>
                <ButtonSales
                    type='button'
                    handleOpenPopupWithForm={handleOpenPopupWithForm}
                />
            </div>
            <img className='hero__picture' src={HeroPicture} alt='Hero picture' />
        </div>
    )
}