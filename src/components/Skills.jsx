export default function Skills(){

return(

<section id="skills" className="py-20 px-6">

<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
Technical Skills
</h2>

<div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-[#1D2129] border border-[#2D3240] rounded-xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
<h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
<p className="text-[#8E939C]">
HTML, CSS, JavaScript building responsive interfaces
</p>
</div>

<div className="bg-[#1D2129] border border-[#2D3240] rounded-xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
<h3 className="text-xl font-semibold mb-2">React</h3>
<p className="text-[#8E939C]">
React hooks, components, state management
</p>
</div>

<div className="bg-[#1D2129] border border-[#2D3240] rounded-xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
<h3 className="text-xl font-semibold mb-2">UI / UX</h3>
<p className="text-[#8E939C]">
Tailwind CSS, responsive design principles
</p>
</div>

<div className="bg-[#1D2129] border border-[#2D3240] rounded-xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
<h3 className="text-xl font-semibold mb-2">Backend</h3>
<p className="text-[#8E939C]">
Node.js and Express APIs
</p>
</div>

<div className="bg-[#1D2129] border border-[#2D3240] rounded-xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
<h3 className="text-xl font-semibold mb-2">Databases</h3>
<p className="text-[#8E939C]">
MongoDB and SQL fundamentals
</p>
</div>

<div className="bg-[#1D2129] border border-[#2D3240] rounded-xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
<h3 className="text-xl font-semibold mb-2">Developer Tools</h3>
<p className="text-[#8E939C]">
Git, GitHub, VS Code, Postman
</p>
</div>

</div>

</section>

)

}