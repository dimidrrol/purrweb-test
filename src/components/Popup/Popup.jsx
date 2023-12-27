import './Popup.scss';

export default function Popup(props) {

    function handleClose() {
        props.closeAllPopup();
        if (props.isPopupWithFormOpen) {
            props.resetForm();
        }
    }

    return (
        <div onMouseDown={handleClose} className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div onMouseDown={evt => evt.stopPropagation()} className='popup__container'>
                <button onClick={handleClose} type='button' className='popup__close-button'></button>
                {props.children}
            </div>
        </div>
    )
}