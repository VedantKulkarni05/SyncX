import Button from '../../components/ui/Button'
import SidebarHeader from './SidebarHeader'
import UserList from './UserList'

// Props: collaborator names, current user name, and leave-room callback.
function Sidebar({ users, currentUser, onLeave }) {
  return (
    <aside className="flex w-full shrink-0 flex-col rounded-[var(--radius-card)] border border-border bg-surface p-5 lg:w-[280px]">
      <SidebarHeader count={users.length} />
      <Button type="button" variant="danger" onClick={onLeave} className="mt-5 w-full">
        Leave room
      </Button>
      <div className="mt-6">
        <UserList users={users} currentUser={currentUser} />
      </div>
    </aside>
  )
}

export default Sidebar
