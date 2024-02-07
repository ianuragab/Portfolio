import ContactInfoCard from "./ContactInfoCard";
import Email from "../../assets/email.jpg"
import Github from "../../assets/github.jpeg"
import "./ContactMe.css";
import ContactForm from "./ContactForm";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl={Email}
            text="anuragbhardwaj3108@gmail.com"
          />
          <ContactInfoCard
            iconUrl={Github}
            text="https://github.com/iamab8"
          />
          
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
