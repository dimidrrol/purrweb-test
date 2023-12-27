import './About.scss';
import IconStar from '../../images/icon-star.svg';
import IconArrow from '../../images/icon-arrow.svg';
import IconZigZag from '../../images/icon-zigzag.svg';
import IconChain from '../../images/icon-chain.svg';
import AboutPicture from '../../images/about-picture.png';
import PurpleLine from '../../images/purple-line.svg';

export default function About() {
    return (
        <div className='about'>
            <h2 className='about__title'>About Budss</h2>
            <div className='about__container'>
                <div className='about__subtitle-container'>
                    <h3 className='about__subtitle'>Payment as a service, powered seamlessly by our network of shoppers</h3>
                    <img className='about__purple-line' src={PurpleLine} alt='purple line' />
                </div>
                <div className='about__info-container'>
                    <div className='about__item'>
                        <img className='about__icon' src={IconStar} alt='Star' />
                        <h3 className='about__item-title'>Contactless</h3>
                        <p className='about__item-description'>Budss uses near field communication (NFC) for making contactless payments.</p>
                    </div>
                    <div className='about__item'>
                        <img className='about__icon' src={IconArrow} alt='Star' />
                        <h3 className='about__item-title'>Increased Buying Power</h3>
                        <p className='about__item-description'>Returning customers spend up to 3X more.</p>
                    </div>
                    <div className='about__item'>
                        <img className='about__icon' src={IconZigZag} alt='Star' />
                        <h3 className='about__item-title'>Analytics & Insights</h3>
                        <p className='about__item-description'>Gain a holistic view into your customers’ buying behavior & purchasing patterns.</p>
                    </div>
                    <div className='about__item'>
                        <img className='about__icon' src={IconChain} alt='Star' />
                        <h3 className='about__item-title'>Fraud Protection</h3>
                        <p className='about__item-description'>Budss handles all payments with a fraud prevention algorithm to flag high risk purchases & a user set PIN code to keep payment info secure.</p>
                    </div>
                </div>
            </div>
            <img className='about__picture' src={AboutPicture} alt='Picture' />
        </div>
    )
}