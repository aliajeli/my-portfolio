import Link from "next/link";
import React from "react";
const ContactLink = ({
  href,
  title,
  description,
  children,
}: {
  href: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className=" h-full flex bg-accent rounded-lg"
    >
      <div className="w-20 h-full grid place-content-center">{children}</div>
      <div className="bg-light dark:bg-dark w-full m-1 rounded-lg flex flex-col justify-evenly items-center duration-700">
        <span className="text-lg text-accent">{title}</span>
        <span className="text-xs font-bold text-dark dark:text-light duration-700">
          {description}
        </span>
      </div>
    </Link>
  );
};
export default ContactLink;
