
function Navbar(){

return(

<nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md">

<div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-5">

<h1 className="text-white font-bold text-2xl">

Heena Kousar

</h1>

<div className="hidden md:flex gap-6 text-white font-medium">

<a href="#about">About</a>

<a href="#skills">Skills</a>

<a href="#projects">Projects</a>

<a href="#experience">Experience</a>

<a href="#contact">Contact</a>

</div>

</div>

</nav>

)

}

export default Navbar

