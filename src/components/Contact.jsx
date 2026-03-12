import { useState } from "react"

export default function Contact(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [message,setMessage] = useState("")

const handleSubmit = (e) =>{

e.preventDefault()

const mailtoLink = `mailto:nitishkotumuchagi@gmail.com?subject=Portfolio Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`

window.location.href = mailtoLink

}

return(

<section id="contact" className="py-20 px-6">

<div className="max-w-3xl mx-auto">

<h2 className="text-3xl font-bold text-center mb-10">
Contact Me
</h2>

<form onSubmit={handleSubmit} className="space-y-6">

<input
type="text"
placeholder="Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
className="w-full p-3 border border-[#2D3240] rounded bg-[#1D2129]"
/>

<input
type="email"
placeholder="Your Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
className="w-full p-3 border border-[#2D3240] rounded bg-[#1D2129]"
/>

<textarea
rows="4"
placeholder="Your Message"
value={message}
onChange={(e)=>setMessage(e.target.value)}
required
className="w-full p-3 border border-[#2D3240] rounded bg-[#1D2129]"
/>

<button
type="submit"
className="bg-[#CC7750] text-white px-6 py-3 rounded-lg"
>
Send Message
</button>

</form>

</div>

</section>

)

}