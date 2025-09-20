import HomeCard from "../../entities/content/ui/HomeCard";
import HomeAdvantagesCard from "../../entities/content/ui/HomeAdvantagesCard";
import style from "./HomePage.module.scss";

export default function HomePage(): React.JSX.Element {
  return (
    <div className={style.homeContainer}>
      <div className={style.container}>
        <HomeCard />
        <HomeAdvantagesCard />
      </div>
    </div>
  );
}
