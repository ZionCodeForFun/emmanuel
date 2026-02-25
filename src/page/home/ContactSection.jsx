import React, { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../../components/useView";
import { Mail, MessageSquare, User, Send, Github, X } from "lucide-react";
import "../../styles/contactSection.css";
import { FaXTwitter } from "react-icons/fa6";

export const ContactSection = forwardRef((props, contactRef) => {
  const [inViewRef, isInView] = useInView({ threshold: 0.2 });

  const combinedRef = (node) => {
    inViewRef.current = node;
    if (contactRef) {
      if (typeof contactRef === "function") {
        contactRef(node);
      } else {
        contactRef.current = node;
      }
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        access_key: "d631854a-88bb-4569-bb60-f92939b8437a",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResult("Something went wrong. Try again.");
      }
    } catch (error) {
      setResult("Network error. Please try again.");
      console.error(error);
    }

    setLoading(false);

    setTimeout(() => setResult(""), 5000);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section ref={combinedRef} id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact-title">Let's Work Together</h2>

          <p className="contact-subtitle">
            Have a project in mind? I'd love to hear from you. Send me a message
            and let's create something amazing together.
          </p>

          <div className="contact-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="contact-form-wrapper"
            >
              <div className="contact-card">
                <form onSubmit={onSubmit} className="contact-form">
                  <div className="form-group">
                    <label>Name</label>
                    <div className="input-wrapper">
                      <User className="input-icon" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <div className="input-wrapper">
                      <Mail className="input-icon" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Message</label>
                    <div className="input-wrapper textarea">
                      <MessageSquare className="input-icon textarea-icon" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                        placeholder="Tell me about your project..."
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="submit-btn"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="send-icon" />
                  </motion.button>

                  {result && (
                    <p style={{ marginTop: "1rem", textAlign: "center" }}>
                      {result}
                    </p>
                  )}
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="contact-social"
            >
              <div className="contact-card">
                <h3 className="social-title">Connect With Me</h3>

                <div className="social-list">
                  <a
                    href="https://github.com/ZionCodeForFun"
                    target="_blank"
                    rel="noreferrer"
                    className="social-item"
                  >
                    <div className="social-icon">
                      <Github />
                    </div>
                    <div>
                      <div className="social-name">GitHub</div>
                      <div className="social-handle">@ZionCodeForFun</div>
                    </div>
                  </a>

                  <a href="https://x.com/emmyzion_" className="social-item">
                    <div className="social-icon">
                      <FaXTwitter />
                    </div>
                    <div>
                      <div className="social-name">Twitter/X</div>
                      <div className="social-handle">@Emmyzion_</div>
                    </div>
                  </a>
                  <a href="mailto:deanzion36@gmail.com" className="social-item">
                    <div className="social-icon">
                      <Mail />
                    </div>
                    <div>
                      <div className="social-name">Email</div>
                      <div className="social-handle">deanzion36@gmail.com</div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
