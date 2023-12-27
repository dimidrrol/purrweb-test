import './ButtonSales.scss';

export default function ButtonSales({ type, handleOpenPopupWithForm, isValid, handleSubmit, handleClosePopupNavigate, isPopupNavigateOpen }) {
    function handleClick() {
        handleOpenPopupWithForm();
        if (isPopupNavigateOpen) {
            handleClosePopupNavigate()
        }
    }

    return (
        <button disabled={type === 'submit' && !isValid ? true : false} onClick={type === 'submit' ? handleSubmit : handleClick} type={type} className='button-sales'>Contact sales</button>
    )
}