import ProfilesCard from '../molecules/ProfilesCard'

export default function ProfilesList({users}) {
  return (
    <>
      <section className="flex w-90 max-w-[28rem] flex-col items-center justify-center">
        {users.map((user, index) => user.firstname != 'admin' && <ProfilesCard key={index} user={user} />)}
      </section>
    </>
  )
}
