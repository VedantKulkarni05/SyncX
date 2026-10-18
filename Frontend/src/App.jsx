import { useEffect, useRef, useState } from 'react'
import * as Y from 'yjs'
import { MonacoBinding } from 'y-monaco'
import { SocketIOProvider } from 'y-socket.io'
import { io } from 'socket.io-client'
import JoinScreen from './features/join/JoinScreen'
import RoomLayout from './features/room/RoomLayout'

const ydoc = new Y.Doc()
const yText = ydoc.getText('monaco')

const getSavedName = () => {
  const params = new URLSearchParams(window.location.search)
  return params.get('name') || ''
}

function App() {
  const [inputName, setInputName] = useState(() => getSavedName())
  const [userName, setUserName] = useState(() => getSavedName())
  const [joinedUsers, setJoinedUsers] = useState([])
  const editorRef = useRef(null)
  const socketRef = useRef(null)
  const userNameRef = useRef('')

  const syncUserToUrl = (name) => {
    const url = new URL(window.location.href)
    if (name) url.searchParams.set('name', name)
    else url.searchParams.delete('name')
    window.history.pushState({}, '', url)
  }

  useEffect(() => {
    userNameRef.current = userName
  }, [userName])

  useEffect(() => {
    const socket = io('http://localhost:3000', { transports: ['websocket'], reconnection: true })
    socketRef.current = socket
    socket.on('connect', () => {
      if (userNameRef.current) socket.emit('join-room', userNameRef.current)
    })
    socket.on('room-users', (users) => {
      setJoinedUsers(Array.isArray(users) ? users : [])
    })
    return () => socket.disconnect()
  }, [])

  const handleMount = (editor) => {
    editorRef.current = editor
    const provider = new SocketIOProvider('http://localhost:3000', 'monaco', ydoc, { autoConnect: true })
    const monacoBinding = new MonacoBinding(
      yText,
      editorRef.current.getModel(),
      new Set([editorRef.current]),
      provider.awareness,
    )
    editorRef.current.onDidDispose(() => monacoBinding.destroy())
  }

  const handleJoin = () => {
    const trimmed = inputName.trim()
    if (!trimmed) return
    setUserName(trimmed)
    setInputName(trimmed)
    setJoinedUsers((prev) => (prev.includes(trimmed) ? prev : [...prev, trimmed]))
    syncUserToUrl(trimmed)
    if (socketRef.current?.connected) socketRef.current.emit('join-room', trimmed)
  }

  const handleLeave = () => {
    if (!userName) return
    socketRef.current?.emit('leave-room', userName)
    setJoinedUsers((prev) => prev.filter((name) => name !== userName))
    setUserName('')
    setInputName('')
    syncUserToUrl('')
  }

  return userName ? (
    <RoomLayout users={joinedUsers} currentUser={userName} onLeave={handleLeave} onEditorMount={handleMount} />
  ) : (
    <JoinScreen inputName={inputName} onNameChange={setInputName} onJoin={handleJoin} />
  )
}

export default App
