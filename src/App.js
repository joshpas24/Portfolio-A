import React, { useState, Fragment } from "react";
import { Transition } from "@headlessui/react";
import headshot from './headshot.png'
import VideoBackground from "./components/VideoBackground";
import { useModal } from "./context/modal";
import Modal from "./components/Modal";

function App() {
  const { showModal, setShowModal, modalContent, setModalContent } = useModal();
  const [background, setBackground] = useState('space');

  const handleModal = (content) => {
    setModalContent(content)
    setShowModal(true);
  }

  return (
    <div className="relative h-screen">
      <VideoBackground background={background} />
      <Transition
            appear
            show={!showModal}
            as={Fragment}
            enter="transition-opacity duration-1200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-1200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
        <div className={`${showModal && "hidden"} absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center md:gap-10`}>
          <div className="hidden md:flex gap-6">
            <button onClick={() => setBackground('space')} className="p-3 w-16 h-16 text-2xl bg-black/45 rounded-full text-white flex items-center justify-center hover:bg-gray-500/65">
              <i class="fa-solid fa-star"></i>
            </button>
            <button onClick={() => setBackground('forest')} className="p-3 w-16 h-16 text-2xl bg-black/45 rounded-full text-white flex items-center justify-center hover:bg-gray-500/65">
              <i class="fa-solid fa-tree"></i>
            </button>
            <button onClick={() => setBackground('ocean')} className="p-3 w-16 h-16 text-2xl bg-black/45 rounded-full text-white flex items-center justify-center hover:bg-gray-500/65">
              <i class="fa-solid fa-fish"></i>
            </button>
          </div>
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
          <div className="">
            <div className="hidden md:grid grid-cols-4 w-full gap-5">
                <button onClick={() => handleModal("About")} className="bg-black/45 py-3 px-8 w-full text-2xl rounded-lg text-white hover:bg-gray-500/65">
                  About
                </button>
                <button onClick={() => handleModal("Projects")} className="bg-black/45 text-2xl rounded-lg text-white hover:bg-gray-500/65">
                  Projects
                </button>
                <button onClick={() => handleModal("Skills")} className="bg-black/45 text-2xl rounded-lg text-white hover:bg-gray-500/65">
                  Skills
                </button>
                <button onClick={() => handleModal("Contact")} className="bg-black/45 text-2xl rounded-lg text-white hover:bg-gray-500/65">
                  Contact
                </button>
            </div>
            <div>

            </div>
          </div>
        </div>
      </Transition>
      {showModal && <Modal />}
  </div>
  );
}

export default App;
