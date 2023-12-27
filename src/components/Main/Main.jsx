import './Main.scss';
import Hero from '../Hero/Hero';
import Header from '../Header/Header';
import About from '../About/About';
import HowWorks from '../HowWorks/HowWorks';
import Advantage from '../Advantage/Advantage';
import WhyBudss from '../WhyBudss/WhyBudss';
import BusinessGrow from '../BusinessGrow/BusinessGrow';
import Footer from '../Footer/Footer';
import PopupNavigate from '../PopupNavigate/PopupNavigate';
import { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import PopupSuccess from '../PopupSuccess/PopupSuccess';

export default function Main() {
    const [isPopupNavigateOpen, setIsPopupNavigateOpen] = useState(false);
    const [isPopupWithFormOpen, setIsPopupWithFormOpen] = useState(false);
    const [isPopupSuccessOpen, setIsPopupSuccessOpen] = useState(false);


    function handleOpenPopupNavigate() {
        setIsPopupNavigateOpen(true);
    }

    function handleOpenPopupWithForm() {
        setIsPopupWithFormOpen(true);
    }

    function handleOpenPopupSuccess() {
        setIsPopupSuccessOpen(true);
    }

    function closePopupWithForm() {
        setIsPopupWithFormOpen(false);
    }

    function handleClosePopupNavigate() {
        setIsPopupNavigateOpen(false);
    }

    function closeAllPopup() {
        setIsPopupNavigateOpen(false);
        setIsPopupWithFormOpen(false);
        setIsPopupSuccessOpen(false);
    }

    return (
        <>
            <PopupSuccess
                isOpen={isPopupSuccessOpen}
                closeAllPopup={closeAllPopup}
                isPopupWithFormOpen={isPopupWithFormOpen}
            />
            <PopupWithForm
                isOpen={isPopupWithFormOpen}
                closeAllPopup={closeAllPopup}
                handleOpenPopupSuccess={handleOpenPopupSuccess}
                closePopupWithForm={closePopupWithForm}
            />
            <PopupNavigate
                isOpen={isPopupNavigateOpen}
                closeAllPopup={closeAllPopup}
                handleClosePopupNavigate={handleClosePopupNavigate}
                handleOpenPopupWithForm={handleOpenPopupWithForm}
                isPopupNavigateOpen={isPopupNavigateOpen}
            />
            <Header
                handleOpenPopupNavigate={handleOpenPopupNavigate}
                handleOpenPopupWithForm={handleOpenPopupWithForm}
            />
            <main className='main'>
                <Hero
                    handleOpenPopupWithForm={handleOpenPopupWithForm}
                />
                <About />
                <HowWorks />
                <Advantage />
                <WhyBudss />
                <BusinessGrow
                    handleOpenPopupWithForm={handleOpenPopupWithForm}
                />
            </main>
            <Footer
                handleOpenPopupWithForm={handleOpenPopupWithForm}
            />
        </>
    )
}