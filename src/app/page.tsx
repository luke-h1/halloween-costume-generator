import nameService from "@frontend/services/nameService";
import styles from "./page.module.css";
import CostumeGenerator from "@frontend/components/CostumeGenerator";

export default async function Home() {
  return (
    <main className={styles.main}>
      <CostumeGenerator />
    </main>
  );
}
