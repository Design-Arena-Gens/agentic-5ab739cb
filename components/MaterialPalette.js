import styles from '@/styles/MaterialPalette.module.css';

const materials = [
  {
    id: 'terracotta-plaster',
    name: 'Terracotta Lime Plaster',
    tone: '#d6a68a',
    details: 'Soft textured walls reflect warm light and provide acoustic absorption.',
  },
  {
    id: 'charred-oak',
    name: 'Charred Oak Joinery',
    tone: '#3b2f2f',
    details: 'Used on the bar fascia and shelving to ground the palette.',
  },
  {
    id: 'brass-mesh',
    name: 'Brass Mesh Screens',
    tone: '#cfa66b',
    details: 'Filters the entrance zone and wraps the lighting feature above the bar.',
  },
  {
    id: 'sage-upholstery',
    name: 'Sage Bouclé Upholstery',
    tone: '#a6b59d',
    details: 'Applied to window niches and booths for tactile comfort.',
  },
  {
    id: 'concrete-floor',
    name: 'Polished Concrete Floor',
    tone: '#bfb6ad',
    details: 'Speckled aggregates reference the roasting process and provide durability.',
  },
];

export default function MaterialPalette() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <p className={styles.tag}>Material Palette</p>
        <h2>Earthy base notes elevate the brewed narratives.</h2>
        <p>
          The palette layers matte, porous surfaces with refined metallic accents. Lighting washers and integrated planters soften the
          concrete volume, encouraging long stays.
        </p>
      </header>
      <div className={styles.rows}>
        {materials.map(material => (
          <article key={material.id} className={styles.card}>
            <span className={styles.swatch} style={{ background: material.tone }} />
            <div>
              <h3>{material.name}</h3>
              <p>{material.details}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
