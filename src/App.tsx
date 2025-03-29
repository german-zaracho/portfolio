import './App.css';
import NavItem from './components/NavItem.tsx';

function App() {
  const imgs = import.meta.glob('./assets/imgs/*.{png,jpg,jpeg,gif}', { eager: true }) as Record<string, { default: string }>;

  return (
    <>
      <div className="flex flex-row w-[100%]">
        <header className='w-[40%]'>
          <h1 className='bg-red-gradient'>Germán Zaracho</h1>
          <h2>Full Stack Developer</h2>
          <nav>
            <ul>
              <NavItem label="Abouts" />
              <NavItem label="Projects" />
            </ul>
          </nav>
        </header>
        <main className='flex flex-col w-[60%] m-auto'>
          <section className='p-[30px]'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti corporis repellat, dolore pariatur maiores id aliquam quos molestiae, voluptates iste nesciunt incidunt vitae itaque. Facilis dicta, impedit commodi asperiores dolorem, nostrum officia eius nobis, eos culpa doloribus voluptas ad earum. Dolorem dolor nemo ad molestiae, nesciunt hic impedit! Incidunt, tenetur est! Suscipit nemo expedita mollitia eos perferendis voluptates reiciendis eligendi, animi beatae voluptate eaque unde, alias facilis quos dignissimos, iusto ut corrupti tempora voluptatibus saepe corporis porro odit quis.</p>
          </section>
          <section className='flex flex-col'>
            <h2>Projects</h2>
            <div>
              <ul>
                <li>
                  <div className='flex flex-row m-[10px]'>
                    <img src={imgs['./assets/imgs/inplot-1.png']?.default} alt="Project 1" width="200" height="200"/>
                    <div>
                      <h3>Project 1</h3>
                      <p>Project 1 description</p>
                    </div>
                  </div>
                </li>
                <li>
                <div className='flex flex-row m-[10px]'>
                    <img src={imgs['./assets/imgs/2.png']?.default} alt="Project 2" width="200" height="200"/>
                    <div>
                      <h3>Project 2</h3>
                      <p>Project 2 description</p>
                    </div>
                  </div>
                </li>
                <li></li>
              </ul>
            </div>
          </section>
        </main>
      </div>

    </>
  )
}

export default App
