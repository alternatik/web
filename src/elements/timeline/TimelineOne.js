import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const TimelineData = [
    {
        id: "1",
        date: "Logo ve Amblem",
        title: "Logotype",
        description: "Alternatik'in logosu bütünleşik bir tasarım yaklaşımının yansıması olarak amblemi ve yazı karakteriyle kurumsal duruşunu sergilemektedir.",
        image: "logotype",
        workingStep: [
            {
                stepTitle: "Yazı Karakterimiz",
                stepDescription: "EmBauhaus",
            },
            {
                stepTitle: "Renklerimiz",
                stepDescription: "Corn, Aquamarine, Capri, Phlox, Magenta Crayola, Rich Black FOGRA 29, Gunmetal",
            },
        ]
    },
    {
        id: "2",
        date: "Web Kullanımı",
        title: "Site Kimliğimiz",
        image: "siterenkleri",
        workingStep: [
            {
                stepTitle: "Yazı Tipi",
                stepDescription: "Slick",
            },
            {
                stepTitle: "Renklerimiz",
                stepDescription: "Dodger Blue, Orange Red Crayola, Majorella Blue, Frostbite, Vivid Sky Blue, Rich Black Fogra 29, Russian Violet, Xiketix, Dark Jungle Green, Dark Purple",
            },
        ]
    },
]

const TimelineOne = () => {
    return (
        <div className="rn-timeline-wrapper timeline-style-one position-relative">
            <div className="timeline-line"></div>
            {/* Start Single Timeline  */}

            {TimelineData.map((data, index) =>(
                <div className="single-timeline mt--50" key={index}>
                    <div className="timeline-dot">
                        <div className="time-line-circle"></div>
                    </div>
                    <div className="single-content">
                        <div className="inner">
                            <div className="row row--30 align-items-center">
                                <div className="order-2 order-lg-1 col-lg-6 mt_md--40 mt_sm--40">
                                    <div className="content">
                                        <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <span className="date-of-timeline">{data.date}</span>
                                        </ScrollAnimation>

                                        <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <h2 className="title">{data.title}</h2>
                                        </ScrollAnimation>

                                        <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <p className="description">{data.description}</p>
                                        </ScrollAnimation>

                                        <div className="row row--30">
                                            {data.workingStep.map((data, index)=>(
                                                <div className="col-lg-6 col-md-6 col-12" key={index}>
                                                    <div className="working-list">
                                                        <ScrollAnimation 
                                                        animateIn="fadeInUp"
                                                        animateOut="fadeInOut"
                                                        animateOnce={true}>
                                                            <h5 className="working-title">{data.stepTitle}</h5>
                                                        </ScrollAnimation>

                                                        <ScrollAnimation 
                                                        animateIn="fadeInUp"
                                                        animateOut="fadeInOut"
                                                        animateOnce={true}>
                                                            <p>{data.stepDescription}</p>
                                                        </ScrollAnimation>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                                <div className="order-1 order-lg-2 col-lg-6">
                                    <div className="thumbnail">
                                        <img className="w-100" src={`./images/timeline/${data.image}.png`} alt="Corporate React Template" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
           
            {/* End Single Timeline  */}
        </div>
    )
}

export default TimelineOne;
