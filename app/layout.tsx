import "./globals.css";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import { Roboto_Slab } from "@next/font/google";
import Resume from "./Components/Resume";
import Header from "./Components/Header";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html data-theme="light" className={robotoSlab.className}>
      <head />
      <body className="w-full h-full relative overflow-hidden bg-light/50 dark:bg-dark/95 flex flex-row xl:gap-6 xl:px-12 group/aside text-dark dark:text-light">
        <Resume />
        <section className="grid grid-rows-[3.5rem_1fr_3.5rem] xl:gap-6 flex-[2]">
          <Header className="w-full bg-light dark:bg-dark" />
          {children}
          <Footer className="w-full bg-light dark:bg-dark" />
        </section>
        <Menu className="" />
      </body>
    </html>
  );
};
export default RootLayout;
