import { Manrope } from "next/font/google";
import "./style/globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Baseball Games",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={manrope.className}>
                {children}
            </body>
        </html>
    );
}
