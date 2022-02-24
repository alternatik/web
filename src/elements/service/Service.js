import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "../sectionTitle/SectionTitle";
import ServiceFive from "./ServiceFive";
import ServiceThree from "./ServiceThree";
import Separator from "../separator/Separator";

const Service = () => {
    return (
        <>

            <SEO title="Hizmetlerimiz || Alternatik - Dijital Çözümler" />
            <Layout>
                <div className="main-content">

                    <Separator />

                    {/* Start Service Area  */}
                    <div className="rn-service-area rn-section-gap ">
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

                    <Separator />

                </div>

            </Layout>
            
        </>
    )
}

export default Service;
