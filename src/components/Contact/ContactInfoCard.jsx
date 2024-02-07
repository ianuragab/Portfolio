import "./ContactMe.css";

// eslint-disable-next-line react/prop-types
const ContactInfoCard = ({ iconUrl, text }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>

      <p>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
