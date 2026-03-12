import { useState } from "react"
import { certificates } from "../data/certificates"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

export default function Certifications(){

const [start,setStart] = useState(0)

const visibleCertificates = certificates.slice(start,start+3)

const nextSlide = ()=>{
if(start + 3 < certificates.length){
setStart(start + 3)
}
}

const prevSlide = ()=>{
if(start - 3 >= 0){
setStart(start - 3)
}
}

return(

<section id="certifications" className="py-20 px-6">

<div className="max-w-6xl mx-auto">

<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
Certifications
</h2>


{/* Certificate Cards */}

<div className="flex justify-center gap-8 flex-wrap">

{visibleCertificates.map((cert,index)=>(

<div
key={index}
className="w-80 bg-[#242833] border border-[#323744] rounded-xl p-6 hover:-translate-y-2 hover:shadow-xl transition duration-300"
>

<h3 className="text-lg font-semibold mb-2">
{cert.title}
</h3>

<p className="text-[#9AA0AA] mb-4">
{cert.platform}
</p>

<a
href={cert.link}
target="_blank"
rel="noopener noreferrer"
className="text-[#CC7750] hover:underline"
>

📄 View Certificate

</a>

</div>

))}

</div>


{/* Navigation Arrows */}

<div className="flex justify-center gap-8 mt-10">

<button
onClick={prevSlide}
className="p-3 border border-[#323744] rounded-full hover:bg-[#242833] transition"
>
<FaArrowLeft/>
</button>

<button
onClick={nextSlide}
className="p-3 border border-[#323744] rounded-full hover:bg-[#242833] transition"
>
<FaArrowRight/>
</button>

</div>

</div>

</section>

)

}