import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        image: '/images/service/web-yazilim.png',
        title: 'Web Yazılım',
        description: 'Basit ve yönetimi kolay, teknoloji ve geliştirme ile ilgilenirken işinize odaklanmanıza olanak tanıyan şık, pratik web siteleri oluşturuyoruz.'
    },
    {
        image: '/images/service/seo.png',
        title: 'Seo Hizmetleri',
        description: 'Herkes ilk sayfada olmak ister ama herkes orada olmayı hak etmez. Markanız ve web siteniz bu hakkı kazanmalıdır.'
    },
    {
        image: '/images/service/uygulama-gelistirme.png',
        title: 'Uygulama Geliştirme',
        description: 'Mobil uygulama geliştirme çözümlerinin gücünden yararlanmak istediğinizde, uzmanlarımız bu görevde size destek olmak için buradalar.'
    }
]
const ServiceFive = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
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
                                    <h4 className="title">
                                        <Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link>
                                    </h4>
                                    <p className="description" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceFive;