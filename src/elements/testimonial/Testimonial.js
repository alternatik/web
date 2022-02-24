import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "../sectionTitle/SectionTitle";
import TestimonialOne from "./TestimonialOne";
import Separator from "../separator/Separator";

const Testimonial = () => {
    return (
        <>
            <SEO title="Referanslar || Alternatik - Dijital Çözümler" />
            
            <Layout>

                <div className="main-content">

                    {/* Start Elements Area  */}
                    <div className="rwt-elements-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Referanslarımız"
                                        title = "Alternatik Dijital Çözümler"
                                    />
                                </div>
                            </div>
                            <TestimonialOne column="col-lg-4 col-md-6 col-12" teamStyle="card-style-default testimonial-style-one style-two" />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />

                </div>

            </Layout>
        </>
    )
}
export default Testimonial;