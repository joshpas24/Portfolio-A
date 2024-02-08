import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="rounded-3xl p-10 bg-black/45 flex flex-col md:flex-row items-center gap-8">
          <div className="rounded-full h-48 w-48">
            <img src={headshot} className="object-cover rounded-full"/>
          </div>
          <div className="flex flex-col gap-6 justify-center items-center md:items-start">
            <div className="flex flex-col gap-2 items-center md:items-start">
              <h1 className="text-white text-5xl md:text-7xl font-bold">Josh Pascual</h1>
              <h2 className="text-white text-xl md:text-3xl font-bold">Full-Stack Software Engineer</h2>
            </div>
            <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/josh-pascual/" target="_blank" title="LinkedIn" className="p-3 w-12 h-12 border rounded-full text-xl text-white flex items-center justify-center hover:bg-gray-500/65">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/joshpas24" target="_blank" title="Github" className="p-3 w-12 h-12 border rounded-full text-xl text-white flex items-center justify-center hover:bg-gray-500/65">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://docs.google.com/document/d/1FAU2p8rl9nKo99RE8XkXtuzGTlOfC_q8I6qTc5-4g2s/export?format=pdf" target="_blank" title="Resume" className="p-3 w-12 h-12 border rounded-full text-xl text-white flex items-center justify-center hover:bg-gray-500/65">
                  <i class="fa-regular fa-file"></i>
                </a>
                <a href="mailto:joshapasucal@gmail.com" title="Email" className="p-3 w-12 h-12 border rounded-full text-xl text-white flex items-center justify-center hover:bg-gray-500/65">
                  <i class="fa-regular fa-envelope"></i>
                </a>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}

export default App;
