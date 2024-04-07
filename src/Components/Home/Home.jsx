import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <section className='h-screen'>
            <div>
            <h1>Welcome Back to our website</h1>
            </div>
        </section>
    );
};

export default Home;