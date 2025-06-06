"use client"
import ProfilesList from "@/app/components/organisms/ProfilesList";
import { useDebugValue, useEffect, useState } from "react";

export default function Management () {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const response = await fetch("http://localhost:5001/volunteers")
        const data = await response.json()
        setUsers(data)
    }

    useEffect (() => {
        fetchUsers()
    }, [])

    return (
        <div className="flex flex-col items-center">

        <ProfilesList users={users} />
        </div>
    );
}