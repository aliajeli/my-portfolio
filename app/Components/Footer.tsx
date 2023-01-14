const Footer = ({ className }: { className: string }) => {
  return (
    <footer
      className={
        className +
        " " +
        "border xl:border-x border-accent/30 xl:rounded-t-lg grid place-content-center"
      }
    >
      <h2 className="text-dark/50 dark:text-light/50">
        {"Created by Ali Ajeli Lahiji, with {Nextjs, Tailwind, Prisma}"}
      </h2>
    </footer>
  );
};
export default Footer;
