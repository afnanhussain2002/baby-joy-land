import React from 'react';
import Header from './sheard/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './sheard/Footer/Footer';

const App = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-screen'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default App;