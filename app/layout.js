import "@css/all.min.css";
import "@css/animate.css";
import "@css/animate.min.css";
import "@css/animated-text.css";
import "@css/bootstrap-icons.css";
import "@css/bootstrap.min.css";
import "@css/dropdown.css";
import "@css/flaticon.css";
import "@css/magnific-popup.min.css";
import "@css/meanmenu.min.css";
import "@css/owl.carousel.min.css";
import "@css/owl.transitions.css";
import "@css/responsive.css";
import "@css/style.css";
// import "@css/swiper.min.css";
// import Preloader from "@/components/Preloader";
import "@css/theme-default.css";
// import { Nunito} from "next/font/google";
// import "./globals.css";

// // const heebo = Heebo({
// //   subsets: ["latin"],
// //   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// //   variable: "--heebo",
// //   display: "swap",
// // });

// // const jost = Jost({
// //   subsets: ["latin"],
// //   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// //   variable: "--jost",
// //   display: "swap",
// // });



// // added
// const nunito = Nunito({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
//   variable: "--nunito",
//   display: "swap",
// });

// // const fontFamily = `${jost.variable} ${heebo.variable}`;


// // Added
// const fontFamily = `${nunito.variable}`;
// // 














export const metadata = {
  title:
    "Shamba Shield Insuarance",
  description: "Insurance That caters for Farmer needs",
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={fontFamily}>
//         <Preloader />
//         {children}
//       </body>
//     </html>
//   );
// }
// File: app/layout.js or app/globals.js (depending on your Next.js structure)

import Preloader from "@/components/Preloader";
import "@css/theme-default.css";
import { Nunito } from "next/font/google";
import "./globals.css";


// Load Nunito font using next/font/google
const nunito = Nunito({
  className: 'font-sans',
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  variable: "--nunito",
  display: "swap",
});

// Apply font globally (you can wrap your layout like this if needed)
const fontFamily = nunito.variable;

export default function RootLayout({ children }) {
 return (
    <html lang="en" className={fontFamily}>
        <head>
        <link rel="icon" href="/assets/images/myImages/image/newImages/shambaLogo2.svg"/>
        </head>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
