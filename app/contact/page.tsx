"use client"
import "../globals.css";

export default function Contact() {
    const handleContactSubmit = () => {
        let name = document.getElementById("floatingInputName").value;
        let email = document.getElementById("floatingInput").value;
        let comments = document.getElementById("floatingTextarea2").value;
        if (name === "" || email === "" || comments === "") {
            alert("Please enter all the detail to contact you.")
        }
        else {
            document.getElementById("floatingInputName").value = "";
            document.getElementById("floatingInput").value = "";
            document.getElementById("floatingTextarea2").value = "";
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
                        <input type="text" className="form-control w-full p-2 rounded-sm  text-purple-800 focus:outline-none" id="floatingInputName" placeholder="Name" name="name"></input>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control w-full p-2 rounded-sm   text-purple-800 focus:outline-none" id="floatingInput" placeholder="Email Address" name="email" ></input>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control w-full p-2 rounded-sm text-purple-800 focus:outline-none" placeholder="Message" id="floatingTextarea2" style={{ height: "220px" }} name="message" ></textarea>
                    </div>
                </form>
                <button className=" font-bold w-full p-2 rounded-sm bg-purple-800 text-white hover:bg-cyan-300 hover:text-purple-800" onClick={handleContactSubmit}>Send</button>
            </div>
        </div>

    );
}
