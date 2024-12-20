import ItemsSkills from "../molecules/ItemsSkills";

interface SkillsProps {
    language: string;
}

function Skills({ language }: SkillsProps) {


    return (
        <div className="flex flex-col md:items-center md:pt-0 p-12 font-bold text-white bg-black h-screen">
            <div className="flex content-center">
                <h1 className="md:pt-16 md:text-6xl text-4xl">Habilidades</h1>
            </div>
            <div className="grid justify-between grid-cols-3 md:grid-cols-6 gap-4 mt-8 pt-28"> 
                <ItemsSkills src="src/assets/foto.jpeg" alt="Rafael Sutil"/>
                <div className="flex items-center justify-center rounded-2xl font-bold text-white bg-stone-600 content-cente w-32 h-32">
                    <img className="rounded-xl" width={90} src="src/assets/foto.jpeg" alt="Rafael Sutil"/>
                </div>
                <div className="flex items-center justify-center rounded-2xl font-bold text-white bg-stone-600 content-cente w-32 h-32">
                    <img className="rounded-xl" width={90} src="src/assets/foto.jpeg" alt="Rafael Sutil"/>
                </div>
                <div className="flex items-center justify-center rounded-2xl font-bold text-white bg-stone-600 content-cente w-32 h-32">
                    <img className="rounded-xl" width={90} src="src/assets/foto.jpeg" alt="Rafael Sutil"/>
                </div>
                <div className="flex items-center justify-center rounded-2xl font-bold text-white bg-stone-600 content-cente w-32 h-32">
                    <img className="rounded-xl" width={90} src="src/assets/foto.jpeg" alt="Rafael Sutil"/>
                </div>
            </div>
        </div>
    )
}

export default Skills