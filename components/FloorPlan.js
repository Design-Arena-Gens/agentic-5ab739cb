import styles from '@/styles/FloorPlan.module.css';

const plan = {
  width: 8.5,
  depth: 8,
  entranceWidth: 3.55,
  zones: [
    {
      id: 'entrance-lounge',
      label: 'Entrance Lounge',
      description: 'Soft seating for waiting guests and grab-and-go counter focus.',
      width: 3.55,
      depth: 1.6,
      x: (8.5 - 3.55) / 2,
      y: 0,
      tone: 'accent',
    },
    {
      id: 'barista-bar',
      label: 'Barista Bar',
      description: 'Central brew bar with back preparation spine and pastry display.',
      width: 4,
      depth: 3.4,
      x: 2.25,
      y: 1.6,
      tone: 'coffee',
    },
    {
      id: 'communal-table',
      label: 'Communal Table',
      description: 'Library-height sharing table with integrated power and planters.',
      width: 3.4,
      depth: 3.2,
      x: 0.2,
      y: 1.6,
      tone: 'light',
    },
    {
      id: 'window-niche',
      label: 'Window Niches',
      description: 'Banquette pockets along the facade with acoustic arches.',
      width: 3.2,
      depth: 3.8,
      x: 5.1,
      y: 1.6,
      tone: 'medium',
    },
    {
      id: 'quiet-booths',
      label: 'Quiet Booths',
      description: 'Semi-private booths with soft lighting for longer stays.',
      width: 3.2,
      depth: 1.9,
      x: 5.1,
      y: 5.4,
      tone: 'coffee',
    },
    {
      id: 'roastery-corner',
      label: 'Roastery Corner',
      description: 'Small batch roaster showcased behind glass with scent extraction.',
      width: 1.9,
      depth: 1.9,
      x: 3.6,
      y: 5.4,
      tone: 'accent',
    },
    {
      id: 'back-of-house',
      label: 'Back of House',
      description: 'Storage, dishwash, staff galley and accessible WC.',
      width: 3.7,
      depth: 2.6,
      x: 0.2,
      y: 5.4,
      tone: 'dark',
    },
  ],
};

function ratio(value, total) {
  return (value / total) * 100;
}

export default function FloorPlan() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.meta}>
        <div>
          <h2>Plan Overview</h2>
          <p>Single-floor café footprint totaling 68 m² with a 3.55 m porous entrance frontage.</p>
        </div>
        <div className={styles.metaGrid}>
          <div>
            <span className={styles.metaLabel}>Total Area</span>
            <span className={styles.metaValue}>68 m²</span>
          </div>
          <div>
            <span className={styles.metaLabel}>Front Width</span>
            <span className={styles.metaValue}>3.55 m clear</span>
          </div>
          <div>
            <span className={styles.metaLabel}>Depth</span>
            <span className={styles.metaValue}>{plan.depth.toFixed(1)} m</span>
          </div>
          <div>
            <span className={styles.metaLabel}>Occupancy</span>
            <span className={styles.metaValue}>36 seats</span>
          </div>
        </div>
      </div>
      <div className={styles.canvas}>
        <div className={styles.aspectKeeper}>
          <div className={styles.plan}>
            <div className={styles.grid}>
              {[...Array(9)].map((_, idx) => (
                <span key={`v-${idx}`} className={styles.gridLine} style={{ left: `${(idx / 8) * 100}%` }} />
              ))}
              {[...Array(9)].map((_, idx) => (
                <span key={`h-${idx}`} className={styles.gridLine} style={{ top: `${(idx / 8) * 100}%` }} />
              ))}
            </div>
            {plan.zones.map(zone => (
              <div
                key={zone.id}
                className={`${styles.zone} ${styles[zone.tone]}`}
                style={{
                  width: `${ratio(zone.width, plan.width)}%`,
                  height: `${ratio(zone.depth, plan.depth)}%`,
                  left: `${ratio(zone.x, plan.width)}%`,
                  top: `${ratio(zone.y, plan.depth)}%`,
                }}
              >
                <div className={styles.zoneLabel}>
                  <span>{zone.label}</span>
                </div>
              </div>
            ))}
            <div
              className={styles.entrance}
              style={{
                width: `${ratio(plan.entranceWidth, plan.width)}%`,
              }}
            >
              Entrance
            </div>
          </div>
        </div>
      </div>
      <ul className={styles.legend}>
        {plan.zones.map(zone => (
          <li key={`${zone.id}-legend`}>
            <span className={`${styles.swatch} ${styles[zone.tone]}`} />
            <div>
              <h3>{zone.label}</h3>
              <p>{zone.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
