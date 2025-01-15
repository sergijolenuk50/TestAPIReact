// import { useEffect, useState } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Card from "./components/common/card";
// import Layout from './components/common/layout';
// import Home from './components/common/card/Home'
// import { APP_ENV } from './env/index'
// import HomePage from './pages/index'


// function App() {
//   const [count, setCount] = useState(0)
//   useEffect(() => {    console.log("Use Effect!");}, []);
// // console.log("Render component :)");
// console.log("Render component :)", APP_ENV.REMOTE_BASE_URL);
//   return (
//     <>
  
//   <HomePage/>

// <Routes>
// <Route path="/" element={<Layout />}>
//   {/* <Route index element={<Home />} />
//   <Route path="about" element={<About />} />
//   <Route path="dashboard" element={<Dashboard />} />

  
//   <Route path="*" element={<NoMatch />} /> */}
// </Route>
// </Routes>
// </>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import CategoryListPage from "./pages/Category/CategoryListPage";
import CreateCategoryPage from "./pages/Category/CreateCategoryPage";
import EditCategoryPage from "./pages/Category/EditCategoryPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
// import Layout from "./components/Layout";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="categories">
                        <Route index element={<CategoryListPage />} />
                        <Route path="create" element={<CreateCategoryPage />} />
                        <Route path="edit/:id" element={<EditCategoryPage />} />
                        {/*<Route path=":id" element={<ViewCategoryPage />} />*/}
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
