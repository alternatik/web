import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "../sectionTitle/SectionTitle";
import VideoOne from "./VideoOne";

const Video = () => {
    return (
        <>
            <SEO title="Yorumlar || Alternatik - Dijital Çözümler" />
            <Layout>
                <div className="main-content">
                    {/* Start Elements Area  */}
                    <div className="rwt-video-popup-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Hakkımızdaki Yorumlar"
                                            title = "Alternatik Dijital Çözümler"
                                            description = ""
                                        />
                                </div>
                            </div>
                            <VideoOne />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                </div>
            </Layout>
        </>
    )
}
export default Video;