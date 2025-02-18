import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPassword } from '../features/password/passwordSlice';
import StrengthMeter from './StrengthMeter';
import { Save } from 'lucide-react';

const PasswordInput = () => {
    const dispatch = useDispatch();
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");

    const handleSavePassword = () => {
        if (!newPassword.trim()) {
            setError("Password cannot be empty");
            return;
        }

        dispatch(addPassword({ id: Date.now(), value: newPassword }));
        setNewPassword("");
        setError("");
    };

    return (
        <div className="w-full max-w-md mx-auto mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Add Custom Password</h2>
            <div className="space-y-4">
                <div>
                    <input
                        type="text"
                        className={`w-full bg-gray-700 p-3 rounded-md ${error ? 'border-red-500 border-2' : ''}`}
                        value={newPassword}
                        onChange={(e) => {
                            setNewPassword(e.target.value);
                            setError("");
                        }}
                        placeholder="Enter password"
                    />
                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                </div>

                {newPassword && <StrengthMeter password={newPassword} />}

                <button
                    className="w-full bg-purple-600 p-3 rounded-md hover:bg-purple-600 transition-colors flex items-center justify-center space-x-2"
                    onClick={handleSavePassword}
                >
                    <Save size={20} />
                    <span>Save Password</span>
                </button>
            </div>
        </div>
    );
};

export default PasswordInput;