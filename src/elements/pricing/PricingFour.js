import React from 'react';
import { FiCheck } from "react-icons/fi";


const PricingFour = () => {
    return (
        <div className="row row--0">

            {/* Start PRicing Table Area  */}
            <div className="col-lg-3 col-md-6 col-12">
                <div className="rn-pricing style-4">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Hosting</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="price">339</span>
                                    <span className="currency">TL</span>
                                </div>
                                <span className="subtitle">Aylık</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> 5 GB SSD Hosting</li>
                                <li><FiCheck /> Litespeed Server</li>
                                <li><FiCheck /> 1 Site Barındırılabilir</li>
                                <li><FiCheck /> Ücretsiz SSL</li>
                                <li><FiCheck /> DDOS Koruması</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a className="btn-default btn-border" href="/iletisim">Satın al</a>
                        </div>

                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-3 col-md-6 col-12">
                <div className="rn-pricing style-4 active">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Kişisel Site</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="price">3000</span>
                                    <span className="currency">TL</span>
                                </div>
                                <span className="subtitle">den başlayan fiyatlar</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> 5 Sayfa</li>
                                <li><FiCheck /> Multiplatform</li>
                                <li><FiCheck /> SEO Dostu</li>
                                <li><FiCheck /> Blog Desteği</li>
                                <li><FiCheck /> Sosyal Medya</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a className="btn-default" href="/iletisim">Şimdi al</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-3 col-md-6 col-12">
                <div className="rn-pricing style-4">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Kurumsal Site</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="price">4500</span>
                                    <span className="currency">TL</span>
                                </div>
                                <span className="subtitle">den başlayan fiyatlar</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> 5 Sayfa Web Sitesi</li>
                                <li><FiCheck /> SEO Optimizasyonu</li>
                                <li><FiCheck /> Sosyal Medya</li>
                                <li><FiCheck /> Blog Desteği</li>
                                <li><FiCheck /> Esnek Panel</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a className="btn-default btn-border" href="/iletisim">Satın al</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-3 col-md-6 col-12">
                <div className="rn-pricing style-4">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">E-Ticaret</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="price">6000</span>
                                    <span className="currency">TL</span>
                                </div>
                                <span className="subtitle">den başlayan fiyatlar</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> Sınırsız Alan</li>
                                <li><FiCheck /> SEO Optimizasyonu</li>
                                <li><FiCheck /> Tam Servis</li>
                                <li><FiCheck /> Reklam Yönetimi</li>
                                <li><FiCheck /> Esnek Panel</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a className="btn-default btn-border" href="/iletisim">Satın al</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}
        </div>
    )
}
export default PricingFour;