import "../styles/home.css";
import Card from "../components/card.jsx";

export default function Home() {
  return (
    <div className="home-container">
      <div className="title">
        <p className="titre1">
          Devenir développeur web et réaliser ses projets professionnels
        </p>
        <p className="titre2">
          Des formations diplômantes faites par des experts plus que passionnés
          <br />
          Pour vous mener au succès professionnel.
        </p>
      </div>

      <div className="flex">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
