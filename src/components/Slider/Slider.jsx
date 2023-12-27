import './Slider.scss';
import { useState } from 'react';

export default function Slider() {
    const [slide, setSlide] = useState(0);
    const arr = ['1', '2', '3', '4', '5', '6'];
    const [disabledButton, setDisabledButton] = useState(false);
    const dots = [];

    function renderDots() {
        for (let i = 0; i < arr.length; i++) {
            dots.push(<button key={i} onClick={() => goToSlide(i)} className={`slider__dot ${slide === i ? 'slider__dot_selected' : ''}`}></button>);
        }

        return dots;
    }

    function changeSlide(direction = 0) {
        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = arr.length - 1;
        } else {
            slideNumber = (slide + direction) % arr.length;
        }
        
        setSlide(slideNumber);
        setDisabledButton(true);
        setTimeout(() => {
            setDisabledButton(false);
        }, 1000);
    }

    function goToSlide(number) {
        setSlide(number % arr.length);
        setDisabledButton(true);
        setTimeout(() => {
            setDisabledButton(false);
        }, 1000);
    }

    return (
        <main className='slider'>
            <h1 className='slider__title'>Slider for PURRWEB</h1>
            <button onClick={() => changeSlide(-1)} disabled={disabledButton ? true : false} type='button' className='slider__button slider__button-left'>&#9664;</button>
            <button onClick={() => changeSlide(1)} disabled={disabledButton ? true : false} type='button' className='slider__button slider__button-right'>&#9654;</button>
            <div style={{ transform: `translateX(-${slide * 100}%)` }} className='slider__container'>
                {arr.map((slide, index) => (
                    <div key={index} className='slider__slide'>
                        <h2 className='slider__content'>{slide}</h2>
                    </div>
                ))}
            </div>
            <div className='slider__dots'>
                {renderDots()}
            </div>
        </main>
    )
}