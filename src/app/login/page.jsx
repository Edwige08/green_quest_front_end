'use client';

import LoginForm from "../components/organisms/LoginForm";

export default function Login () {

    return (
        <>
            <div className="rounded-md p-5 shadow-md mt-5 w-1/2 mx-auto">
                <h1 className="text-center font-semibold mb-2 mt-5">Connexion</h1>
                <LoginForm />
            </div>
        </>
    )

}