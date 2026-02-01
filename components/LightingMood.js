import styles from '@/styles/LightingMood.module.css';

const layers = [
  {
    title: 'Threshold Glow',
    description:
      'Linear LED concealed within the entrance arch highlights the 3.55 m opening and creates an evening beacon.',
  },
  {
    title: 'Bar Halo',
    description:
      'Circular brass halo with dimmable pendants focuses on the brew bar choreography without glare.',
  },
  {
    title: 'Ambient Washers',
    description:
      'Wall washers along the banquettes highlight textures and integrate with acoustic baffling.',
  },
  {
    title: 'Task Accents',
    description:
      'Adjustable micro-spots nested in planter rails provide reading light for booths and niches.',
  },
];

export default function LightingMood() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.tag}>Lighting Strategy</p>
        <h2>Layered luminance guides guests from arrival to lingering.</h2>
      </div>
      <div className={styles.grid}>
        {layers.map(layer => (
          <article key={layer.title}>
            <h3>{layer.title}</h3>
            <p>{layer.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
