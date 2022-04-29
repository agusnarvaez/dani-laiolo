
import React, { useEffect, useState } from "react";
import emailjs from 'emailjs-com'

function Contact() {
    const frmContact = { from_name: '', from_email: '', company: '', reason: '', message: '' };
    const [contact, setContact] = useState(frmContact);
    const [showMessage, setShowMessage] = useState(false);
    const handleChange = e => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };
    const handleSubmit = e => {
        e.preventDefault();

        emailjs.send('default_service', 'template_b1tdztw', contact, 'gFpiIvrXnj4ZS_Jvk')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setContact(frmContact);
                setShowMessage(true);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }
    return (
        <div className="container pt-2 text-center">

            {showMessage ? <div className="alert alert-success col-md-5 mx-auto" role="alert">Email Send Success!!</div> : ``}

            <form onSubmit={handleSubmit}>
                <div className="pt-3"><h3 className="font-weight-bold"> Contactate conmigo!! </h3></div>
                <div className="pt-3 col-md-5 mx-auto">
                    <div className="form-group text-left"> <b>Nombre</b> <br />
                        <input required type="text" value={contact.from_name} name="from_name" onChange={handleChange} className="form-control" placeholder="Your email" />
                    </div>
                </div>
                <div className="pt-3 col-md-5 mx-auto">
                    <div className="form-group text-left"> <b>Razón</b> <br />
                        <select required className="form-control" value={contact.reason} onChange={handleChange} name="reason">
                            <option value='' >Select</option>
                            <option value="info" >Info</option>
                            <option value="buy">Buy</option>
                            <option value="play tennis">Play tennis</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="pt-3 col-md-5 mx-auto">
                    <div className="form-group text-left"> <b>Email</b> <br />
                        <input value={contact.from_email} required type="text" name="from_email" onChange={handleChange} className="form-control" placeholder="Your email" />
                    </div>
                </div>
                <div className="pt-3 col-md-5 mx-auto">
                    <div className="form-group text-left"> <b>Compania</b> <br />
                        <input value={contact.company} required type="text" name="company" onChange={handleChange} className="form-control" placeholder="Your email" />
                    </div>
                </div>
                <div className="pt-3 col-md-5 mx-auto">
                    <div className="form-group text-left"> <b>Describe your concerns</b> <br />
                        <textarea required name="message" onChange={handleChange} className="form-control" placeholder="Describe your concerns" value={contact.message}></textarea>
                    </div>
                </div>
                <div className="pt-3 col-md-5 mx-auto text-left">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form >

        </div >
    )
}

export default Contact;