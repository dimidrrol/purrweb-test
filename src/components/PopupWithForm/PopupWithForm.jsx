import './PopupWithForm.scss';
import Popup from '../Popup/Popup'
import ButtonSales from '../ButtonSales/ButtonSales';
import { useFormWithValidation } from '../FormValidation/FormValidation';

export default function PopupWithForm({ isOpen, closeAllPopup, handleOpenPopupSuccess, closePopupWithForm }) {
    const { values, handleChange, errors, isValid, resetForm, namePattern, emailPattern, phonePattern, urlPattern } = useFormWithValidation();

    function handleSubmit(evt) {
        evt.preventDefault();
        resetForm();
        handleOpenPopupSuccess();
        closePopupWithForm();
    }

    function closeForm() {
        closeAllPopup();
        resetForm();
    }

    return (
        <Popup isOpen={isOpen} closeAllPopup={closeForm} resetForm={resetForm}>
            <form onSubmit={handleSubmit} className='popup-form'>
                <div className='popup-form__inputs-container'>
                    <div className='popup-form__input-container'>
                        <label className='popup-form__label'>Name <span className='popup-form__require'>*</span></label>
                        <input pattern={namePattern.source} onChange={handleChange} value={values.name || ''} name='name' type='text' className={`popup-form__input ${errors.name ? 'popup-form__input_no-valid' : ''}`} placeholder='Enter name' required />
                        <span className='popup-form__span'>{errors.name}</span>
                    </div>
                    <div className='popup-form__input-container'>
                        <label className='popup-form__label'>Email <span className='popup-form__require'>*</span></label>
                        <input pattern={emailPattern.source} onChange={handleChange} value={values.email || ''} name='email' type='email' className={`popup-form__input ${errors.email ? 'popup-form__input_no-valid' : ''}`} placeholder='Enter email' required />
                        <span className='popup-form__span'>{errors.email}</span>
                    </div>
                    <div className='popup-form__input-container'>
                        <label className='popup-form__label'>Phone number <span className='popup-form__require'>*</span></label>
                        <input pattern={phonePattern.source} onChange={handleChange} value={values.phone || ''} name='phone' type='text' placeholder='+7 900 000 00 00' className={`popup-form__input ${errors.phone ? 'popup-form__input_no-valid' : ''}`} required />
                        <span className='popup-form__span'>{errors.phone}</span>
                    </div>
                    <div className='popup-form__input-container'>
                        <label className='popup-form__label'>Company</label>
                        <input name='company' type='text' className='popup-form__input' placeholder='Enter company' />
                    </div>
                    <div className='popup-form__input-container'>
                        <label className='popup-form__label'>Website/Store URL</label>
                        <input pattern={urlPattern} onChange={handleChange} value={values.url || ''} name='url' type='url' className={`popup-form__input ${errors.url ? 'popup-form__input_no-valid' : ''}`} placeholder='Enter Website/Store URL' />
                        <span className='popup-form__span'>{errors.url}</span>
                    </div>
                </div>
                <span className='popup-form__error-message'>{!isValid ? 'Please fill in all required fields' : ''}</span>
                <p className='popup-form__description'>By submitting this form you are agreeing to Budss’s <a className='popup-form__link' href='#' target='__blank'>Privacy Policy</a> and <a className='popup-form__link' href='#' target='__blank'>Terms of Use</a></p>
                <ButtonSales
                    type='submit'
                    isValid={isValid}
                    handleSubmit={handleSubmit}
                />
            </form>
        </Popup>
    )
}