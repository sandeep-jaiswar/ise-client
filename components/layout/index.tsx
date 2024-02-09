import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

const Layout =({children}: any) => {
    return(
        <div className="flex flex-col min-h-[100dvh]">
            <Header />
            {children}
            <Footer />
        </div>
    )
};

export default Layout;