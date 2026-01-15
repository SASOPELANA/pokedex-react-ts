import { useState } from "react";
import "./../styles/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here (e.g., send to an API)
    console.log({ name, email, message });
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h1>Contacto</h1>
      {submitted ? (
        <div className="contact-success">
          <h2>¡Gracias por tu mensaje!</h2>
          <p>Nos pondremos en contacto contigo pronto.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-button">
            Enviar
          </button>
        </form>
      )}
      <div className="contact-info">
        <h2>Otra forma de contactar</h2>
        <p>
          Si lo prefieres, puedes enviarme un email directamente a:
          <a href="mailto:sopekof@gmail.com"> sopekof@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
