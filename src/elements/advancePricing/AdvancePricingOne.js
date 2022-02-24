import React from 'react'
import { FiCheck, FiStar } from "react-icons/fi";

const AdvancePricingOne = () => {
    return (
        <div className="advance-pricing">
            <div className="inner">
                <div className="row row--0">
                    <div className="col-lg-6">
                        <div className="pricing-left">
                            <h3 className="main-title">Aktif Plan</h3>
                            <p className="description">Sürekli hizmete devam diyenlerin tercihi</p>
                            <div className="price-wrapper">
                                <span className="price-amount">$150 <sup>/ay</sup></span>
                            </div>
                            <div className="pricing-btn-group">
                                <button className="btn-default">Sipariş Ver</button>
                                <button className="btn-default btn-border">Yükselt</button>
                            </div>
                            <div className="rating">
                                <a href="#rating"><FiStar /></a>
                                <a href="#rating"><FiStar /></a>
                                <a href="#rating"><FiStar /></a>
                                <a href="#rating"><FiStar /></a>
                                <a href="#rating"><FiStar /></a>
                            </div>
                            <span className="subtitle">150 yorum üstünde 5 yıldız ortalama.</span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="pricing-right">
                            <div className="pricing-offer">
                                <div className="single-list">
                                    <h4 className="price-title">Eklentiler.</h4>
                                    <ul className="plan-offer-list">
                                        <li><FiCheck /> 5 Hit Yükseltme Paketi</li>
                                        <li><FiCheck /> Dijital Pazarlama</li>
                                        <li><FiCheck />  Google Merchant</li>
                                        <li><FiCheck />  Seo Dostu</li>
                                    </ul>
                                </div>
                                <div className="single-list mt--40">
                                    <h4 className="price-title">Basit Paket İçerikleri</h4>
                                    <ul className="plan-offer-list">
                                        <li><FiCheck /> 5 Hit Yükseltme</li>
                                        <li><FiCheck /> Dijital Pazarlama</li>
                                        <li><FiCheck />  Google Merchant</li>
                                        <li><FiCheck />  Seo Dostu</li>
                                        <li><FiCheck />  Uygulama Geliştirme</li>
                                        <li><FiCheck />  Sosyal Paket</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvancePricingOne
