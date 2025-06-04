import InputLabel from "../atoms/InputLabel";
import ButtonForm from "../atoms/ButtonForm";

import { useState } from "react";
import  { LogIn } from "lucide-react";
import { useRouter } from 'next/navigation';

import Form from 'next/form';

export default function LoginForm () {

    const router = useRouter();

    let icon = <LogIn />;

    const [dataForm, setDataForm] = useState({
        // username: "",
        // password: ""
    })

    const handleChange = (value, name) => {
        setDataForm(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const saveCurrentUser = (user) => {
        // go en localhost
        console.log(user.currentUser.userId)
        localStorage.setItem('currentUserId', user.currentUser.userId)
        localStorage.setItem('currentUserName', user.currentUser.userName)
    }

    const redirectToDashboard = () => {
        // redirection en fonction
        const username = localStorage.getItem('currentUserName');
        console.log("username is " + username)

        if (username === "admin") {
            console.log(true)
            router.push('/admin/volunteers-management')
        } else {
            console.log(false)
            router.push('/volunteers/dashboard')
        }
    }

    const checkAutentification = async (e) => {
        e.preventDefault();
        console.log(dataForm.username);
        console.log(dataForm.password);

        const body = {
            "username": dataForm.username,
            "passwordToCheck": dataForm.password
        };

        const response = await fetch("http://localhost:5001/volunteers/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        
        const datas = {"status": response.status, currentUser: await response.json()};

        console.log(datas)
        saveCurrentUser(datas);
        redirectToDashboard();
        return datas
    };

    return <Form onSubmit={checkAutentification}>
                <InputLabel onChange={handleChange} name="Username*" dataName="username" placeholder="Votre username" type="text"/>
                <InputLabel onChange={handleChange} name="Mot de passe*" dataName="password" placeholder="Votre mot de passe" type="password"/>
                <ButtonForm type="submit" classes="bg-(--primary-color) hover:bg-(--primary-color-hover)" lucide={icon} text="Se connecter"/>
            </Form>
}