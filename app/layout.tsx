import "@styles/styles.css";
import "@styles/CKGlobal.css";
import { StateProvider } from "@context/StateProvider";
import localFont from "next/font/local";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import FloatingContact from "@components/layout/FloatingContact";
import { Roboto } from "next/font/google";
import { find } from "@config/lib/api";
import { Metadata } from "next";
import { SEOProps } from "@assets/props/PropsConfig";
import { LocalFindById } from "@components/items/Handle";

const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "700", "900"], // Tải các độ dày chữ cần thiết
  variable: "--font-roboto", // Tạo biến CSS tùy chỉnh
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const Config = await find("Config");
  const SEOmetaTag: SEOProps = LocalFindById(Config, "SEOconfig");
  return {
    description: SEOmetaTag?.Description,
    keywords: SEOmetaTag?.Keyword,
    title: SEOmetaTag?.Title,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Config = await find("Config");
  return (
    <html lang="en">
      <StateProvider>
        <body
          className={`font-sans antialiased text-gray-800 bg-white ${roboto.className}`}
        >
          {" "}
          <Header Config={Config} />
          <main className="d:mt-[0px] p:mt-[100px]">{children}</main>
          <FloatingContact Config={Config} />
          <Footer Config={Config} />
        </body>
      </StateProvider>
    </html>
  );
}
