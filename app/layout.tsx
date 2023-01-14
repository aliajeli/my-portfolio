import "./globals.css";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import { Fira_Code } from "@next/font/google";
import Resume from "./Components/Resume";
import Header from "./Components/Header";

const firaCode = Fira_Code({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html data-theme="light" className={firaCode.className}>
      <head />
      <body className="w-full h-full relative overflow-hidden bg-light/50 dark:bg-dark/95 flex flex-row xl:gap-6 xl:px-12 group/aside text-dark dark:text-light">
        <Resume />
        <section className="flex flex-col xl:gap-6 flex-[2]">
          <Header className="w-full h-14 bg-light dark:bg-dark" />
          {children}
          <Footer className="w-full h-14 bg-light dark:bg-dark" />
        </section>
        <Menu className="" />
      </body>
    </html>
  );
};
export default RootLayout;
