interface TechnologiesTagProps {
    tags: string[];
}

const TechnologiesTag: React.FC<TechnologiesTagProps> = ({ tags }) => {
    return (
        <ul className='flex flex-row gap-4 mt-2 flex-wrap'>
            {tags.map((tag, index) => (
                <li key={index}>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>{tag}</div>
                </li>
            ))}
        </ul>
    );
};

export default TechnologiesTag;