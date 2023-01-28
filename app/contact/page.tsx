import Link from "next/link";
import React from "react";
import ContactForm from "./ContactForm";
import {
  FaPhoneAlt,
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import ContactLink from "./ContactLink";

const Contact = () => {
  return (
    <main className="bg-light dark:bg-dark border-0 border-accent/30 flex flex-col md:flex-row md:place-items-center lg:rounded-lg lg:border ">
      <section className="h-full flex fex-wrap flex-col p-5 gap-3 justify-evenly md:w-full md:h-5/6 md:gap-10">
        <ContactLink
          href="tel:+989304104962"
          title="Call me on mobile"
          description="+989304104962"
        >
          <FaPhoneAlt className="w-8 h-8 fill-light dark:fill-dark" />
        </ContactLink>
        <ContactLink
          href="https://t.me/mraliajeli"
          title="message me on Telegram"
          description="@mraliajeli"
        >
          <FaTelegramPlane className="w-8 h-8 fill-light dark:fill-dark" />
        </ContactLink>
        <ContactLink
          href="https://www.instagram.com/farhad_ajeli/"
          title="follow me on Instagram"
          description="#farhad_ajeli"
        >
          <FaInstagram className="w-8 h-8 fill-light dark:fill-dark" />
        </ContactLink>
        <ContactLink
          href="https://github.com/aliajeli"
          title="See my wok on github"
          description="aliajeli"
        >
          <FaGithub className="w-8 h-8 fill-light dark:fill-dark" />
        </ContactLink>
      </section>
      <div className="h-[0.15rem] bg-accent mx-5 rounded-full relative md:h-5/6 md:w-[0.15rem] md:self-center">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent px-1 bg-light dark:bg-dark">
          OR
        </span>
      </div>
      <ContactForm />
    </main>
  );
};
export default Contact;
