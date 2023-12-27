import './PopupNavigate.scss';
import ButtonSales from '../ButtonSales/ButtonSales';

export default function PopupNavigate({ isOpen, closeAllPopup, handleOpenPopupWithForm, handleClosePopupNavigate, isPopupNavigateOpen }) {
    return (
        <div className={`popup-navigate ${isOpen ? 'popup-navigate_opened' : ''}`}>
            <div className='popup-navigate__buttons'>
                <button onClick={closeAllPopup} type='button' className='popup-navigate__close-button'></button>
                <ButtonSales
                    type='button'
                    handleOpenPopupWithForm={handleOpenPopupWithForm}
                    handleClosePopupNavigate={handleClosePopupNavigate}
                    isPopupNavigateOpen={isPopupNavigateOpen}
                />
                <nav className='popup-navigate__navigate'>
                    <button type='button' className='popup-navigate__button'>For Business</button>
                    <button type='button' className='popup-navigate__button'>For Customers</button>
                    <button type='button' className='popup-navigate__button'>Privacy Policy</button>
                    <button type='button' className='popup-navigate__button'>Terms Of Use - Seller</button>
                    <button type='button' className='popup-navigate__button'>Terms of Use - Sellers & Customers</button>
                </nav>
            </div>
        </div>
    )
}