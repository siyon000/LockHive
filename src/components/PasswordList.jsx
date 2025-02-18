import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePassword } from "../features/password/passwordSlice";

const PasswordList = () => {
    const dispatch = useDispatch();
    const passwords = useSelector((state) => state.password);

    return (
        <ul className="mt-4">
            {passwords.map((pass) => (
                <li key={pass.id} className="bg-gray-800 p-2 mb-2 rounded">
                    {pass.value}
                    <button className="bg-red-600 ml-4 p-1 rounded" onClick={() => dispatch(deletePassword(pass.id))}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default PasswordList;