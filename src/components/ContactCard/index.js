import React from "react";
import "./style.css";

const Contact = () => {
    return (
        <div className="container card">
            <div className="content-padding">
                <div className="row heading-underline">
                    <h2 id="about">Contact Me</h2>
                </div>
            </div>
            <div className="row">
                <div className="col short-col">
                    <p className="left-text saxophone-solo-in-an-empty-street-at-night-under-a-full-moon">Name</p>
                </div>
            </div>
            <div className="row">
                <div className="col contact-content-padding">
                    <input type="text" className="form-control" placeholder="Name" />
                </div>
            </div>
            <div className="row">
                <div className="col short-col">
                    <p className="left-text saxophone-solo-in-an-empty-street-at-night-under-a-full-moon">Email</p>
                </div>
            </div>
            <div className="row">
                <div className="col contact-content-padding">
                    <input type="text" className="form-control" placeholder="Email" />
                </div>
            </div>
            <div className="row">
                <div className="col short-col">
                    <label htmlFor="comment" className="saxophone-solo-in-an-empty-street-at-night-under-a-full-moon">Message</label>
                </div>
            </div>
            <div className="row">
                <div className="col contact-content-padding">
                    <div className="form-group">
                        <textarea className="form-control" rows={3} id="comment" placeholder="Message" defaultValue={""} />
                    </div>
                    <button type="button" className="btn btn-secondary">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;