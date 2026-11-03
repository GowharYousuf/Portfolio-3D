import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const configured = Boolean(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID && import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID && import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!configured) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nReply to: ${form.email}`);
      window.location.href = `mailto:gowharyousuf2@gmail.com?subject=${subject}&body=${body}`;
      setStatus("Your email app will open with your message. Please send it there, or email me directly below.");
      return;
    }
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Gowhar Yousuf",
          from_email: form.email,
          to_email: "gowharyousuf2@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus("Thank you. Your message was sent.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          setStatus("Message could not be sent. Please try again or email me directly below.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='min-w-0 flex-[0.75] bg-black-100 p-5 sm:p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Based in Bengaluru, India</p>
        <h3 className={styles.sectionHeadText}>Let’s connect.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              required
              maxLength={120}
              autoComplete='name'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              required
              autoComplete='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              required
              maxLength={5000}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Tell me a little about what you have in mind.'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : configured ? "Send message ↗" : "Open email draft ↗"}
          </button>
          <p role="status" className="text-sm text-secondary">{status || (!configured && "This opens a draft in your email app.")}</p>
          <a href="mailto:gowharyousuf2@gmail.com" className="text-sm text-[#C5AEFF] break-all">gowharyousuf2@gmail.com ↗</a>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <div className="flex h-full flex-col justify-center items-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#17152c] to-[#080b18] p-8 text-center">
          <span aria-hidden="true" className="text-7xl text-[#bca4f4] mb-6">↗</span>
          <p className="text-2xl sm:text-4xl font-semibold">Have something<br />in mind?</p>
          <p className="text-secondary mt-5 max-w-xs leading-7">Let’s turn your next idea into a thoughtful digital experience.</p>
          <a href="https://www.linkedin.com/in/gowhar-yousuf-262594323" target="_blank" rel="noreferrer" className="mt-8 text-[#c5aeff] text-sm">Connect on LinkedIn ↗</a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
