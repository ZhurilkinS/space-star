import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/api/hooks/hooks";
import { fetchContent } from "../model/contentThunks";
import style from "./HomeCard.module.scss";

export default function HomeCard(): React.JSX.Element {
  const hero = useAppSelector((state) => state.content.content.hero);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);
  return (
    <div className={style.container}>
      <h1 className={style.big}>{hero.title}</h1>
      <p className={style.little}>{hero.title2}</p>
      <button className={style.button}>
        {hero.placeholder}
        <div className={style.bottomLeft}></div>
        <div className={style.bottomRight}></div>
      </button>
    </div>
  );
}
