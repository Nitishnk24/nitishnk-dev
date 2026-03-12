import { useState } from "react"

export default function Navbar(){

const [menuOpen,setMenuOpen] = useState(false)

return(

<nav className="sticky top-0 w-full bg-[#161A22] border-b border-[#2D3240] z-50">

<div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

<h1 className="text-xl font-bold text-[#CC7750]">
<img src="/logo.png" alt="Nitish.dev" className="w-8 h-8 inline-block mr-2" />
</h1>


{/* Desktop Menu */}

<ul className="hidden md:flex gap-8 text-[#8E939C] font-medium">

<li>
<a
href="#about"
className="relative hover:text-[#CC7750] transition"
>
About
</a>
</li>

<li>
<a
href="#skills"
className="relative hover:text-[#CC7750] transition"
>
Skills
</a>
</li>

<li>
<a
href="#projects"
className="relative hover:text-[#CC7750] transition"
>
Projects
</a>
</li>

<li>
<a
href="#contact"
className="relative hover:text-[#CC7750] transition"
>
Contact
</a>
</li>

</ul>


{/* Mobile Button */}

<button
className="md:hidden text-white"
onClick={()=>setMenuOpen(!menuOpen)}
>
☰
</button>

</div>


{/* Mobile Menu */}

{menuOpen && (

<div className="md:hidden px-6 pb-4">

<ul className="flex flex-col gap-4 text-[#8E939C]">

<li><a href="#about">About</a></li>
<li><a href="#skills">Skills</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#contact">Contact</a></li>

</ul>

</div>

)}

</nav>

)

}