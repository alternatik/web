import React from 'react';
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: <FiActivity />,
        title: 'Web Yazılım',
        description: 'Basit ve yönetimi kolay, teknoloji ve geliştirme ile ilgilenirken işinize odaklanmanıza olanak tanıyan şık, pratik web siteleri oluşturuyoruz.'
    },
    {
        icon: <FiCast />,
        title: 'SEO Hizmetleri',
        description: 'Herkes ilk sayfada olmak ister ama herkes orada olmayı hak etmez. Markanız ve web siteniz bu hakkı kazanmalıdır. '
    },
    {
        icon: <FiMap />,
        title: 'Uygulama Geliştirme',
        description: 'Mobil uygulama geliştirme çözümlerinin gücünden yararlanmak istediğinizde, uzmanlarımız bu görevde size destek olmak için buradalar.'
    },
]

const ServiceOne = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;