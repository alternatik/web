import React from 'react';
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import AboutTwo from "../elements/about/AboutTwo";

const GizlilikSozlesmesi = () => {
    return (
        <>
            <SEO title="Alternatik Dijital Çözümler - Gizlilik Sözleşmesi" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small btn-icon" HeaderSTyle="header-transparent" />

                <AboutTwo />

                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}

export default GizlilikSozlesmesi
