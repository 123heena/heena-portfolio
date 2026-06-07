import { useState } from "react"

// MedAssist Images

import med1 from "../assets/med1.jpeg"
import med2 from "../assets/med2.jpeg"
import med3 from "../assets/med3.jpeg"
import med4 from "../assets/med4.jpeg"

// Fraud Images

import fraud from "../assets/fraudcover.png"

import fraud1 from "../assets/fraud1.png"
import fraud2 from "../assets/fraud2.png"
import fraud3 from "../assets/fraud3.png"
import fraud4 from "../assets/fraud4.png"
import fraud5 from "../assets/fraud5.png"

// Resume Images

import resume1 from "../assets/resume1.png"
import resume2 from "../assets/resume2.png"
import resume3 from "../assets/resume3.png"

// Face

import face from "../assets/face.png"

function Projects(){

const [selected,setSelected]=useState(null)

const projects=[

{

name:"MedAssist",

image:med1,

gallery:[med1,med2,med3,med4],

short:"Healthcare AI Platform",

problem:
"Patients often require early disease prediction systems for faster diagnosis.",

approach:
"Built machine learning and deep learning models to predict multiple diseases.",

desc:
"AI healthcare diagnosis platform capable of predicting diseases using ML and DL.",

tech:
"Python • ML • Deep Learning • Flask",

outcome:
"Successfully developed multi disease prediction platform.",

github:"#"

},

{

name:"Fraud Detection",

image:fraud,

gallery:[fraud1,fraud2,fraud3,fraud4,fraud5],

short:"Financial Fraud Detection",

problem:
"Detect suspicious transactions from highly imbalanced financial datasets.",

approach:
"Applied Random Forest and XGBoost with preprocessing and feature scaling.",

desc:
"Fraud detection system for identifying suspicious financial transactions.",

tech:
"Python • Random Forest • XGBoost",

outcome:
"Built classification models capable of detecting fraudulent activity.",

github:"https://github.com/123heena/Fraud-detection"

},
{

name:"Resume Scanner",

image:resume1,

gallery:[resume1,resume2,resume3],

short:"AI Resume Screening",

problem:
"Recruiters spend large amounts of time manually filtering resumes.",

approach:
"Used NLP, TF-IDF and cosine similarity for resume ranking.",

desc:
"AI powered resume ranking and screening platform.",

tech:
"Python • NLP • TF-IDF • SpaCy",

outcome:
"Automatically ranked resumes based on job descriptions.",

github:"https://github.com/123heena/AI-Powered-Resume-Scanner"

},

{

name:"Face Detection",

image:face,

gallery:[face],

short:"Computer Vision",

problem:
"Need real-time identification of faces using webcam streams.",

approach:
"Used OpenCV with webcam integration for real time detection.",

desc:
"Face detection using computer vision techniques.",

tech:
"OpenCV • Computer Vision",

outcome:
"Successfully implemented real-time webcam face detection.",

github:"https://github.com/123heena/Face-Recognition-app"

}

]

return(

<section
id="projects"
className="py-24 px-8 bg-gray-100"
>

<div className="max-w-7xl mx-auto">

<h2 className="text-5xl font-bold">

Featured Projects

</h2>

<p className="mt-4 text-gray-600">

AI • Machine Learning • Analytics Projects

</p>


<div className="grid md:grid-cols-2 gap-10 mt-14">

{

projects.map(project=>(

<div

key={project.name}

className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 duration-300"

>

<img

src={project.image}

className="w-full h-64 object-cover"

/>

<div className="p-8">

<h3 className="text-3xl font-bold">

{project.name}

</h3>

<p className="text-gray-600 mt-3">

{project.short}

</p>

<button

onClick={()=>setSelected(project)}

className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-full"

>

View Details

</button>

</div>

</div>

))

}

</div>


{

selected && (

<div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-5">

<div className="bg-white rounded-3xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative">

<button

onClick={()=>setSelected(null)}

className="absolute top-5 right-6 text-4xl"

>

×

</button>


<h2 className="text-4xl font-bold">

{selected.name}

</h2>


<p className="mt-6">

{selected.desc}

</p>


<div className="mt-8 space-y-5">

<div>

<h3 className="font-bold text-xl">

Problem Statement

</h3>

<p>

{selected.problem}

</p>

</div>


<div>

<h3 className="font-bold text-xl">

Approach

</h3>

<p>

{selected.approach}

</p>

</div>


<div>

<h3 className="font-bold text-xl">

Tech Stack

</h3>

<p>

{selected.tech}

</p>

</div>


<div>

<h3 className="font-bold text-xl">

Outcome

</h3>

<p>

{selected.outcome}

</p>

</div>

</div>


<a

href={selected.github}

target="_blank"

className="inline-block mt-8 bg-black text-white px-6 py-3 rounded-xl"

>

View GitHub

</a>


<h3 className="text-3xl font-bold mt-10">

Project Screenshots

</h3>


<div className="grid md:grid-cols-2 gap-6 mt-6">

{

selected.gallery.map((img,index)=>(

<img

key={index}

src={img}

className="rounded-2xl shadow-lg"

 />

))

}

</div>


</div>

</div>

)

}


</div>

</section>

)

}

export default Projects