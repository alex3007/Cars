import React from 'react';
import servThree from "../../assets/images/car-wash.jpg";
import servOne from "../../assets/images/car-sell.jpg";
import servTwo from "../../assets/images/car-service.jpg";

const Services = (props) => {
    return (
        <section id="services" className="page space">
            <div className="container text-center">
                <div className="heading">
                    <h2>Our Services</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, alias enim placeat earum
                        quos ab.</p>
                </div>
                <div className="row services-list">

                    <div className="col-sm-4 col-md-4 text-center service animated fadeInUp visible"
                         data-animation="fadeInUp" data-animation-delay="200">
                        <div className="service-icon">
                            <img src={servOne} alt=""/>
                        </div>
                        <h4 className="color-white">Car Servicing</h4>
                        <p>Lorem ipsum massa sed turpis ipsum dolor lorem luctus scelerisque gravida
                            aliquet.</p>
                    </div>

                    <div className="col-sm-4 col-md-4 text-center service animated fadeInUp visible"
                         data-animation="fadeInUp" data-animation-delay="400">
                        <div className="service-icon">
                            <img src={servTwo} alt=""/>
                        </div>
                        <h4 className="color-white">Car Painting</h4>
                        <p>Lorem ipsum massa sed turpis ipsum dolor lorem luctus scelerisque gravida
                            aliquet.</p>
                    </div>

                    <div className="col-sm-4 col-md-4 text-center service animated fadeInUp visible"
                         data-animation="fadeInUp" data-animation-delay="600">
                        <div className="service-icon">
                            <img src={servThree} alt=""/>
                        </div>
                        <h4 className="color-white">Car Modifying</h4>
                        <p>Lorem ipsum massa sed turpis ipsum dolor lorem luctus scelerisque gravida
                            aliquet.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
