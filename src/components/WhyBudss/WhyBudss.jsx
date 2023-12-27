import './WhyBudss.scss';
import PurpleLine from '../../images/purple-line.svg';
import WhyPhone from '../../images/why-phone.png';
import WhyBag1 from '../../images/why-bag1.png';
import WhyBag2 from '../../images/why-bag2.png';
import WhyBag3 from '../../images/why-bag3.png';
import WhySmily from '../../images/why-smily.png';
import WhyLike from '../../images/why-like.png';

export default function WhyBudss() {
    return (
        <div className='why-budss'>
            <div className='why-budss__title-container'>
                <h2 className='why-budss__title'>Why Budss</h2>
                <h3 className='why-budss__subtitle'>We Provide Advanced Payment Solutions To Grow Your Business</h3>
                <img className='why-budss__purple-line' src={PurpleLine} alt='Purple line' />
            </div>
            <div className='why-budss__items-container'>
                <div className='why-budss__item why-budss__item_type_one why-budss__item_right'>
                    <div className='why-budss__item-content why-budss__item-content_right'>
                        <h3 className='why-budss__item-title why-budss__item-title_type_one'>Turn your customers into loyal influencers</h3>
                        <p className='why-budss__item-description why-budss__item-description_type_one'>Budss helps businesses harness the exponential power of loyal customers for acquisition and retention.</p>
                    </div>
                    <img className='why-budss__image-phone' src={WhyPhone} alt='Phone' />
                </div>
                <div className='why-budss__item why-budss__item_type_two'>
                    <div className='why-budss__item-content'>
                        <h3 className='why-budss__item-title why-budss__item-title_type_two'>Harness the power of buying in bulk</h3>
                        <p className='why-budss__item-description why-budss__item-description_type_two'>Get at least 2X more sales with Budss Buying Groups. Your customer base will grow exponentially as your customers add their friends & family to your personalized group.</p>
                    </div>
                    <img className='why-budss__image-bag1' src={WhyBag1} alt='Bag' />
                    <img className='why-budss__image-bag2' src={WhyBag2} alt='Bag' />
                    <img className='why-budss__image-bag3' src={WhyBag3} alt='Bag' />
                </div>
                <div className='why-budss__item why-budss__item_type_three'>
                    <div className='why-budss__item-content'>
                        <h3 className='why-budss__item-title why-budss__item-title_type_three'>Supercharge Loyalty With Instant Cash Back</h3>
                        <p className='why-budss__item-description why-budss__item-description_type_three'>Budss allows for shoppers to earn immediate cash back at their favorite stores.</p>
                    </div>
                    <img className='why-budss__image-like' src={WhyLike} alt='Like' />
                </div>
                <div className='why-budss__item why-budss__item_type_four'>
                    <div className='why-budss__item-content'>
                        <h3 className='why-budss__item-title why-budss__item-title_type_four'>Seasoned with AI and Gamification</h3>
                        <p className='why-budss__item-description why-budss__item-description_type_four'>AI programming creates a personalized customer journey, offering recommendations for their next purchase and optimizing rewards for after purchase.</p>
                    </div>
                    <img className='why-budss__image-smily' src={WhySmily} alt='Smily' />
                </div>
            </div>
        </div>
    )
}