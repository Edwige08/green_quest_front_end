'use client'

import { useEffect, useState } from "react"
import UserLeaderboard from "../molecules/UserLeaderboard"

export default function ListUsersLeaderboard() {

    const [users, setUsers] = useState([])

    async function getDonationsByUsers() {
        const response = await fetch('http://localhost:5001/leaderboard')
        const data = await response.json()
        console.log('💾', data)
        setUsers(data.donationByUser)
    }

    useEffect(() => {
        getDonationsByUsers()
    },[])

    console.log(users);

    return (
        <>
                {users.map((user, index) => {
                    return (
                        <UserLeaderboard username={user.username} points={user.total} key={index} />
                    )

                })}

        </>
    )
}


