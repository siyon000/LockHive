//9. Checker Page (CheckerPage.jsx)
import React, { useState } from 'react';
import StrengthMeter from '../components/StrengthMeter';

const CheckerPage = () => {
    const [password, setPassword] = useState('');

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">Password Strength Checker</h1>

            <div className="bg-gray-800 p-6 rounded-lg">
                {/* Single Input Field */}
                <input
                    type="text"
                    className="w-full bg-gray-700 p-3 rounded-md mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />

                {/* Pass Password to StrengthMeter */}
                <StrengthMeter password={password} />

                {password && (
                    <div className="mt-6 text-gray-300">
                        <h3 className="font-semibold mb-2">Password Requirements:</h3>
                        <ul className="space-y-2">
                            <li className={password.length >= 8 ? 'text-green-500' : 'text-red-500'}>
                                • Minimum 8 characters
                            </li>
                            <li className={/[A-Z]/.test(password) ? 'text-green-500' : 'text-red-500'}>
                                • At least one uppercase letter
                            </li>
                            <li className={/[a-z]/.test(password) ? 'text-green-500' : 'text-red-500'}>
                                • At least one lowercase letter
                            </li>
                            <li className={/[0-9]/.test(password) ? 'text-green-500' : 'text-red-500'}>
                                • At least one number
                            </li>
                            <li className={/[^A-Za-z0-9]/.test(password) ? 'text-green-500' : 'text-red-500'}>
                                • At least one special character
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckerPage;
