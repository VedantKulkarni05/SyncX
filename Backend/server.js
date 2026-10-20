import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { instrument } from '@socket.io/admin-ui'
import { YSocketIO } from 'y-socket.io/dist/server'

const app = express()
app.use(express.static('public'))
const httpServer = createServer(app)

const roomUsers = new Map()
const ROOM_NAME = 'monaco'

// socket.io connection
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

const emitRoomUsers = room => {
  const users = [...(roomUsers.get(room) || new Set())]
  io.to(room).emit('room-users', users)
}

io.on('connection', socket => {
  socket.on('join-room', username => {
    const name = String(username || '').trim()
    if (!name) return

    socket.data.userName = name

    const members = roomUsers.get(ROOM_NAME) || new Set()
    members.add(name)
    roomUsers.set(ROOM_NAME, members)

    socket.join(ROOM_NAME)
    emitRoomUsers(ROOM_NAME)
  })

  socket.on('leave-room', username => {
    const name = String(username || '').trim()
    const roomMembers = roomUsers.get(ROOM_NAME)

    if (!name || !roomMembers) return

    roomMembers.delete(name)

    if (roomMembers.size === 0) {
      roomUsers.delete(ROOM_NAME)
    } else {
      roomUsers.set(ROOM_NAME, roomMembers)
    }

    emitRoomUsers(ROOM_NAME)
  })

  socket.on('disconnect', () => {
    const name = socket.data.userName
    if (!name) return

    const roomMembers = roomUsers.get(ROOM_NAME)
    if (!roomMembers) return

    roomMembers.delete(name)

    if (roomMembers.size === 0) {
      roomUsers.delete(ROOM_NAME)
    } else {
      roomUsers.set(ROOM_NAME, roomMembers)
    }

    emitRoomUsers(ROOM_NAME)
  })
})

const ysocketio = new YSocketIO(io)
ysocketio.initialize()



app.get('/health', (req, res) => {
  res.status(200).json({
    message: 'all working fine',
    success: true
  })
})

httpServer.listen(3000, () => {
  console.log('Server is running on port 3000')
})

// const ySocketIO = new YSocketIO({
//     io: io,
//     namespace: 'sync',
//     authentication: false,
// })

// ySocketIO.on('connection', (socket) => {
//     console.log('A user connected')
// })
