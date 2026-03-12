import { useState } from "react"
import { projects } from "../data/projects"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

export default function Projects(){

const [start,setStart] = useState(0)

const visibleProjects = projects.slice(start,start+3)

const nextSlide = ()=>{
if(start + 3 < projects.length){
setStart(start + 3)
}
}

const prevSlide = ()=>{
if(start - 3 >= 0){
setStart(start - 3)
}
}

return(

<section id="projects" className="py-20 px-6">

<div className="max-w-6xl mx-auto">

<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
Projects
</h2>


{/* Cards */}

<div className="flex justify-center gap-8 flex-wrap">

{visibleProjects.map((project,index)=>(

<div
key={index}
className="w-80 bg-[#1D2129] border border-[#2D3240] rounded-xl p-6 hover:-translate-y-2 hover:shadow-xl transition duration-300"
>

<h3 className="text-xl font-semibold mb-3">
{project.title}
</h3>

<p className="text-[#8E939C] mb-4">
{project.description}
</p>

<div className="flex flex-wrap gap-2 mb-4">

{project.tech.map((t,i)=>(
<span
key={i}
className="text-sm border border-[#2D3240] px-2 py-1 rounded"
>
{t}
</span>
))}

</div>

<div className="flex gap-4">

<a
href={project.github}
className="text-[#CC7750] hover:underline"
>
GitHub
</a>

<a
href={project.demo}
className="text-[#8E939C] hover:underline"
>
Live Demo
</a>

</div>

</div>

))}

</div>


{/* Navigation */}

<div className="flex justify-center gap-8 mt-10">

<button
onClick={prevSlide}
className="p-3 border border-[#2D3240] rounded-full hover:bg-[#1D2129] transition"
>
<FaArrowLeft/>
</button>

<button
onClick={nextSlide}
className="p-3 border border-[#2D3240] rounded-full hover:bg-[#1D2129] transition"
>
<FaArrowRight/>
</button>

</div>

</div>

</section>

)

}