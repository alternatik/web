import React from 'react';
import SEO from "../../common/SEO";
import HeaderOne from '../../common/header/HeaderOne';
import FooterTwo from '../../common/footer/FooterTwo';
import Copyright from '../../common/footer/Copyright';
import SectionTitle from "../sectionTitle/SectionTitle";
import CalltoActionFive from '../../elements/calltoaction/CalltoActionFive';
import GalleryOne from "./GalleryOne";

const PopupData2 = [
    {
        id: "01",
        image: "./images/logolar/logo1.png",
        popupLink: [
            './images/logolar/logo1.png',
        ],
    },
    {
        id: "02",
        image: "./images/logolar/logo2.png",
        popupLink: [
            '/images/logolar/logo2.png',
        ],
    },
    {
        id: "03",
        image: "./images/logolar/logo3.png",
        popupLink: [
            './images/logolar/logo3.png',
        ],
    },
    {
        id: "04",
        image: "./images/logolar/logo4.png",
        popupLink: [
            '/images/logolar/logo4.png',
        ],
    },
    {
        id: "05",
        image: "./images/logolar/logo5.png",
        popupLink: [
            '/images/logolar/logo5.png',
        ],
    },
    {
        id: "06",
        image: "./images/logolar/logo6.png",
        popupLink: [
            './images/logolar/logo6.png',
        ],
    },
    {
        id: "07",
        image: "./images/logolar/logo6.png",
        popupLink: [
            './images/logolar/logo6.png',
        ],
    },
    {
        id: "08",
        image: "./images/logolar/logo7.png",
        popupLink: [
            './images/logolar/logo7.png',
        ],
    },
    {
        id: "08",
        image: "./images/logolar/logo8.png",
        popupLink: [
            './images/logolar/logo8.png',
        ],
    },
    {
        id: "08",
        image: "./images/logolar/logo9.png",
        popupLink: [
            './images/logolar/logo9.png',
        ],
    },
    {
        id: "08",
        image: "./images/logolar/logo10.png",
        popupLink: [
            './images/logolar/logo10.png',
        ],
    },
]

const Elements = () => {
    return (
        <>
            <SEO title="Logo Galerisi || Alternatik - Dijital Çözümler" />
                <div className="main-content">
                    <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />
                    {/* Start Elements Area  */}
                    <div className="rwt-gallery-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb--20">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Hazır Logolarımız"
                                        title = "Alternatik Dijital Çözümler"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <div className="row mt_dec--30 row--15">
                                {PopupData2.map((item) => (
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30" key={item.id}>
                                        <GalleryOne galleryItem={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    {/* Start Call To Action Area  */}
                    <div className="rwt-callto-action-area">
                        <div className="wrapper">
                            <CalltoActionFive />
                        </div>
                    </div>
                    {/* End Call To Action Area  */}

                </div>
                <FooterTwo />
            <Copyright />
        </>
    )
}
export default Elements;