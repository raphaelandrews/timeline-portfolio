import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav, Footer, Header } from "@/features";
import { Home } from "@/pages";
import { ThemePicker } from "@/features";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import styled from "styled-components";

const Container = styled.div<{ open: boolean }>`
  max-height: ${({ open }) => (open ? "300px" : "0")};
  transition: max-height 0.5s ease-in-out;
`;

function RoutesApp() {
  const { isThemePicker } = useContext(ThemeContext);
  const open = isThemePicker;

  return (
    <BrowserRouter>
      <Nav />
      <Container open={open}>
         <ThemePicker />
      </Container>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesApp;
