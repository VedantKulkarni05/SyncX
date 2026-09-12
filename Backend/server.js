import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { instrument } from '@socket.io/admin-ui'
import {  YSocketIO } from 'y-socket.io/dist/server'

const app = express()
const httpServer = createServer(app)

// socket.io connection
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
})


const ysocketio = new YSocketIO(io)
ysocketio.initialize()

// health check route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'all working fine',
        success: true,
    })
})


app.get('/health', (req, res) => {
    res.status(200).json({
        message: 'all working fine',
        success: true,
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