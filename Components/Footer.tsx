const Footer = ({ className }: { className: string }) => {
  return (
    <footer
      className={
        className +
        " " +
        "border xl:border-x border-accent/30 lg:rounded-t-lg grid place-content-center"
      }
    >
      <h2 className="text-dark/50 dark:text-light/50 text-center text-[0.65rem] sm:text-sm xl:text-sm">
        {"Created by Ali Ajeli Lahiji, with {Nextjs, Tailwind, Prisma}"}
      </h2>
    </footer>
  );
};
export default Footer;
