import React from 'react';

const Contacts = (props) => {
    return (
        <section id="contact" className="content-section form contact light space">
            <div className="contactContainer">
                <div className="container">
                    <div className="content cover text-center">
                        <div className="heading">
                            <h2>Getting in touch</h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/><br/></p>
                        </div>
                        <div className="row">
                            <span id="message"></span>

                            <form target="#" name="contact">


                    <span className="input-group">
                        <i className="fa fa-user"></i>
                        <input type="text" name="contactName" id="contactName" className="lg" placeholder="Name"/>
                    </span>

                                <span className="input-group">
                        <i className="fa fa-envelope"></i>
                        <input type="text" name="contactEmail" id="contactAddress" className="lg"
                               placeholder="Email Address"/>
                    </span>

                                <span className="input-group">
                        <i className="fa fa-book"></i>
                        <input type="text" name="contactSubject" id="contactSubject" className="lg"
                               placeholder="Subject"/>
                    </span>

                                <span className="input-group">
                        <textarea name="contactMessage" id="contactMessage" className="lg"
                                  placeholder="What's on your mind?"></textarea>
                    </span>

                                <span className="input-group">
                    	<button className="submit" id="submit_contact" data-loading-text="SENDING...">SEND</button>
                    </span>

                            </form>
                        </div>

                    </div>
                    <span id="message_sent"><i className="fa-check fa"></i></span>
                </div>
            </div>

        </section>

    );
};

export default Contacts;
