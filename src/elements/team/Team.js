import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import Separator from "../separator/Separator";
import SectionTitle from "../sectionTitle/SectionTitle";
import TeamTwo from "./TeamTwo";

const Team = () => {
    return (
        <>
            <SEO title="Takımımız || Alternatik - Dijital Çözümler" />
            <Layout>
                <div className="main-content">

                    {/* Start Elements Area  */}
                    <div className="rwt-team-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Takımımız"
                                            title = "Alternatik - Multidisipliner Yaklaşım"
                                            description = ""
                                        />
                                </div>
                            </div>
                            <TeamTwo column="col-lg-4 col-md-6 col-12 mt--10" teamStyle="team-style-default style-two" />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />

                </div>
            </Layout>
        </>
    )
}
export default Team;