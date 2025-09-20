import React, { useEffect, useState } from "react";

import { ContentSection } from "./sections/ContentSection";
import { MenuSection } from "./sections/MenuSection";
import styles from "./AdminPanel.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/api/hooks/hooks";
import { fetchAdminData } from "../model/adminThunks";
import { resetSaved } from "../model/adminSlice";

type Tab = "content" | "menu";

export default function AdminPanel(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const { loading, error, saved } = useAppSelector((state) => state.admin);
  const [activeTab, setActiveTab] = useState<Tab>("content");

  useEffect(() => {
    dispatch(fetchAdminData());
  }, [dispatch]);

  useEffect(() => {
    if (saved) {
      const timer = setTimeout(() => {
        dispatch(resetSaved());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [saved, dispatch]);

  if (loading) {
    return <div className={styles.loading}>Загрузка данных...</div>;
  }

  return (
    <div className={styles.adminPanel}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>SpaceX Admin Panel</h1>
        </div>

        {error && <div className={styles.error}>{error}</div>}
        {saved && (
          <div className={styles.success}>Данные успешно сохранены!</div>
        )}

        <nav className={styles.nav}>
          <button
            className={
              activeTab === "content"
                ? styles.navButtonActive
                : styles.navButton
            }
            onClick={() => setActiveTab("content")}
          >
            Контент
          </button>
          <button
            className={
              activeTab === "menu" ? styles.navButtonActive : styles.navButton
            }
            onClick={() => setActiveTab("menu")}
          >
            Меню
          </button>
        </nav>

        <div className={styles.content}>
          {activeTab === "content" && <ContentSection />}
          {activeTab === "menu" && <MenuSection />}
        </div>
      </div>
    </div>
  );
}
