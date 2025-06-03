import InputLabel from "../atoms/InputLabel";
import ButtonForm from "../atoms/ButtonForm";

import  { LogIn } from "lucide-react";

import Form from 'next/form';

export default function LoginForm () {

    let icon = <LogIn />;

    return <Form action="">
                <InputLabel />
                <InputLabel />
                <ButtonForm type="submit" classes="bg-(--primary-color) hover:bg-(--primary-color-hover)" lucide={icon} text="Se connecter"/>
            </Form>
}