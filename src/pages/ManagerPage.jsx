import React from 'react';
import PasswordList from '../components/PasswordList';
import PasswordInput from '../components/PasswordInput';

const ManagerPage = () => {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">Password Manager</h1>
            <PasswordInput />
            <PasswordList />
        </div>
    );
};

export default ManagerPage;