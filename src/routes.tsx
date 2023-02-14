import React from 'react';
import {BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import  PageDefault  from './components/PageDefault';
import  Home  from './pages/home';
import Header from 'components/Header';

export default function AppRouter(){
    return(
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<PageDefault/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/links/:id' element={<Home/>}/>
                </Route>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}