import styles from '@/styles/SpatialProgram.module.css';

const program = [
  {
    name: 'Entrance Gallery',
    area: 5.7,
    functions: 'Retail wall, coffee merch, arrival lounge',
  },
  {
    name: 'Barista Core',
    area: 12.5,
    functions: 'Brew bar, back prep spine, pastry display',
  },
  {
    name: 'Communal Platform',
    area: 17.8,
    functions: 'High table seating, flexible events, tasting evenings',
  },
  {
    name: 'Window & Booth Seating',
    area: 15.3,
    functions: 'Daytime workpoints, evening intimacy, planter backed banquettes',
  },
  {
    name: 'Support & Back of House',
    area: 16.7,
    functions: 'Storage, prep, service corridor, accessible restroom',
  },
];

export default function SpatialProgram() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <p className={styles.tag}>Spatial Programme</p>
        <h2>Balanced zoning keeps circulation clear while celebrating the brew theatre.</h2>
      </header>
      <div className={styles.list}>
        {program.map(item => (
          <article key={item.name}>
            <div>
              <h3>{item.name}</h3>
              <p>{item.functions}</p>
            </div>
            <span>{item.area.toFixed(1)} m²</span>
          </article>
        ))}
      </div>
    </section>
  );
}
