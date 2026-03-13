import "@styles/styles.css";
import "@styles/CKGlobal.css";
import { StateProvider } from "@context/StateProvider";
import Copyright from "@components/layout/Copyright";
import { find } from "@config/lib/api";
import localFont from "next/font/local";
import Hotline from "@components/layout/Hotline";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";

const UVNM = localFont({
  src: "../public/UVNM.ttf",
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StateProvider>
        <body className=" font-light">
          <Header />
          <main className="d:mt-[0px] p:mt-[100px]">{children}</main>
          <Footer />
          {/* <Hotline Config={Config} /> */}
          <Copyright />
        </body>
      </StateProvider>
    </html>
  );
}
