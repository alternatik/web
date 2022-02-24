import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "../sectionTitle/SectionTitle";
import AdvanceTabOne from "./AdvanceTabOne";
import Separator from "../separator/Separator";


const AdvanceTab = () => {
    return (
        <>
            <SEO title="Misyonumuz & Vizyonumuz & Değerlerimiz || Alternatik - Dijital Çözümler" />
            <Layout>

                <div className="main-content">

                    
                    {/* Start Elements Area  */}
                    <div className="rwt-advance-tab-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Değerlerimiz"
                                        title = "Alternatik"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <AdvanceTabOne />
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    <Separator />

                </div>
            </Layout>
        </>
    )
}
export default AdvanceTab;


