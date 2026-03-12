export default function About(){

return(

<section id="about" className="py-20 px-6">

<div className="max-w-6xl mx-auto">

<h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
About Me
</h2>

<p className="text-center max-w-2xl mx-auto text-[#8E939C] mb-12">
I'm the kind of person who finishes what I start. Even when it's frustrating, I sit with the problem until it clicks. That patience is probably why I'm still coding.
I build web apps with JavaScript, React, and Node. But I care more about how things feel — does this button make sense? Is this layout intuitive? I notice the small stuff.
</p>
<p className="text-center max-w-2xl mx-auto text-[#8E939C] mb-12">
Right now I'm deep in React, experimenting, breaking things, learning. There's always more to figure out — that's what keeps it interesting.
</p>

<div className="grid md:grid-cols-3 gap-8">

{/* Card 1 */}

<div className="bg-[#1D2129] border border-[#2D3240] rounded-xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

<h3 className="text-xl font-semibold mb-3">
Problem Solver
</h3>

<p className="text-[#8E939C]">
I enjoy breaking complex problems into smaller logical
solutions and building efficient systems.
</p>

</div>


{/* Card 2 */}

<div className="bg-[#1D2129] border border-[#2D3240] rounded-xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

<h3 className="text-xl font-semibold mb-3">
Continuous Learner
</h3>

<p className="text-[#8E939C]">
Technology evolves fast and I continuously upgrade
my skills with modern tools and frameworks.
</p>

</div>


{/* Card 3 */}

<div className="bg-[#1D2129] border border-[#2D3240] rounded-xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

<h3 className="text-xl font-semibold mb-3">
Clean Code
</h3>

<p className="text-[#8E939C]">
I focus on writing maintainable and readable code
following industry best practices.
</p>

</div>

</div>

</div>

</section>

)

}