import React from "react";
// import axios from 'axios';

export default function Contact() {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: '',
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.post('/api/contact', formData);
    //         alert('Email sent successfully!');
    //         setFormData({ name: '', email: '', message: '' });
    //     } catch (error) {
    //         console.error('Failed to send email:', error);
    //         alert('Failed to send email. Please try again later.');
    //     }
    // };

    return (
        <div>
            {/* <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                <button type="submit">Submit</button>
            </form> */}
            <div className="flex flex-col md:grid md:grid-cols-2 gap-3 text-xl md:text-2xl mb-6 text-white">
                <div className="flex gap-3 items-center">
                    <i class="fa-regular fa-file"></i>
                    <a href="https://docs.google.com/document/d/1FAU2p8rl9nKo99RE8XkXtuzGTlOfC_q8I6qTc5-4g2s/export?format=pdf" target="_blank" title="Resume Download" className="hover:underline">Resume</a>
                </div>
                <div className="md:hidden flex gap-3 items-center">
                    <i class="fa-regular fa-envelope"></i>
                    <a href="mailto:joshapasucal@gmail.com" title="Email" className="hover:underline">joshapascual@gmail.com</a>
                </div>
                <div className="flex gap-3 items-center">
                    <i class="fa-brands fa-linkedin"></i>
                    <a href="https://www.linkedin.com/in/josh-pascual/" target="_blank" title="LinkedIn" className="hover:underline">josh-pascual</a>
                </div>
                <div className="hidden md:flex gap-3 items-center">
                    <i class="fa-regular fa-envelope"></i>
                    <a href="mailto:joshapasucal@gmail.com" title="Email" className="hover:underline">joshapascual@gmail.com</a>
                </div>
                <div className="flex gap-3 items-center">
                    <i class="fa-brands fa-github"></i>
                    <a href="https://github.com/joshpas24" target="_blank" title="Github" className="hover:underline">joshpas24</a>
                </div>
            </div>
        </div>
    )
}
