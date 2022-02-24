import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "../sectionTitle/SectionTitle";
import PricingFour from "./PricingFour";
import Separator from "../separator/Separator";


const Pricing = () => {
    return (
        <>
            <SEO title="Fiyatlar || Alternatik - Dijital Çözümler" />
            <Layout>

                <div className="main-content">

                    {/* Start Elements Area  */}
                    <div className="rwt-pricing-area rn-section-gap">
                        <div className="wrapper plr--100 plr_md--15 plr_sm--15">
                            <div className="row mb--40 mb_sm--0">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Fiyatlarımız"
                                            title = "Alternatik Çözümler"
                                            description = ""
                                        />
                                </div>
                            </div>
                            <PricingFour />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />
                    
                </div>
            </Layout>
        </>
    )
}
export default Pricing;