import React from "react";

function Contact() {
  return (
    <div className="Contact">
      <div class="container">
        <h3>Contact Form</h3>
        <form action="#" name="contact_form">
          <label for="first_name">First Name</label>
          <input name="first_name" type="text" required placeholder="Fahad" />
          <br />
          <label for="last_name">Last Name</label>
          <input name="last_name" type="text" required placeholder="kizito" />
          <br />
          <label for="email">Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@domain.com"
          />
          <br />
          <label for="message">Message</label>
          <br />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Enter your message here ..."
            required
          ></textarea>
          <div class="center">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
