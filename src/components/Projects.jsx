function Projects(){

const projects=[

{

name:"MedAssist",

desc:"AI-powered healthcare diagnosis platform capable of predicting multiple diseases using machine learning.",

tech:"Python • ML • Deep Learning",

emoji:"🏥"

},

{

name:"Fraud Detection",

desc:"Built intelligent models for identifying suspicious financial activities.",

tech:"Analytics • ML • Python",

emoji:"📊"

},

{

name:"Resume Scanner",

desc:"AI powered resume screening system using NLP and keyword matching.",

tech:"NLP • Python",

emoji:"📄"

},

{

name:"Face Recognition",

desc:"Computer vision system for identity verification and recognition.",

tech:"OpenCV • ML",

emoji:"👁️"

}

]

return(

<section
id="projects"
className="py-24 px-8 bg-white"
>

<div className="max-w-6xl mx-auto">

<h2 className="text-5xl font-bold">

Featured Projects

</h2>

<p className="mt-4 text-gray-600 text-lg">

Artificial Intelligence • Analytics • Machine Learning Projects

</p>


<div className="grid md:grid-cols-2 gap-8 mt-14">

{

projects.map(project=>(

<div

key={project.name}

className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white rounded-3xl p-8 shadow-2xl hover:scale-105 hover:-translate-y-2 duration-300"

>

<div className="text-5xl">

{project.emoji}

</div>

<h3 className="text-3xl font-bold mt-5">

{project.name}

</h3>

<p className="mt-5 leading-8">

{project.desc}

</p>

<div className="mt-8">

<span className="bg-white/20 px-5 py-2 rounded-full">

{project.tech}

</span>

</div>

</div>

))

}

</div>

</div>

</section>

)

}

export default Projects