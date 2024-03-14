import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <section>
            <div>
            <NavBar></NavBar>
            </div>
            <div>
            <Outlet></Outlet>
            </div>
        </section>
    );
};

export default Home;