import styles from '@/styles/Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.badge}>Urban Café Concept</div>
      <h1>Neighborhood café woven with warm material layers and deliberate flow.</h1>
      <p>
        A holistic spatial narrative for a 68 m² venue with a 3.55 m street frontage, translating the provided sketch into a
        buildable concept plan, spatial programme, and sensory palette.
      </p>
    </header>
  );
}
