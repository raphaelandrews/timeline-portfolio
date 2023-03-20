import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "@/features";
import { Home } from "@/pages";

function RoutesApp() {

    return (
        <BrowserRouter>
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