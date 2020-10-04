import React from 'react';

const Top = (props) => {
    let lang = props.lang
    return (
        <section id="home">
            <div className="page">
                <div className="homeArea">
                    <div className="container">
                        <div className="content cover text-center">
                            <div className="banner-content">
                                <div className="heroText">
                                    <h2><span> {props.lang === 'ru' ? 'KIA ПАРК' : 'KIA PARK'} </span><br/>
                                        <strong>{props.lang === 'ru' ? 'ЛУЧШИЙ ВЫБОР АВТО' : 'BEST CAR SOLUTION'}</strong>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Top;
