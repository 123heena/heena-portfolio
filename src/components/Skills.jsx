function Skills(){

const skills=[

"Python",

"SQL",

"Power BI",

"Tableau",

"Machine Learning",

"TensorFlow",

"Pandas",

"Scikit Learn",

"MySQL",

"MongoDB",

"Git",

"Flask"

]

return(

<section id="skills" className="bg-gray-100 py-24 px-8">

<div className="max-w-6xl mx-auto">

<h2 className="text-5xl font-bold">

Skills

</h2>

<div className="grid md:grid-cols-4 gap-5 mt-12">

{

skills.map(skill=>(

<div
key={skill}
className="bg-white rounded-2xl p-6 shadow-lg text-center font-semibold hover:scale-105 duration-300"
>

{skill}

</div>

))

}

</div>

</div>

</section>

)

}

export default Skills