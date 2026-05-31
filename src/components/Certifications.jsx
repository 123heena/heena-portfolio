function Certifications(){

const certs=[

"Power BI",

"Excel Analytics",

"AI Fundamentals",

"Machine Learning",

"Cloud Foundations",

"Python Projects",

"Azure Applications",

"Data Visualization"

]

return(

<section className="bg-gray-100 py-24 px-8">

<div className="max-w-6xl mx-auto">

<h2 className="text-5xl font-bold">

Certifications

</h2>

<div className="grid md:grid-cols-4 gap-5 mt-12">

{

certs.map(cert=>(

<div

key={cert}

className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-2 duration-300"

>

{cert}

</div>

))

}

</div>

</div>

</section>

)

}

export default Certifications