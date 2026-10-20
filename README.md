# SyncX

SyncX is a side project focused on building a real-time collaborative code editor. The goal is to learn Docker, AWS ECS, WebSockets, Redis, and scalable system design while building and shipping a working product.

## What I've Learned

- **Docker**
  - Port mapping
  - Multi-stage builds
  - Building Docker images for a full-stack application
  - Serving the built frontend through the backend container
  - AWS ECS and ECR container deployment

## Tech stack

- **Frontend:** React, Vite, Tailwind CSS, Monaco Editor
- **Backend:** Node.js, Express, Socket.IO, Yjs (`y-socket.io`)
- **Infrastructure :** Docker,  AWS ECS and ECR

## Usage

Requires Node.js 22+.

**Backend** (<http://localhost:3000>)

```bash
cd Backend
npm install
npm run dev
```

**Frontend** (<http://localhost:5173>)

```bash
cd Frontend
npm install
npm run dev
```
