import TechnologiesTag from "./TechnologiesTag";

interface ProyectProps {
    title: string;
    description: string;
    img: string;
    tags: string[];
}

const Proyect: React.FC<ProyectProps> = ({ title, description, img, tags }) => {
    const imgs = import.meta.glob('../assets/imgs/*.{png,jpg,jpeg,gif}', { eager: true }) as Record<string, { default: string }>;
    return (
        <li className='group-hover:opacity-50 hover:opacity-100 transition-opacity'>
            <div className="group flex flex-row m-[10px]  leading-5 font-medium text-xs text-slate-400 hover:bg-[rgba(30,41,59,0.5)] rounded-[0.375rem] hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]">
                <img className='mt-5 ml-5 rounded-[5px] h-[80px] w-[240px] border-2 border-slate-200/10 transition group-hover:border-slate-200/30' src={imgs[img]?.default} alt="Project" />
                <div className='p-5'>
                    <h3 className='text-[white] group-hover:text-[rgb(94,234,212,1)] text-left'>{title}</h3>
                    <p className='text-left'>{description}</p>
                    <TechnologiesTag tags={tags} />
                </div>
            </div>
        </li>
    );
};

export default Proyect;