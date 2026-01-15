import "./../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>Sobre la Pokédex App</h1>
      <p className="about-description">
        Esta aplicación es una Pokédex simple creada con React y TypeScript.
        Te permite buscar Pokémon y ver sus detalles. Es un proyecto para
        demostrar habilidades en el desarrollo web con tecnologías modernas.
      </p>
      <div className="about-features">
        <h2>Características</h2>
        <ul>
          <li>Búsqueda de Pokémon en tiempo real</li>
          <li>Vista detallada de cada Pokémon</li>
          <li>Diseño responsivo</li>
          <li>Información sobre sus Habilidades, Stats y Tipos</li>
        </ul>
      </div>
      <div className="about-tech">
        <h2>Tecnologías Utilizadas</h2>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>React Router</li>
          <li>React Bootstrap</li>
          <li>Vite</li>
          <li>CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
