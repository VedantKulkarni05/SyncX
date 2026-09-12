import React, { useState } from 'react'
import './app/App.css'
import { Editor } from '@monaco-editor/react'

function App() {
  const [code, setCode] = useState('// Start coding...')

  return (
    <main className="h-screen w-full bg-gray-900 flex gap-4 p-4">

      {/* Online Users */}
      <aside className="h-full w-1/4 bg-gray-800 rounded-lg">
      </aside>

      {/* Monaco Code Editor */}
      <section className="h-full w-3/4 bg-gray-800 rounded-lg">
        <Editor
          height="100%"
          language="javascript"
          theme="vs-dark"
          value={code}
          onChange={setCode}
        />
      </section>

    </main>
  )
}

export default App