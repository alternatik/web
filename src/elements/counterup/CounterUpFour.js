import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from "react-on-screen";

const Data = [
    {
        countNum : 199,
        countTitle: 'Mutlu Müşteri.',
    },
    {
        countNum : 575,
        countTitle: 'Tamamlanan Proje',
    },
    {
        countNum : 69,
        countTitle: 'Kullanışlı Yazılım',
    },
    {
        countNum : 500,
        countTitle: 'Yeni Nesil Çözüm',
    },
];
const CounterUpFour = ({textALign, counterStyle, column}) => {
    return (
        <div className="row">
            {Data.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <div className={`count-box ${counterStyle} ${textALign}`}>
                        <TrackVisibility once>
                            {({ isVisible }) => isVisible && 
                                <div className="count-number">{isVisible ? <CountUp end={data.countNum} /> : 0}</div>}
                        </TrackVisibility>
                        <h5 className="counter-title">{data.countTitle}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CounterUpFour;