import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPassword } from '../features/password/passwordSlice';
import { Copy, Save, RefreshCw } from 'lucide-react';
import StrengthMeter from './StrengthMeter';

const PasswordGenerator = () => {
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(12);
    const [showCopied, setShowCopied] = useState(false);
    const [options, setOptions] = useState({
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true
    });

    const generatePassword = () => {
        let chars = '';
        if (options.uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (options.lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
        if (options.numbers) chars += '0123456789';
        if (options.symbols) chars += '!@#$%^&*()_+-=[]{}|;:,./<>?';

        if (chars === '') {
            chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        }

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            newPassword += chars[Math.floor(Math.random() * chars.length)];
        }
        setPassword(newPassword);
    };

    const copyPassword = async () => {
        if (password) {
            await navigator.clipboard.writeText(password);
            setShowCopied(true);
            setTimeout(() => setShowCopied(false), 2000);
        }
    };

    const savePassword = () => {
        if (password) {
            dispatch(addPassword({ id: Date.now(), value: password }));
            setPassword('');
        }
    };

    return (
        <div className="w-full max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="space-y-4">
                {/* Password Display */}
                <div className="relative">
                    <input
                        type="text"
                        className="w-full bg-gray-700 p-3 pr-24 rounded-md font-mono"
                        value={password}
                        readOnly
                        placeholder="Generated password"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex space-x-2">
                        {password && (
                            <>
                                <button
                                    onClick={copyPassword}
                                    className="p-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                                    title="Copy password"
                                >
                                    <Copy size={16} />
                                </button>
                                <button
                                    onClick={savePassword}
                                    className="p-2 bg-green-600 rounded-md hover:bg-green-700 transition-colors"
                                    title="Save password"
                                >
                                    <Save size={16} />
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* Password Strength Meter */}
                {password && <StrengthMeter password={password} />}

                {/* Length Slider */}
                <div>
                    <div className="flex justify-between">
                        <label>Password Length</label>
                        <span>{length} characters</span>
                    </div>
                    <input
                        type="range"
                        min="8"
                        max="32"
                        value={length}
                        onChange={(e) => setLength(parseInt(e.target.value))}
                        className="w-full mt-2"
                    />
                </div>

                {/* Options */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                    {Object.entries(options).map(([key, value]) => (
                        <label key={key} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={value}
                                onChange={() => setOptions(prev => ({
                                    ...prev,
                                    [key]: !prev[key]
                                }))}
                                className="w-4 h-4 rounded"
                            />
                            <span className="capitalize">{key}</span>
                        </label>
                    ))}
                </div>

                {/* Generate Button */}
                <button
                    onClick={generatePassword}
                    className="w-full bg-green-600 p-3 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                    <RefreshCw size={20} />
                    <span>Generate Password</span>
                </button>

                {/* Copied Notification */}
                {showCopied && (
                    <div className="text-center text-green-500 text-sm">
                        Password copied to clipboard!
                    </div>
                )}
            </div>
        </div>
    );
};

export default PasswordGenerator;