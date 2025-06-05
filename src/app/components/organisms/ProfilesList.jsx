import ProfilesCard from "../molecules/ProfilesCard";

export default function ProfilesList ({users}) {
    return ( <>
    <section className="flex flex-col w-90 items-center justify-center">

        {users.map((user, index) => (
            <ProfilesCard key={index} user={user} />
            
        ))}
        </section>
        </>
    )
}