import React from 'react';
import { Link } from 'react-router-dom';
import { Key, Lock, CheckCircle } from 'lucide-react';

const HomePage = () => {
    const features = [
        {
            path: '/generator',
            title: 'Password Generator',
            description: 'Create strong, secure passwords instantly',
            icon: Key,
            color: 'bg-green-600',
        },
        {
            path: '/checker',
            title: 'Password Checker',
            description: 'Test your password strength',
            icon: CheckCircle,
            color: 'bg-blue-600',
        },
        {
            path: '/manager',
            title: 'Password Manager',
            description: 'Store and organize your passwords',
            icon: Lock,
            color: 'bg-purple-600',
        },
    ];

    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">LockHive</h1>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                Secure your digital life with LockHive. Generate strong passwords,
                check their strength, and manage them all in one place.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {features.map(({ path, title, description, icon: Icon, color }) => (
                    <Link
                        key={path}
                        to={path}
                        className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-transform hover:scale-105"
                    >
                        <div className={`${color} inline-block p-3 rounded-lg mb-4`}>
                            <Icon size={24} />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">{title}</h2>
                        <p className="text-gray-400">{description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
