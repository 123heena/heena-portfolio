import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import med1 from "../assets/med1.jpeg"
import med2 from "../assets/med2.jpeg"
import med3 from "../assets/med3.jpeg"
import med4 from "../assets/med4.jpeg"

import fraud from "../assets/fraudcover.png"

import fraud1 from "../assets/fraud1.png"
import fraud2 from "../assets/fraud2.png"
import fraud3 from "../assets/fraud3.png"
import fraud4 from "../assets/fraud4.png"
import fraud5 from "../assets/fraud5.png"

import face from "../assets/face.png"

import resume1 from "../assets/resume1.png"
import resume2 from "../assets/resume2.png"
import resume3 from "../assets/resume3.png"

function Projects(){

const [selected,setSelected]=useState(null)

const projects=[

{

name:"MedAssist",

image:med1,

gallery:[med1,med2,med3,med4],

short:"Healthcare AI Platform",

desc:
"AI healthcare diagnosis system capable of predicting multiple diseases using Machine Learning and Deep Learning models.",

tech:
"Python • ML • Deep Learning • Flask",

github:"#"

},

{

name:"Fraud Detection",

image:fraud,

gallery:[fraud1,fraud2,fraud3,fraud4,fraud5],

short:"Financial Fraud Detection",

desc:
"Built fraud detection models using Random Forest and XGBoost for detecting suspicious financial transactions.",

tech:
"Python • Random Forest • XGBoost",

github:"https://github.com/123heena/Fraud-detection"

},

{

name:"Resume Scanner",

image:resume1,

gallery:[resume1,resume2,resume3],

short:"AI Resume Screening",

desc:
"NLP based resume screening system for resume ranking, candidate filtering and matching resumes with job descriptions.",

tech:
"Python • NLP • TF-IDF • SpaCy",

github:"https://github.com/123heena/AI-Powered-Resume-Scanner"

},

{

name:"Face Detection",

image:face,

gallery:[face],

short:"Computer Vision",

desc:
"Real time face detection and image capture using OpenCV webcam integration.",

tech:
"OpenCV • Computer Vision",

github:"https://github.com/123heena/Face-Recognition-app"

}

]

return(

<section
id="projects"
className="py-24 px-8 bg-gray-100"
>

<div className="max-w-7xl mx-auto">

<motion.h2

initial={{opacity:0,y:-40}}

whileInView={{opacity:1,y:0}}

transition={{duration:.8}}

className="text-5xl font-bold"

>

Featured Projects

</motion.h2>

<p className="mt-4 text-gray-600">

AI • Machine Learning • Data Analytics Projects

</p>


<div className="grid md:grid-cols-2 gap-10 mt-14">

{

projects.map((project,index)=>(

<motion.div

key={project.name}

initial={{opacity:0,y:60}}

whileInView={{opacity:1,y:0}}

transition={{delay:index*.1}}

whileHover={{

scale:1.03,

y:-8

}}

className="bg-white rounded-3xl overflow-hidden shadow-xl"

>

<img

src={project.image}

className="w-full h-64 object-cover"

/>

<div className="p-8">

<h3 className="text-3xl font-bold">

{project.name}

</h3>

<p className="mt-2 text-gray-600">

{project.short}

</p>

<button

onClick={()=>setSelected(project)}

className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-full"

>

View Details

</button>

</div>

</motion.div>

))

}

</div>


<AnimatePresence>

{

selected && (

<motion.div

initial={{opacity:0}}

animate={{opacity:1}}

exit={{opacity:0}}

className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-6"

>

<motion.div

initial={{scale:.8}}

animate={{scale:1}}

exit={{scale:.8}}

className="bg-white rounded-3xl p-8 max-w-6xl w-full relative max-h-[90vh] overflow-y-auto"

>

<button

onClick={()=>setSelected(null)}

className="absolute right-6 top-4 text-4xl"

>

×

</button>


<h2 className="text-4xl font-bold">

{selected.name}

</h2>

<p className="mt-5">

{selected.desc}

</p>

<p className="mt-5 font-semibold">

Tech Stack:

</p>

<p>

{selected.tech}

</p>


<a

href={selected.github}

target="_blank"

className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-xl"

>

View GitHub Repo

</a>


<h3 className="text-2xl font-bold mt-10">

Project Screenshots

</h3>


<div className="grid md:grid-cols-2 gap-6 mt-6">

{

selected.gallery.map((img,index)=>(

<motion.img

key={index}

src={img}

whileHover={{scale:1.03}}

className="rounded-2xl shadow-lg"

>

</motion.img>

))

}

</div>


</motion.div>

</motion.div>

)

}

</AnimatePresence>

</div>

</section>

)

}

export default Projects