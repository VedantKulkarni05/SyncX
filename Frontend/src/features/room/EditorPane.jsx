import Editor from '@monaco-editor/react'
import { defineSyncxTheme } from '../../lib/monacoTheme'

// Props: callback invoked when Monaco mounts with the editor instance.
function EditorPane({ onMount }) {
  return (
    <section className="min-h-[60vh] min-w-0 flex-1 overflow-hidden rounded-[var(--radius-card)] border border-border bg-bg">
      <Editor
        height="100%"
        defaultLanguage="javascript"
        defaultValue="// Start collaborating here\n"
        language="javascript"
        theme="syncx-dark"
        beforeMount={defineSyncxTheme}
        onMount={onMount}
        options={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 14,
          lineHeight: 24,
          padding: { top: 18, bottom: 18 },
          minimap: { enabled: false },
          smoothScrolling: true,
          scrollBeyondLastLine: false,
          renderLineHighlight: 'all',
          scrollbar: { verticalScrollbarSize: 8, horizontalScrollbarSize: 8 },
        }}
      />
    </section>
  )
}

export default EditorPane
