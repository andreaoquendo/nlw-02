import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

/* Atualização do react-router-dom https://reactrouterdotcom.fly.dev/docs/en/v6/getting-started/overview */
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Landing />} />
                <Route  path="/study" element={<TeacherList />} />
                <Route  path="/give-classes" element={<TeacherForm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

