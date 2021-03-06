import React from 'react';

const Footer = (props) => {
    return (
        <footer id="footer">
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" data-animation="fadeInUp">
                        <ul className="social list-inline ">
                            <li>
                                <a className="facebook" href="http://www.facebook.com" title="Facebook">
                                    <i className="fa fa-facebook fa-2x"></i>
                                </a>
                            </li>
                            <li>
                                <a className="twitter" href="http://www.twitter.com" title="Twitter">
                                    <i className="fa fa-twitter fa-2x"></i>
                                </a>
                            </li>
                            <li>
                                <a className="Linkedin" href="http://www.linkedin.com" title="Linkedin">
                                    <i className="fa fa-linkedin fa-2x"></i>
                                </a>
                            </li>
                            <li>
                                <a className="google-plus" href="http://www.plus.google.com" title="Google+">
                                    <i className="fa fa-google-plus fa-2x"></i>
                                </a>
                            </li>
                        </ul>
                        <p className="copyright">
                           KIA MOTORS - 2021
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
