import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: ["#ff00c8", "#00e5ff", "#ffffff"],
          },
          shape: {
            type: ["circle", "triangle", "polygon"],
            polygon: {
              sides: 5
            }
          },
          opacity: {
            value: 0.2,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 2.5,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ff00c8",
            opacity: 0.2,
            width: 1,
            triangles: {
              enable: true,
              color: "#00e5ff",
              opacity: 0.05
            }
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: true,
                force: 60,
                smooth: 10
              }
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.5,
              },
            },
            bubble: {
              distance: 200,
              size: 5,
              duration: 2,
              opacity: 0.8,
              speed: 3
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2
            }
          },
        },
        background: {
          color: {
            value: "#050510"
          },
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        },
        backgroundMask: {
          enable: false
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticleBackground;
