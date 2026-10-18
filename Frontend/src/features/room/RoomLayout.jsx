import Sidebar from './Sidebar'
import EditorPane from './EditorPane'

// Props: collaborator names, current user name, leave callback, and editor mount callback.
function RoomLayout({ users, currentUser, onLeave, onEditorMount }) {
  return (
    <main className="flex min-h-screen flex-col gap-4 bg-bg p-4 sm:p-5 lg:flex-row">
      <Sidebar users={users} currentUser={currentUser} onLeave={onLeave} />
      <EditorPane onMount={onEditorMount} />
    </main>
  )
}

export default RoomLayout
