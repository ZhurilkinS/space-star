import React, { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/api/hooks/hooks";
import { fetchContent } from "../model/contentThunks";
import style from "./HomeAdvantagesCard.module.scss";

export default function HomeAdvantagesCard(): React.JSX.Element {
  const advantages = useAppSelector(
    (state) => state.content.content.advantages
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);
  return (
    <div className={style.container}>
      {advantages.map((advantage) => (
        <div key={advantage.id} className={style.card}>
          <p className={style.title}>{advantage.title}</p>
          <p className={style.mainTitle}>{advantage.title2}</p>
          <p className={style.title}>{advantage.description}</p>
        </div>
      ))}
    </div>
  );
}
