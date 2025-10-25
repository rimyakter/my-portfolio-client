import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaLocationArrow,
  FaClock,
  FaUserFriends,
} from "react-icons/fa";

const ContactSection = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_j15qgdj",
        "template_44c7db7",
        form.current,
        "JDpvggxMkp9_DsuXD"
      )
      .then(
        () => {
          setMessageStatus("✅ Message sent successfully!");
          setIsSending(false);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setMessageStatus("❌ Failed to send message. Try again!");
          setIsSending(false);
        }
      );
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, type: "spring" },
    }),
  };

  return (
    <section id="contact" className=" py-12">
      <div className="w-11/12 px-2 mx-auto ">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center text-gray-300 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gray-300">Get In</span>
          <span className="bg-cyan-400 bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h2>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Left Side - Contact Info */}
          <motion.div
            custom={0}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" border border-cyan-400  rounded-2xl p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-center md:text-start text-gray-300 mb-4">
                Let’s Connect
              </h3>
              <p className="text-gray-400 mb-8">
                I’d love to hear from you! Whether you have a question, project
                idea, or just want to say hello — drop me a message and I’ll get
                back to you soon.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-cyan-400 text-2xl" />
                  <a
                    href="mailto:asha86081@gmail.com"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    asha86081@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <FaLinkedin className="text-cyan-400 text-2xl" />
                  <a
                    href="https://www.linkedin.com/in/asa-akter-rimy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    linkedin.com/in/asa-akter-rimy
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <FaGithub className="text-cyan-400 text-2xl" />
                  <a
                    href="https://github.com/rimyakter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    github.com/rimyakter
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <FaLocationArrow className="text-cyan-400 text-2xl" />
                  <p className="text-gray-300">
                    Ka-147 Kuril Kazibari, Vatara, Dhaka 1229, Bangladesh
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <FaClock className="text-cyan-400 text-2xl" />
                  <div>
                    <p className="text-gray-300 font-medium">Response Time</p>
                    <p className="text-gray-400 text-sm">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" border border-cyan-400  rounded-2xl p-10 flex flex-col justify-between "
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-6">
                Send a Message
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="border border-gray-700  text-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="border border-gray-700  text-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="border border-gray-700  text-gray-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
              ></textarea>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={isSending}
                className="text-cyan-400 bg-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-transparent hover:text-cyan-400 hover:border hover:border-cyan-400 transition-all duration-300 w-full"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {messageStatus && (
                <p className="mt-4 text-sm text-gray-400">{messageStatus}</p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
