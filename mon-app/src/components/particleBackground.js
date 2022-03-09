import Particles from "react-tsparticles";
import ParticleConfig from './particlesjs-config.json';
import './particleBackground.css';
const ParticleBackground = () => {
    return (
    <>
        <Particles id="particles" options={ParticleConfig}/>
    </>
    )
};

export default ParticleBackground;