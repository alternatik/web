import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "../sectionTitle/SectionTitle";
import BrandTwo from "./BrandTwo";

const Brand = () => {
    return (
        <>
            <SEO title="İş Çözümleri || Alternatik - Dijital Çözümler" />
            <Layout>
                <div className="main-content">

                    {/* Start Brand Area  */}
                    <div className="rwt-brand-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "İş Çözümleri"
                                        title = "Dijital'de Optimum Çözümler - Alternatik"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mt--10">
                                    <BrandTwo brandStyle="brand-style-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Brand Area  */}

                </div>
            </Layout>
        </>
    )
}
export default Brand;