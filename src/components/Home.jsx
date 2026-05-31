import { motion } from "framer-motion"
import profile from "../assets/profile.jpg"

function Home() {

return (

<section className="min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-orange-400 text-white">

<div className="max-w-6xl mx-auto px-8 py-24">

<div className="grid md:grid-cols-2 gap-10 items-center">


{/* LEFT SIDE */}

<motion.div

initial={{opacity:0,x:-60}}

animate={{opacity:1,x:0}}

transition={{duration:1}}

>

<p className="text-xl mb-3 font-semibold">

HELLO I'M

</p>

<h1 className="text-5xl md:text-6xl font-bold leading-tight">

Heena Kousar

</h1>

<h2 className="text-3xl mt-5 font-semibold">

AI & Data Science Graduate

</h2>

<p className="mt-6 text-lg leading-8">

Building AI-powered solutions using Machine Learning,
Analytics and Data Driven Technologies.

</p>

<div className="flex gap-4 mt-8 flex-wrap">

<a

href="#projects"

className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 duration-300"

>

View Projects

</a>

<a

href="/HEENA KOUSAR.pdf"

download

className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black duration-300"

>

Download Resume

</a>

</div>

</motion.div>


{/* RIGHT SIDE */}

<div className="flex flex-col items-center">

<div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white">

<img

src={profile}

alt="Profile"

className="w-full h-full object-cover"

/>

</div>


<div className="bg-white text-black rounded-3xl p-8 shadow-2xl mt-8 w-full">

<h3 className="text-2xl font-bold">

Quick Highlights

</h3>

<div className="grid grid-cols-2 gap-6 mt-8">

<div>

<h1 className="text-4xl font-bold">

8+

</h1>

<p>

Projects

</p>

</div>

<div>

<h1 className="text-4xl font-bold">

2

</h1>

<p>

Internships

</p>

</div>

<div>

<h1 className="text-4xl font-bold">

10+

</h1>

<p>

Certifications

</p>

</div>

<div>

<h1 className="text-4xl font-bold">

AI

</h1>

<p>

Healthcare ML

</p>

</div>

</div>

</div>

</div>


</div>

</div>

</section>

)

}

export default Home