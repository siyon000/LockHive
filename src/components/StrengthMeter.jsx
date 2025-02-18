import React from "react";
import zxcvbn from "zxcvbn";

const StrengthMeter = ({ password }) => {
    const checkStrength = (password) => {
        if (!password) return null;
        const result = zxcvbn(password);
        return result.score; // 0 - 4
    };

    const getStrengthLabel = (score) => {
        switch (score) {
            case 0:
            case 1:
                return "Weak";
            case 2:
                return "Fair";
            case 3:
                return "Good";
            case 4:
                return "Strong";
            default:
                return "";
        }
    };

    const strength = checkStrength(password);

    return (
        <div>
            {strength !== null && (
                <div className="mt-2 text-sm">
                    <p>Password Strength: {getStrengthLabel(strength)}</p>
                    <div
                        className={`h-2 mt-1 rounded-full ${strength < 2
                            ? "bg-red-600"
                            : strength === 2
                                ? "bg-yellow-500"
                                : "bg-green-600"
                            }`}
                    ></div>
                </div>
            )}
        </div>
    );
};

export default StrengthMeter;
