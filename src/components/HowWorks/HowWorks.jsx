import './HowWorks.scss';
import Iphone from '../../images/iphone.png';

export default function HowWorks() {
    return (
        <div className='how-works'>
            <img className='how-works__phone' src={Iphone} alt='Iphone' />
            <div className='how-works__text-container'>
                <p className='how-works__text how-works__1row how-works__animation-right'>How Budss Works<span className='how-works__text-shadow'>How Budss Works</span></p>
                <p className='how-works__text how-works__2row how-works__animation-left'>How Budss Works<span className='how-works__text-shadow'>How Budss Works</span></p>
                <p className='how-works__text how-works__3row how-works__animation-right'>How Budss Works<span className='how-works__text-shadow'>How Budss Works</span></p>
            </div>
        </div>
    )
}