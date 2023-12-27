import './Advantage.scss';

export default function Advantage() {
    return (
        <div className='advantage'>
            <div className='advantage__text-container'>
                <div className='advantage__item'>
                    <h2 className='advantage__title'>15%</h2>
                    <p className='advantage__description'>Increase in Purchase Amount</p>
                </div>
                <div className='advantage__item'>
                    <h2 className='advantage__title'>30%</h2>
                    <p className='advantage__description'>Growth in Annual Sales</p>
                </div>
                <div className='advantage__item'>
                    <h2 className='advantage__title'>10%</h2>
                    <p className='advantage__description'>Growth in New  Customers</p>
                </div>
            </div>
        </div>
    )
}