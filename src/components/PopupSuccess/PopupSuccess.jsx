import './PopupSuccess.scss';
import Popup from '../Popup/Popup';
import Success from '../../images/success.png';

export default function PopupSuccess({ isOpen, closeAllPopup, isPopupWithFormOpen }) {
    return (
        <Popup isOpen={isOpen} closeAllPopup={closeAllPopup} isPopupWithFormOpen={isPopupWithFormOpen}>
            <div className='popup-success'>
                <img className='popup-success__image' src={Success} alt='Success' />
                <h2 className='popup-success__title'>Thank you!</h2>
                <p className='popup-success__description'>Thank you, we have received your application and will contact you soon!</p>
                <button onClick={closeAllPopup} type='button' className='popup-success__button'>Super!</button>
            </div>
        </Popup>
    )
}