export function defineSyncxTheme(monaco) {
  monaco.editor.defineTheme('syncx-dark', {
    base: 'vs-dark',
    inherit: false,
    semanticHighlighting: true,
    colors: {
      'editor.background': '#20201F',
      'editor.foreground': '#F2EDE8',
      'editorLineNumber.foreground': '#686762',
      'editorLineNumber.activeForeground': '#EE6E4D',
      'editor.lineHighlightBackground': '#2A2A28',
      'editor.selectionBackground': '#7B4032',
      'editor.inactiveSelectionBackground': '#56352D',
      'editorCursor.foreground': '#EE6E4D',
      'editorIndentGuide.background': '#2A2A28',
      'editorIndentGuide.activeBackground': '#3D3D3A',
      'editorWhitespace.foreground': '#3D3D3A',
      'editorOverviewRuler.border': '#20201F',
      'scrollbarSlider.background': '#3D3D3A',
      'scrollbarSlider.hoverBackground': '#686762',
      'scrollbarSlider.activeBackground': '#EE6E4D',
    },
    rules: [
      { token: 'comment', foreground: '686762', fontStyle: 'italic' },
      { token: 'keyword', foreground: 'EE6E4D' },
      { token: 'string', foreground: 'D8B47A' },
      { token: 'number', foreground: 'C7A0D9' },
      { token: 'type', foreground: 'C9B8A8' },
      { token: 'function', foreground: 'E5A58C' },
      { token: 'variable', foreground: 'F2EDE8' },
      { token: 'operator', foreground: 'C9B8A8' },
    ],
  })
}
