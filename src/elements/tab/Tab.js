import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "../sectionTitle/SectionTitle";
import TabThree from "./TabThree";

const Tab = () => {
    return (
        <>
            <SEO title="Tab || Alternatik - Dijital Çözümler" />
            <Layout>
                <div className="main-content">

                    {/* Start Elements Area  */}
                    <div className="rwt-tab-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Hız Rekorlarımız"
                                        title = "Google Web Vitals'de Alternatik deneyimi"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <TabThree />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    

                </div>
            </Layout>
        </>
    )
}
export default Tab;