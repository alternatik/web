import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        image: '/images/service/e-ticaret.png',
        title: 'E-Ticaret',
        description: 'endi e-ticaret siteniz yanısıra Trendyol, Hepsiburada gibi platformlar için güncel çözümlerimizle ilgili bize ulaşarak bilgi edinebilirsiniz.'
    },
    {
        image: '/images/service/sosyal-medya.png',
        title: 'Sosyal Medya',
        description: 'Facebook, Instagram, Twitter, Youtube, Pinterest ve diğer mecralarda yönetiminizi bize bırakın.'
    },
    {
        image: '/images/service/google-optimizasyon.png',
        title: 'Google',
        description: 'Google Benim İşletmem, Analytics, Reklam ve Harita gibi hizmetler sunmaya devam ediyoruz.'
    }
]
const ServiceThree = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="inner">
                                <div className="image">
                                    <img src={`${val.image}`} alt="card Images" />
                                </div>
                                <div className="content">
                                    <h4 className="title"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                    <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceThree;