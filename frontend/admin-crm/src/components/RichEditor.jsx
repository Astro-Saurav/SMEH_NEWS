import { useEffect, useRef } from 'react'

export function RichEditor ({ value, onChange }) {
  const textareaRef = useRef(null)

  const adjustHeight = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  useEffect(() => {
    adjustHeight()
  }, [value])

  return (
    <div className="editor-shell">
      <textarea
        ref={textareaRef}
        placeholder="Write news content in HTML format..."
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
          adjustHeight()
        }}
        style={{
          width: '100%',
          minHeight: '220px',
          padding: '1rem',
          borderRadius: '10px',
          border: '1px solid var(--panel-border)',
          background: 'var(--bg-soft)',
          color: 'var(--text)',
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          lineHeight: '1.6',
          resize: 'none',
          outline: 'none',
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
        }}
        onFocus={(e) => {
          e.target.style.borderColor = 'var(--primary)'
          e.target.style.boxShadow = '0 0 0 2px rgba(62, 194, 184, 0.2)'
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'var(--panel-border)'
          e.target.style.boxShadow = 'none'
        }}
      />
    </div>
  )
}
