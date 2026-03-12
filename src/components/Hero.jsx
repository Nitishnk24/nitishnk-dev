import { motion } from "framer-motion"

export default function Hero(){

return(

<section className="py-24 px-6">

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

{/* LEFT CONTENT */}

<motion.div
initial={{opacity:0, x:-60}}
animate={{opacity:1, x:0}}
transition={{duration:0.8}}
>

<p className="text-sm tracking-widest text-[#8E939C] mb-4">
Fresh Perspective · Ready to Create
</p>

<h1 className="text-4xl md:text-6xl font-bold mb-6">
I build things for the web
</h1>

<p className="text-[#8E939C] mb-8 max-w-md">
A passionate fresher with a hunger to learn, create, and contribute.
Turning ideas into clean and functional digital experiences.
</p>

<div className="flex gap-4 flex-wrap">

<a
href="#contact"
 className="border border-[#CC7750] text-[#EDE8DF] px-6 py-3 rounded-lg hover:bg-[#CC7750] hover:text-white transition" >
Get in Touch
</a>

<a
href="#projects"
 className="border border-[#CC7750] text-[#EDE8DF] px-6 py-3 rounded-lg hover:bg-[#CC7750] hover:text-white transition" >
View Work
</a>

<a
href="/resume.pdf"
download
 className="border border-[#CC7750] text-[#EDE8DF] px-6 py-3 rounded-lg hover:bg-[#CC7750] hover:text-white transition" >
Resume
</a>

</div>

</motion.div>


{/* RIGHT IMAGE */}

<motion.div
initial={{opacity:0, scale:0.8}}
animate={{opacity:1, scale:1}}
transition={{duration:0.8}}
className="flex justify-center"
>

<div className="p-1 rounded-2xl bg-gradient-to-r from-[#CC7750] to-[#8E939C]">

<img
src="/profile.png"
alt="profile"
className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl"
/>

</div>

</motion.div>

</div>

</section>

)

}