import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main, NotFound, Search } from 'pages';

function Routers() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
