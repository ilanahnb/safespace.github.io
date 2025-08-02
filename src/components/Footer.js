import React from 'react';
import { Link } from 'react-router-dom';

export default function AppFooter() {
    return (
        <footer className="text-center py-4" style={{ backgroundColor: '#1c1c1c', color: '#eaeaea' }}>
            <p className="mb-1">&copy; 2025 Safe Space</p>
            <div>
                <Link to="/privacy" className="text-light mx-2 text-decoration-none">Privacy</Link>
                <Link to="/contact" className="text-light mx-2 text-decoration-none">Contact</Link>
            </div>
        </footer>
    );
}
