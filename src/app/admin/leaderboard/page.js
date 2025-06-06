import ListUsersLeaderboard from "@/app/components/organisms/ListUsersLeaderboard";
import { Trophy } from "lucide-react";

export default function Leaderboard() {



    return (
        <>
            <main>
                <div className="flex flex-col items-center m-auto max-w-[28rem] border-(--border-color) border-0 rounded-lg shadow-lg">
                    <p className="text-center font-bold text-lg flex gap-1"> <Trophy /> Leaderboard global</p>



                        <ListUsersLeaderboard />
                    <div className="shadow-black m-3 ">
                    </div>
                </div>
            </main >
        </>
    )
}