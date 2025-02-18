import React from 'react';
import PasswordGenerator from '../components/PasswordGenerator';

const GeneratorPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Password Generator</h1>
            <div className="flex flex-col items-center">
                <PasswordGenerator />
            </div>
        </div>
    );
};

export default GeneratorPage;