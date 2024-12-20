import React from 'react';

interface ItemsSkillProps {
    src: string;
    alt: string;
}

const ItemsSkills: React.FC<ItemsSkillProps> = ({ src, alt }) => {
    return (
        <div className="flex md:col-start-2 items-center justify-center rounded-2xl font-bold text-white bg-stone-600 content-cente w-32 h-32">
            <img className="rounded-xl" width={90} src={src} alt={alt}/>
        </div>
    )
}

export default ItemsSkills
  
    