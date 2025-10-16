import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaLocationArrow,
  FaClock,
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
        "service_j15qgdj", // EmailJS service ID
        "template_44c7db7", // EmailJS template ID
        form.current,
        "JDpvggxMkp9_DsuXD" // EmailJS public key
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

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-50 to-[#eaf9ff] py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
          Get In <span className="text-[#11CDEF]">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Side - Contact Info */}
          <div className="bg-white shadow-lg rounded-2xl p-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Let’s Connect 👋
            </h3>
            <p className="text-gray-600 mb-8">
              I’d love to hear from you! Whether you have a question, project
              idea, or just want to say hello — drop me a message and I’ll get
              back to you soon.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#11CDEF] text-2xl" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=asha86081@gmail.com"
                  className="text-gray-700 hover:text-[#11CDEF] transition-colors"
                >
                  asha86081@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-[#11CDEF] text-2xl" />
                <a
                  href="https://www.linkedin.com/in/asha-akter-rimy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#11CDEF] transition-colors"
                >
                  linkedin.com/in/asha-akter-rimy
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-[#11CDEF] text-2xl" />
                <a
                  href="https://github.com/rimyakter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#11CDEF] transition-colors"
                >
                  github.com/rimyakter
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaLocationArrow className="text-[#11CDEF] text-2xl" />
                <p className="text-gray-700 ">
                  Ka-147 Kuril Kazibari, Vatara, Dhaka 1229, Bangladesh
                </p>
              </div>
              {/* Response Time Section */}
              <div className="flex items-center gap-4">
                <FaClock className="text-[#11CDEF] text-2xl" />
                <div>
                  <p className="text-gray-800 font-medium">Response Time</p>
                  <p className="text-gray-500 text-sm">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white shadow-lg rounded-2xl p-10"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send a Message
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#11CDEF]"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#11CDEF]"
              />
            </div>

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#11CDEF]"
            ></textarea>

            <button
              type="submit"
              disabled={isSending}
              className="bg-[#11CDEF] text-white font-semibold mt-6 px-6 py-3 rounded-lg hover:bg-[#0bb8d5] transition-all duration-300 w-full"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {messageStatus && (
              <p className="mt-4 text-sm text-gray-600">{messageStatus}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
