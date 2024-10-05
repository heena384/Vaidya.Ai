"use client";

import { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import GlobalStyle, { LayoutContainer } from "../styles/global";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <title>Vaidya</title>
      </head>
      <body>
        <GlobalStyle />
        <Header />

        <LayoutContainer fluid>
          <div className="content">{children}</div>
        </LayoutContainer>
        <Footer />
      </body>
    </html>
  );
}
