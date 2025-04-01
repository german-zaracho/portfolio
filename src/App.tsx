import './App.css';
import { useEffect } from 'react';
import NavItem from './components/NavItem.tsx';
import TechnologiesTag from './components/TechnologiesTag.tsx';

function App() {
  const imgs = import.meta.glob('./assets/imgs/*.{png,jpg,jpeg,gif}', { eager: true }) as Record<string, { default: string }>;

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
              <ul>
                <li>
                  <div className="group flex flex-row m-[10px]  leading-5 font-medium text-xs text-slate-400 hover:bg-[rgba(30,41,59,0.5)] rounded-[0.375rem] hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]">
                    <img className='mt-5 ml-5 rounded-[5px] h-[80px] w-[240px] border-2 border-slate-200/10 transition group-hover:border-slate-200/30' src={imgs['./assets/imgs/inplot-1.png']?.default} alt="Project 1" />
                    <div className='p-5'>
                      <h3 className='text-[white] group-hover:text-[rgb(94,234,212,1)] text-left'>Project 1</h3>
                      <p className='text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae saepe sunt magnam consectetur accusantium dolor minima ipsa sapiente eveniet minus non, necessitatibus quo voluptatem hic sed eaque asperiores rerum. Hic.</p>
                      <TechnologiesTag tags={["PHP", "Firebase", "Tailwind"]} />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

