import styles from '@/styles/DesignNarrative.module.css';

const pillars = [
  {
    title: 'Slow Roast Ritual',
    copy:
      'A central brew bar anchors the room with a herringbone oak platform and suspended brass rack for pour-over theatrics.',
  },
  {
    title: 'Layered Warmth',
    copy:
      'Plaster-toned walls, terracotta acoustic ceilings, and ribbed glass screens diffuse light while keeping sightlines open.',
  },
  {
    title: 'Flexible Dwelling',
    copy:
      'Varied seating tiers—from window perches to deep booths—support laptop work, quick espresso pauses, and evening tastings.',
  },
];

export default function DesignNarrative() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <p className={styles.tag}>Experience Narrative</p>
        <h2>Warm layers, crafted rituals, and a soft threshold into the neighbourhood.</h2>
        <p>
          The concept celebrates the transition from energetic streetscape to a calm, grounded interior. A percolating light well
          draws guests from the 3.55 m entrance into a spacious communal core before peeling into quieter nooks.
        </p>
      </header>
      <div className={styles.grid}>
        {pillars.map(pillar => (
          <article key={pillar.title}>
            <h3>{pillar.title}</h3>
            <p>{pillar.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
