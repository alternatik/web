import React from 'react';
import SEO from "../common/SEO";
import Separator from "../elements/separator/Separator";
import HeaderOne from '../common/header/HeaderOne';
import FooterTwo from '../common/footer/FooterTwo';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import CounterUpFour from '../elements/counterup/CounterUpFour';
import ServiceOne from '../elements/service/ServiceOne';
import AboutFour from '../elements/about/AboutFour';
import AdvancePricingOne from '../elements/advancePricing/AdvancePricingOne';
import BrandOne from '../elements/brand/BrandOne';

const BannerData = [
    {
        image: "/images/bg/bg-image-20.jpg",
        title: "Optimum <br /> Çözümler",
        description: "İstanbul merkezli ödüllü bir yaratıcı marka oluşturma, web tasarımı ve web geliştirme ajansıyız.  <br /> Yaratıcı çözümlerimiz, şirketinizin hak ettiği işi almasını sağlamak için temel pazarlama ilkeleri tarafından yönlendirilir."
    },
]


const Alternatik = () => {
    return (
        <>
            <SEO title="Alternatik - Dijital Çözümler" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />
                <Separator />
                {/* Start Slider Area  */}
                <div className="slider-area slider-style-8 height-650">
                    {BannerData.map((data, index) => (
                        <div key={index} className="single-slide">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <div className="inner text-center">
                                            <span className="subtitle theme-gradient">Web Yazılım Hizmetleri</span>
                                            <h1 className="title" dangerouslySetInnerHTML={{__html: data.title}}></h1>
                                            <p className="description" dangerouslySetInnerHTML={{__html: data.description}}></p>
                                            <div className="button-group mt--30">
                                                <a className="btn-default btn-large round" target="_blank" rel="noreferrer" href="/portfolio">Portfolio</a>
                                                <a className="btn-default btn-border btn-large round" href="/iletisim">İletişim</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* End Slider Area  */}


                {/* Start Counterup Area  */}
                <div className="our-counterup-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="thumbnail">
                                    <img className="radius w-100" src="./images/bg/bg-image-2.jpg" alt="Images" />
                                </div>
                                {/* Start Elements Area  */}
                                <div className="rwt-counterup-area ptb--60">
                                    <div className="col-lg-12">
                                        <CounterUpFour column="col-lg-3 col-md-6 col-sm-6 col-12" counterStyle="counter-style-4" textALign="text-center" />   
                                    </div>
                                </div>
                                {/* End Elements Area  */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Counterup Area  */}

                <Separator />

                {/* Start Service Area  */}
                <div className="service-area rn-section-gapTop">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="content">
                                    <h3 className="title">Dünya genelinde müşterilere web tasarım hizmetleri sunma konusunda yirmi yılı aşkın bir deneyime sahibiz.</h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p className="mb--10">İster yeni bir web sitesi kuruyor, ister mevcut sitenizde ince ayar yapıyor olun, web tasarım hizmetlerimiz, işletmenizin hedef kitlenizle etkili bir şekilde iletişim kurmasını sağlayacaktır.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}

                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gapTop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Neler yapabiliriz?"
                                    title = "Sunduğumuz hizmetler"
                                    description = ""
                                    />
                            </div>
                        </div>
                        <ServiceOne 
                            serviceStyle = "service__style--1 icon-circle-style"
                            textAlign = "text-center"
                            />
                    </div>
                </div>
                {/* End Service Area  */}

                <AboutFour image="./images/about/contact-image.jpg" />

                {/* Start Elements Area  */}
                <div className="rwt-pricingtable-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Fiyat Tarifelerimiz"
                                    title = "Web Yazılım Paketleri."
                                    description = ""
                                />
                            </div>
                        </div>
                        <div className="row mt--30">
                            <div className="col-lg-8 offset-lg-2">
                                <AdvancePricingOne />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Elements Area  */}

                {/* Start Brand Area  */}
                <div className="rwt-brand-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Takım Oyuncuları"
                                    title = "Harika iş ortaklarımız."
                                    description = ""
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt--40">
                                <BrandOne brandStyle="brand-style-1" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}

                <FooterTwo />

            </main>
        </>
    )
}
export default Alternatik;