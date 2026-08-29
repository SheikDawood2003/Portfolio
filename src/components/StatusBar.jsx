export default function StatusBar() {
  const year = new Date().getFullYear()
  return (
    <footer className="status-bar">
      <div className="status-left">
        <span className="status-item">
          <span className="status-live-dot" aria-hidden="true" />
          Open to work
        </span>
        <span className="status-item status-item-muted">main</span>
      </div>
      <div className="status-right">
        <span className="status-item status-item-muted">UTF-8</span>
        <span className="status-item status-item-muted">React</span>
        <span className="status-item status-item-muted">© {year}</span>
      </div>
    </footer>
  )
}
