import React from 'react';
import './App.css';
import Header from './components/Header';
import WelcomeNote from './components/WelcomeNote';
import JobsInternships from './components/JobsInternships';
import NewsUpdates from './components/NewsUpdates';
import DistinguishedAlumni from './components/DistinguishedAlumni';
import LatestMembers from './components/LatestMembers';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className="App">
            <Header />
            <main className="main-content">
                <WelcomeNote />
                <section className="content-section">
                    <JobsInternships />
                    <NewsUpdates />
                </section>
                <DistinguishedAlumni />
                <LatestMembers />
                <Sidebar />
            </main>
            <footer className="footer">
                <p>&copy; 2024 ACTS CDAC Hyderabad. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
