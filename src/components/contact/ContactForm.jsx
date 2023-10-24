import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //   emailjs.sendForm('service_0zbwjhy', 'template_1i4pf5w', form.current, 'vG8UL_ZLcqLx4SONE')
    emailjs
      .sendForm(
        "service_n1fv6ef",
        "template_1az9wjy",
        form.current,
        "tsu26D7OjQBrjfvw1"
      )
      .then(
        (result) => {
        //   console.log(result.text);
          toast.success("Message send");
        },
        (error) => {
        //   console.log(error.text);
          toast.error("error")
        }
      );
  };

  return (
    <section className="section cantainer contact-form">
      <div className="section contact-form">
        <div className="section-text">
          <h2 className="section_title">Get In Toch</h2>
          <span className="section_subtitle ">
          If you're looking for a partner who can help you unleash your
            potential through technology, look no further than Flare Global
            Soft. Contact us today to learn more about how we can help you
            achieve your goals.
          </span>
        </div>

        <div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form-cantainer"
          >
            <div className="form-fild">
              <label htmlFor="name">
                Your Name <sup>*</sup>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name here"
                required
              />
            </div>
            <div className="form-fild">
              <label htmlFor="email">
                Your Email <sup>*</sup>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email here"
                required
              />
            </div>
            <div className="form-fild">
              <label htmlFor="subject">
                Your Subject <sup>*</sup>
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Your subject here"
                required
              />
            </div>
            <div className="form-fild">
              <label htmlFor="mobile">
                Contact Number <sup>*</sup>
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                placeholder="Your phone number"
                required
              />
            </div>
            <div className="form-fild form-textarea">
              <label htmlFor="message">
                Message <sup>*</sup>
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="4"
                required
                placeholder="Tell us few word"
              ></textarea>
            </div>

            <div className="form-fild">
              <button type="submit" className="button">
                Send Message
              </button>
            </div>
          </form>

          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
