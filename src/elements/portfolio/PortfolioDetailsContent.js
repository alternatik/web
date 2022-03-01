import React from 'react';


const PortfolioDetailsContent = ({ data }) => {
    return (
        <div className="rwt-portfolio-details rn-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="inner">
                            <div className="details-list">
                                <div className="thumbnail alignwide">
                                    <img className="radius w-100" src={`${process.env.PUBLIC_URL}/${data.largeImage}`} alt="Alternatik Dijital Çözümler" />
                                </div>

                                <div className="row mt--40 row--30">
                                    <div className="col-lg-6">
                                        <div className="content-left">
                                            <h4 className="title">{data.title}</h4>
                                            <div className="single-list-wrapper">
                                                <div className="single-list">
                                                    <label>Tarih:</label>
                                                    <span>{data.date}</span>
                                                </div>
                                                <div className="single-list">
                                                    <label>Müşteri:</label>
                                                    <span>{data.client}</span>
                                                </div>
                                                <div className="single-list">
                                                    <label>Kategori:</label>
                                                    <span>{data.category}</span>
                                                </div>
                                            </div>
                                            <div className="view-btn mt--50">
                                                <a className="btn-default btn-large round" href={`${data.btn.link}`}>{data.btn.buttontext}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt_md--30 mt_sm--30">
                                        <div className="content-right">
                                            <h5 className="subtitle">{data.subtitle}</h5>
                                            <div className="description" dangerouslySetInnerHTML={{__html: data.body}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-gallery mt--40">
                                <div className="gallery mt--30">
                                    <div className="thumbnail">
                                        <img className="radius w-100" src={`${process.env.PUBLIC_URL}/${data.gallery.imageOne}`} alt="Alternatik Dijital Çözümler" />
                                    </div>
                                </div>
                                <div className="gallery mt--30">
                                    <div className="thumbnail">
                                        <img className="radius w-100" src={`${process.env.PUBLIC_URL}/${data.gallery.imageTwo}`} alt="Alternatik Dijital Çözümler" />
                                    </div>
                                </div>
                                <div className="gallery mt--30">
                                    <div className="thumbnail">
                                        <img className="radius w-100" src={`${process.env.PUBLIC_URL}/${data.gallery.imageThree}`} alt="Alternatik Dijital Çözümler" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioDetailsContent;
