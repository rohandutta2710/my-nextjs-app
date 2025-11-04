"use client"
import { useState } from "react";
import "../globals.css";

export default function Contact() {
    const [formValue, setFormValue] = useState({ name: "", email: "", message: "" })
    const handleFormInputs = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }
    const handleContactSubmit = () => {
        if (formValue.name === "" || formValue.email === "" || formValue.message === "" || formValue.name === undefined || formValue.email === undefined || formValue.message === undefined) {
            alert("Please enter all the detail to contact you.")
        }
        else {
            setFormValue({ name: "", email: "", message: "" })
            alert("Thanks!! We will contact you soon.");
        }
    }
    return (
        <div className="contact-form mt-12 mb-12">
            <div className="w-2xl contact-div">
                <h1 className="contact-heading text-2xl" id="contact">
                    Get in touch
                </h1>
                <form>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control w-full p-2 rounded-sm  text-purple-800 focus:outline-none" id="name" placeholder="Name" name="name" value={formValue.name === undefined ? "" : formValue.name} onChange={handleFormInputs}></input>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control w-full p-2 rounded-sm   text-purple-800 focus:outline-none" id="email" placeholder="Email Address" name="email" value={formValue.email === undefined ? "" : formValue.email} onChange={handleFormInputs}></input>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control w-full p-2 rounded-sm text-purple-800 focus:outline-none" placeholder="Message" id="floatingTextarea2" style={{ height: "220px" }} name="message" value={formValue.message === undefined ? "" : formValue.message} onChange={handleFormInputs} ></textarea>
                    </div>
                </form>
                <button className=" font-bold w-full p-2 rounded-sm bg-purple-800 text-white hover:bg-cyan-300 hover:text-purple-800" onClick={handleContactSubmit}>Send</button>
            </div>
        </div>

    );
}
