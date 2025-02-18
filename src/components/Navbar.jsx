import { Link, useLocation } from 'react-router-dom';
import { Shield, Key, CheckCircle, List, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false); // Close menu when route changes
    }, [location.pathname]);

    const navItems = [
        { path: '/', label: 'Home', icon: Shield },
        { path: '/generator', label: 'Generator', icon: Key },
        { path: '/checker', label: 'Checker', icon: CheckCircle },
        { path: '/manager', label: 'Manager', icon: List },
    ];

    return (
        <nav className="bg-gray-800 shadow-lg fixed w-full top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="text-white text-xl font-bold">
                        LockHive
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map(({ path, label, icon: Icon }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition 
                                    ${location.pathname === path
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span>{label}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile menu dropdown */}
                {isOpen && (
                    <div className="md:hidden bg-gray-900 p-4 rounded-lg shadow-lg">
                        {navItems.map(({ path, label, icon: Icon }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium 
                                    ${location.pathname === path
                                        ? 'bg-gray-700 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                <Icon className="w-5 h-5" />
                                <span>{label}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
