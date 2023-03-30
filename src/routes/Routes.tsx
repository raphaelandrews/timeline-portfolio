import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav, Footer, Header } from "@/features";
import { Home } from "@/pages";
import { ThemePicker } from "@/features";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

function RoutesApp() {
    const { isThemePicker } = useContext(ThemeContext);

    return (
        <BrowserRouter>
            <Nav />
            {isThemePicker &&
                <ThemePicker />
            }
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/*' />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesApp;