import React from "react";

import styles from "./ContentSection.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../shared/api/hooks/hooks";
import { setAdvantages, setHero } from "../../model/adminSlice";
import { updateContent } from "../../model/adminThunks";
import { fetchContent } from "../../../content/model/contentThunks";

export const ContentSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.admin);

  const handleHeroChange = (field: string, value: string) => {
    dispatch(setHero({ ...data.content.hero, [field]: value }));
  };

  const handleAdvantageChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const newAdvantages = [...data.content.advantages];
    newAdvantages[index] = { ...newAdvantages[index], [field]: value };
    dispatch(setAdvantages(newAdvantages));
  };

  const addAdvantage = () => {
    const newAdvantages = [
      ...data.content.advantages,
      { title: "", title2: "", description: "", active: true },
    ];
    dispatch(setAdvantages(newAdvantages));
  };

  const removeAdvantage = (index: number) => {
    const newAdvantages = data.content.advantages.filter((_, i) => i !== index);
    dispatch(setAdvantages(newAdvantages));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(updateContent(data.content));
    dispatch(fetchContent());
  };

  return (
    <form onSubmit={handleSave}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Главный блок</h3>

        <div className={styles.formGroup}>
          <label className={styles.label}>Большой заголовок</label>
          <input
            type="text"
            className={styles.input}
            value={data.content.hero.title}
            onChange={(e) => handleHeroChange("title", e.target.value)}
            placeholder="Введите заголовок"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Заголовок</label>
          <input
            type="text"
            className={styles.input}
            value={data.content.hero.title2}
            onChange={(e) => handleHeroChange("title2", e.target.value)}
            placeholder="Введите заголовок"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Плейсхолдер кнопки</label>
          <input
            type="text"
            className={styles.input}
            value={data.content.hero.placeholder}
            onChange={(e) => handleHeroChange("placeholder", e.target.value)}
            placeholder="Введите плейсхолдер"
          />
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Преимущества</h3>

        {data.content.advantages.map((advantage, index) => (
          <div key={index} className={styles.advantageItem}>
            <div className={styles.advantageHeader}>
              <h4 className={styles.advantageTitle}>
                Преимущество {index + 1}
              </h4>
              <button
                className={styles.removeButton}
                onClick={() => removeAdvantage(index)}
              >
                Удалить
              </button>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Заголовок</label>
              <input
                type="text"
                className={styles.input}
                value={advantage.title}
                onChange={(e) =>
                  handleAdvantageChange(index, "title", e.target.value)
                }
                placeholder="Введите заголовок преимущества"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Большой заголовок</label>
              <input
                type="text"
                className={styles.input}
                value={advantage.title2}
                onChange={(e) =>
                  handleAdvantageChange(index, "title2", e.target.value)
                }
                placeholder="Введите заголовок преимущества"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Описание</label>
              <textarea
                className={styles.textarea}
                value={advantage.description}
                onChange={(e) =>
                  handleAdvantageChange(index, "description", e.target.value)
                }
                placeholder="Введите описание преимущества"
              />
            </div>
          </div>
        ))}

        <button className={styles.addButton} onClick={addAdvantage}>
          + Добавить преимущество
        </button>
      </div>

      <button type="submit" className={styles.saveButton} disabled={loading}>
        {loading ? "Сохранение..." : "Сохранить изменения"}
      </button>
    </form>
  );
};
