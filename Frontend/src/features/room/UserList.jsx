import UserRow from './UserRow'

// Props: collaborator names and the current user's name.
function UserList({ users, currentUser }) {
  return (
    <ul className="space-y-1.5" aria-label="Room collaborators">
      {users.map((name) => (
        <UserRow key={name} name={name} isCurrentUser={name === currentUser} />
      ))}
    </ul>
  )
}

export default UserList
