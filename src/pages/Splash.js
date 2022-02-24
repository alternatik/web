import React from 'react'
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import { FiArrowDown } from "react-icons/fi";
import ServiceFive from "../elements/service/ServiceFive";
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import ServiceThree from "../elements/service/ServiceThree";

const Splash = () => {
    return (
        <>
           <SEO title="Alternatik" />

            <HeaderOne btnStyle="btn-small" HeaderSTyle="header-not-transparent" />

            {/* Start Slider Area  */}
            <div className="demo-slider-area slider-area bg-transparent slider-style-1 pb--100 pt--70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <h1 className="title display-two">
                                    Yeni Nesil <br />
                                    <span className="theme-gradient">Web Çözümleri</span>
                                </h1>
                                <p className="description">Multidisipliner yaklaşımla küçük ve orta işletmelere dijital çözümler</p>
                                <div className="button-group">
                                    <a className="btn-default btn-large round btn-icon" href="#demo">Yeni İşlerimiz <FiArrowDown /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Slider Area  */}

            <Separator />

            {/* Start Our Demo  */}
            <div className="rn-demo-area rn-section-gap" id="demo">
                <div className="wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30">
                    <div className="row">
                        <div className="col-lg-12">
                            <SectionTitle
                                textAlign = "text-center"
                                radiusRounded = ""
                                subtitle = "Dijital Çözümler"
                                title = "Alternatik yaklaşım"
                                description = "İşyeri ve internet çözümleriniz için 50'den fazla element barındıran. <br /> Şu an 20 ve gün geçtikçe artan, hızlı yüklenen, iyi kodlanmış çözümler."
                            />
                        </div>
                    </div>
                    {/* Start Service Area  */}
                    <div className="rn-service-area rn-section-gapTop">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Alternatik"
                                        title = "Dijital Çözümler"
                                        description = "Diğer ihtiyaçlarınız için lütfen iletişime geçiniz."
                                    />
                                </div>
                            </div>
                            <ServiceFive
                                serviceStyle = "service__style--2"
                                textAlign = "text-center"
                            />
                            <div>
                                <ServiceThree
                                    serviceStyle = "service__style--2"
                                    textAlign = "text-center"
                                />
                            </div>
                        </div>
                    </div>
                    {/* End Service Area  */}
                </div>
            {/* End Our Demo  */}
            </div>

            <FooterTwo />
            <Copyright />


        </>
    )
}

export default Splash;