import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import { Header } from './Header';
import Footer from './Footer'; // ⬅️ Import Footer
import { Home } from './Home';
import { Works } from './works';
import { Transpotation } from './Transpotation';
import { LaberContract } from './LaberContract';
import { MachinaryRent } from './MachinaryRent';
import { Contact } from './Contact';

export const Routing = () => {
  return (
    <>
      <Header /> {/* Top Navbar */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="works" element={<Works />} />
          <Route path="transportation" element={<Transpotation />} />
          <Route path="lebarcontract" element={<LaberContract />} />
          <Route path="machinearyrent" element={<MachinaryRent />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>

      <Footer /> {/* Bottom Footer */}
    </>
  );
};

// 👇 Simple layout component used just for Outlet
const Layout = () => {
  return <Outlet />;
};
