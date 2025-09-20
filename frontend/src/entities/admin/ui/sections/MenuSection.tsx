import React from "react";

import styles from "./ContentSection.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../shared/api/hooks/hooks";
import { setMenu } from "../../model/adminSlice";
import { updateMenu } from "../../model/adminThunks";
import { fetchMenu } from "../../../menu/model/menuThunks";

export const MenuSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.admin);

  const handleMenuChange = (
    index: number,
    field: string,
    value: string | boolean
  ) => {
    const newMenu = [...data.menu];
    newMenu[index] = { ...newMenu[index], [field]: value };
    dispatch(setMenu(newMenu));
  };

  const addMenuItem = () => {
    const newMenu = [...data.menu, { title: "", url: "#", visible: true }];
    dispatch(setMenu(newMenu));
  };

  const removeMenuItem = (index: number) => {
    const newMenu = data.menu.filter((_, i) => i !== index);
    dispatch(setMenu(newMenu));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    await dispatch(updateMenu({ menu: data.menu }));
    dispatch(fetchMenu());
  };

  return (
    <div>
      <h3 className={styles.sectionTitle}>Управление меню</h3>

      {data.menu.map((item, index) => (
        <div key={index} className={styles.advantageItem}>
          <div className={styles.advantageHeader}>
            <h4 className={styles.advantageTitle}>Пункт меню {index + 1}</h4>
            <button
              className={styles.removeButton}
              onClick={() => removeMenuItem(index)}
            >
              Удалить
            </button>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Название</label>
            <input
              type="text"
              className={styles.input}
              value={item.title}
              onChange={(e) => handleMenuChange(index, "title", e.target.value)}
              placeholder="Введите название пункта"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>URL</label>
            <input
              type="text"
              className={styles.input}
              value={item.url}
              onChange={(e) => handleMenuChange(index, "url", e.target.value)}
              placeholder="Введите URL"
            />
          </div>

          <div className={styles.formGroup}>
            <label>
              <input
                type="checkbox"
                checked={item.visible}
                onChange={(e) =>
                  handleMenuChange(index, "visible", e.target.checked)
                }
              />
              <span className={styles.label}> Видимость</span>
            </label>
          </div>
        </div>
      ))}

      <button className={styles.addButton} onClick={addMenuItem}>
        + Добавить пункт меню
      </button>

      <button
        className={styles.saveButton}
        onClick={handleSave}
        disabled={loading}
      >
        {loading ? "Сохранение..." : "Сохранить меню"}
      </button>
    </div>
  );
};
