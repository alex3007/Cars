import React from 'react';

const Service = (props) => {
    let service = props.service;
    let description = props.description;
    let image = props.image;
    return (
        <div className="col-sm-4 col-md-4 text-center service animated fadeInUp visible"
             data-animation="fadeInUp" data-animation-delay="600">
            <div className="service-icon">
                {image}
            </div>
            <h4 className="color-white">{service}</h4>
            <p>{description}</p>
        </div>
    )

};
export default Service;
