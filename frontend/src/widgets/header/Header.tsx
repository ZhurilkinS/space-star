import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/api/hooks/hooks";
import { fetchMenu } from "../../entities/menu/model/menuThunks";
import styles from "./Header.module.css";

export default function Header() {
  const menuItems = useAppSelector((state) => state.menu.menu);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/spacex_logo_png_kopiya.png" alt="logo" />
          <span className={`${styles.corner} ${styles.bottomLeft}`}></span>
          <span className={`${styles.corner} ${styles.bottomRight}`}></span>
        </div>
        <nav className={styles.nav}>
          {menuItems.map((item) => (
            <a key={item.id} href={item.url} className={styles.navItem}>
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
