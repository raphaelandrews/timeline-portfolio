import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav, Footer, Header } from "@/features";
import { Home } from "@/pages";

function RoutesApp() {

    return (
        <BrowserRouter>
            <Nav />
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