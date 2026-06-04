type GhostMascotProps = {
  size?: 'sm' | 'md' | 'lg';
  mood?: 'soft' | 'blink';
  className?: string;
};

export default function GhostMascot({
  size = 'md',
  mood = 'soft',
  className = '',
}: GhostMascotProps) {
  return (
    <div className={`ghostMascot ghost-${size} ${className}`.trim()}>
      <div className="ghostGlow" />
      <div className="ghostBody">
        <div className={`ghostFace ${mood === 'blink' ? 'ghostFace-blink' : ''}`}>
          <span className="ghostEye" />
          <span className="ghostEye" />
        </div>
        <div className="ghostMouth" />
        <div className="ghostCheek ghostCheek-left" />
        <div className="ghostCheek ghostCheek-right" />
        <div className="ghostWave ghostWave-1" />
        <div className="ghostWave ghostWave-2" />
        <div className="ghostWave ghostWave-3" />
      </div>
    </div>
  );
}
