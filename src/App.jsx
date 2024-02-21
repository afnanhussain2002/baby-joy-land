import React from 'react';
import Header from './sheard/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './sheard/Footer/Footer';

const App = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default App;