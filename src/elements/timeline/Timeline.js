import React from 'react';
import Separator from "../separator/Separator";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "../sectionTitle/SectionTitle";
import TimelineOne from "./TimelineOne";


const Timeline = () => {
    return (
        <>
            <SEO title="Kurumsal Kimlik || Alternatik - Dijital Çözümler" />
            <Layout>

                <div className="main-content">

                    {/* Start Timeline Area  */}
                    <div className="rwt-timeline-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Kurumsal Kimlik"
                                            title = "Alternatik"
                                        />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <TimelineOne />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Timeline Area  */}

                </div>
            </Layout>
        </>
    )
}
export default Timeline;