import React from "react";
import icons from "../../../assets/icons";

function ContactMe({ isMobile }) {
  return (
    <div style={{ width: isMobile ? "80%" : 600, margin: "50px auto 75px", position: "relative" }}>
      <h3 className="text-center">CONTACT ME</h3>
      <div className="mb-3 d-flex">
        <FormIcon icon={icons.personFill} />
        <TextInput placeholder="Name" />
      </div>

      <div className="mb-3 d-flex">
        <FormIcon icon={icons.envelopeFIll} />
        <TextInput placeholder="Email address" />
      </div>

      <div className="mb-3">
        <label for="message" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="message"
          rows="3"
          placeholder="Your message here..."
          style={{ resize: "none" }}
        ></textarea>
      </div>

      <div className="mx-1">
        <button type="submit" class="btn btn-primary" style={{ width: "100%" }}>
          Send
        </button>
      </div>
    </div>
  );
}

function FormIcon(props) {
  return (
    <div
      style={{
        padding: 10,
        paddingTop: 5,
        backgroundColor: "#fff",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      }}
    >
      <img src={props.icon} alt="Name" />
    </div>
  );
}

function TextInput(props) {
  return (
    <input
      type="email"
      className="form-control"
      placeholder={props.placeholder}
      style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
    />
  );
}

export default ContactMe;
