import React from "react"

interface AboutProps {
        language: string
}

const About: React.FC<AboutProps> = ({ language }) => {

    let Welcome = ['Bem-vindo,']
    let AboutText = ["Sou o Rafael e estou sempre estudando novas tecnologias e mexendo com várias ferramentas. Além da programação, amo ler e jogar. Ainda estou me encontrando na área da programação."]

    if (language === 'EN') {
        Welcome = ['Welcome,']
        AboutText = ["My name is Rafael and I am always studying new technologies and working with different tools. In addition to programming, I love reading and playing games. I'm still establishing myself in the field of programming."]
    }

    return (
        <div className="flex md:items-center lg:items-start lg:pt-24 lg:space-x-12 lg:justify-center lg:flex-row pt-12 md:pt-0 flex-col md:gap-10 lg:gap-24 bg-stone-900 md:h-[740px] lg:h-screen">
            <div className="md:pl-12 lg:pt-32 md:pt-24 p-8 md:p-0 text-white max-w-xl md:max-w-2xl text-justify lg:w-2/4 w-full space-y-8">
                <h1 className="md:text-6xl text-4xl font-bold">{Welcome}</h1> 
                <h1 className="md:text-2xl text-lg">{AboutText}</h1>
            </div>
            <div className="flex lg:pr-0 lg:pt-32 lg:pl-0 p-12 md:p-0 content-center text-white space-y-8 justify-center">
                <img className="md:w-72 sm:w-64 w-52 rounded-xl mx-auto" width={200} src="src/assets/foto.jpeg" alt="Rafael Sutil" />
            </div>
        </div>
    )
}

export default About