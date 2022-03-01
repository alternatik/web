import React from 'react';
import Typed from 'react-typed';
import SEO from "../common/SEO";
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import HeaderOne from '../common/header/HeaderOne';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import ServiceOne from '../elements/service/ServiceOne';
import CalltoActionFive from '../elements/calltoaction/CalltoActionFive';
import TeamTwo from '../elements/team/TeamTwo';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
var BlogListData = BlogClassicData.slice(0, 3);




const WebYazilim = () => {
    return (
        <>
            <SEO title="Web Yazılım - Alternatik Dijital Çözümler" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="round" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 bg-transparent height-650">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <span className="subtitle">KİŞİYE ÖZEL</span>
                                    <h1 className="title theme-gradient display-two">Yeni Nesil Siteler <br /> {" "}
                                        <Typed
                                            strings={[
                                                "Danışman",
                                                "Uzman",
                                                "Serbest Çalışan",
                                            ]}
                                            typeSpeed={80}
                                            backSpeed={5}
                                            backDelay={1000}
                                            loop
                                        />
                                    </h1>
                                    <p className="description">Marka kimlikleri, dijital deneyimler ve basılı materyaller oluşturarak müşterilerimizin başarılı olmasına yardımcı oluyoruz.</p>
                                    <div className="button-group">
                                        <a className="btn-default btn-medium round btn-icon" target="_blank" rel="noreferrer" href="/siparis-ver">Sipariş Ver <i className="icon"><FiArrowRight /></i></a>
                                        <Link className="btn-default btn-medium btn-border round btn-icon" to="/iletisim">İletişim <i className="icon"><FiArrowRight /></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}


                <Separator />                            
                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Sizin için ne yapabiliriz?"
                                    title = "Sunduğumuz hizmetler."
                                    description = "Özel istekleriniz için lütfen iletişime geçin."
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


                {/* Start Call To Action Area  */}
                <div className="rwt-callto-action-area">
                    <div className="wrapper">
                        <CalltoActionFive />
                    </div>
                </div>
                {/* End Call To Action Area  */}


                 {/* Start Team Area  */}
                 <div className="rwt-team-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Takımımız"
                                        title = "Her an hizmetinizdeyiz"
                                        description = "Kişilere ve işletmere dijital çözümler üretiyoruz."
                                    />
                            </div>
                        </div>
                        <TeamTwo column="col-lg-4 col-md-6 col-12" teamStyle="team-style-default style-two" />
                    </div>
                </div>
                {/* End Team Area  */}

                <Separator />   
                <div className="blog-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Blog'da Yenilikler"
                                    title = "Son Yazılarımız"
                                    description = "We provide digital services for <br /> startups and company business."
                                />
                            </div>
                        </div>
                        <div className="row row--15">
                            {BlogListData.map((item) => (
                                <div key={item.id} className="col-lg-4 col-md-6 col-12 mt--30">
                                    <BlogList StyleVar="box-card-style-default" data={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}
export default WebYazilim;
