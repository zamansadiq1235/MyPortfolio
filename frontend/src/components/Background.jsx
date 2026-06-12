import './Background.css'

export default function Background() {
  return (
    <div className="bg-container">
      <div className="gradient-orb orb1" />
      <div className="gradient-orb orb2" />
      <div className="gradient-orb orb3" />

      <div className="grid-overlay" />

      <div className="noise-overlay" />
    </div>
  )
}