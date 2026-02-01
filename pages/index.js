import Head from 'next/head';
import Hero from '@/components/Hero';
import FloorPlan from '@/components/FloorPlan';
import DesignNarrative from '@/components/DesignNarrative';
import SpatialProgram from '@/components/SpatialProgram';
import MaterialPalette from '@/components/MaterialPalette';
import LightingMood from '@/components/LightingMood';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hearthline Café Concept</title>
        <meta name="description" content="Café spatial concept for a 68 m² venue with 3.55 m entrance frontage." />
      </Head>
      <main className={styles.main}>
        <Hero />
        <FloorPlan />
        <DesignNarrative />
        <SpatialProgram />
        <MaterialPalette />
        <LightingMood />
      </main>
    </>
  );
}
