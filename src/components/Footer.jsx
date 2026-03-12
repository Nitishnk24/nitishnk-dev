import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Footer(){

return(

<footer className="py-10 bg-[#161A22] border-b border-[#2D3240] mt-20">

<div className="max-w-6xl mx-auto text-center">

{/* Social Icons */}

<div className="flex justify-center gap-6 mb-4 text-xl">

<a
href="https://github.com/nitishnk24"
target="_blank"
rel="noopener noreferrer"
className="text-[#8E939C] hover:text-[#CC7750] hover:scale-110 transition">
<FaGithub />
</a>

<a
href="https://linkedin.com/in/nitish-n-kotumuchagi-47a2ba228/"
target="_blank"
rel="noopener noreferrer"
className="text-[#8E939C] hover:text-[#CC7750] hover:scale-110 transition">
<FaLinkedin />
</a>

<a
href="mailto:nitishkotumuchagil@gmail.com"
className="text-[#8E939C] hover:text-[#CC7750] hover:scale-110 transition">
<FaEnvelope />
</a>

</div>

{/* Footer Text */}

<p className="text-[#8E939C] text-sm">
© {new Date().getFullYear()} Nitish Kotumuchagi
</p>

<p className="text-[#8E939C] text-sm mt-1">
Built with love ❤️ and lots of coffee ☕
</p>

</div>

</footer>

)

}