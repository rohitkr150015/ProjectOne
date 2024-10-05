import React from "react";
import "./Contact.css";
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "74193320-7eae-4338-adec-be06ac53dbd9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div>
      <div className="contact">
        <div className="contact_Title">
          <h1>Connect With Me</h1>
          <p>
            We would love to respond to your queries , we are currently
            Accepting Projects
          </p>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h3>Send your Request</h3>
            <form onSubmit={onSubmit}>
              <div className="input-row">
                <div className="input-group">
                  <label>Name</label>
                  <input type="text"  placeholder="Enter your Name" name='name' required></input>
                </div>

                <div className="input-group">
                  <label>Phone</label>
                  <input type="text"></input>
                </div>

                <div className="input-group">
                  <label>Email</label>
                  <input type="email"  placeholder="Enter your Email" name="email" required></input>
                </div>

                <div className="input-group">
                  <label>Subject</label>
                  <input type="text" ></input>
                </div>
              </div>
<label>Message</label>
<textarea  rows="5" placeholder="your Message" name="message"  required></textarea>
<button type="submit">Send</button>

            </form>
          </div>
          <div className="contact-right">
<h3>Reach Us</h3>
<table>

<tr>
  <td><i className='bx bxs-envelope'></i> Email</td>
  <td>rohit.kumar.ds.2022@mitmeerut.ac.in</td>
</tr>
<tr>
  <td><i className='bx bxs-phone-call' ></i>Phone </td>
  <td>7488823085</td>
</tr>
<tr>
  <td><img type="icon" className="location-img" src="src/assets/location-pointer.png"/>Address </td>
  <td> Baral Partapur,Merrut Institute of Technology<br></br>Meerut,Up</td>
</tr>

  </table>

          </div>
        </div>
      </div>
    </div>
  );
};
import "./Contact.css";
export default Contact;
