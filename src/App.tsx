import './App.css';
import { useEffect } from 'react';
import NavItem from './components/NavItem.tsx';
import Project from './components/Project.tsx';

function App() {

  // Añadir la lógica para el hover del mouse de forma más eficiente
  const handleMouseMove = (e: MouseEvent) => {
    const spotlight = document.getElementById("spotlight");

    if (!spotlight) return;

    const { clientX: x, clientY: y } = e;

    // Actualiza la posición del gradiente
    spotlight.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
  };

  // Agregar y eliminar el eventListener al montar/desmontar el componente para evitar fugas de memoria
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="flex flex-row w-[100%] mt-[70px]">
        {/* Contenedor absoluto para el gradiente de fondo */}
        <div id="spotlight-container" className="absolute w-full h-screen overflow-hidden pointer-events-none">
          {/* Spotlight con el gradiente, pero con pointer-events activados */}
          <div
            id="spotlight"
            className="fixed inset-0 z-30"
          ></div>
        </div>
        <header className="w-[40%] text-left">
          <h1 className="bg-red-gradient">Germán Zaracho</h1>
          <h2>Full Stack Developer</h2>
          <nav>
            <ul>
              <NavItem label="Abouts" />
              <NavItem label="Projects" />
            </ul>
          </nav>
        </header>
        <main className="flex flex-col w-[60%] m-auto">
          <section className="p-[30px]">
            <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ex ullam neque repudiandae, ipsa quibusdam! Perspiciatis veniam quia quam consectetur, maiores beatae expedita corporis. Delectus voluptatem, animi omnis dolor culpa commodi cupiditate facilis placeat suscipit aspernatur, ad provident consequatur obcaecati ex repudiandae nesciunt veniam quis? Nemo eligendi officia magni sequi.</p>
            {/* <div>
              <pre>
                {`<div>
                        <p>Esto es un párrafo</p>
                        <p>Esto es un párrafo</p>
  </div>`
                }
              </pre>
            </div> */}
          </section>
          <section className="flex flex-col">
            <div>
              <ul className='group'>
                <Project
                  title='InPlot'
                  description='Web app for discovering and sharing opinions on movies and series. Create and publish reviews, engage with others through comments, and personalize your profile. Explore other users’ reviews and track your own contributions. Administrators have tools to manage content, ensuring a well-organized and engaging community.'
                  img='../assets/imgs/inplot-1.png'
                  tags={["PHP", "Firebase", "Tailwind"]}
                  githubLink='http://www.github.com'
                  webLink='http://www.github.com'
                />
                <Project
                  title='InPlot'
                  description='Web app for discovering and sharing opinions on movies and series. Create and publish reviews, engage with others through comments, and personalize your profile. Explore other users’ reviews and track your own contributions. Administrators have tools to manage content, ensuring a well-organized and engaging community.'
                  img='../assets/imgs/inplot-1.png'
                  tags={["PHP", "Firebase", "Tailwind"]}
                  githubLink='http://www.github.com'
                  webLink='http://www.github.com'
                />
                <Project
                  title='InPlot'
                  description='Web app for discovering and sharing opinions on movies and series. Create and publish reviews, engage with others through comments, and personalize your profile. Explore other users’ reviews and track your own contributions. Administrators have tools to manage content, ensuring a well-organized and engaging community.'
                  img='../assets/imgs/inplot-1.png'
                  tags={["PHP", "Firebase", "Tailwind"]}
                  githubLink='http://www.github.com'
                  webLink='http://www.github.com'
                />
              </ul>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

