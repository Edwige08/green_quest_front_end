import ProfilesCard from "../molecules/ProfilesCard";

export default function ProfilesList ({users}) {
    return ( <>
    <section className="flex flex-col w-90 gap-3 items-center justify-center relative ">

        {users.map((user, index) => (
            user.firstname != "admin" && <ProfilesCard key={index} user={user} />
            
        ))}
        </section>
        </>
    )
}