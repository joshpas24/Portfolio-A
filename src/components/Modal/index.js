import React, { Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { useModal } from "../../context/modal";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";

export default function Modal() {
    const { showModal, setShowModal, modalContent, setModalContent } = useModal();

    return (
        <Transition
            appear
            show={showModal}
            as={Fragment}
            enter="transition-opacity duration-1200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-1200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <Dialog as="div" onClose={() => setShowModal(false)} className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                    <div className="relative bg-zinc-900/95 rounded-2xl p-8 w-full md:w-1/2">
                        <div className="absolute top-0 right-0 p-2">
                            <button onClick={() => setShowModal(false)} className="flex items-center p-2 text-white hover:text-red-600">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <Dialog.Title className="text-2xl md:text-3xl font-bold text-white mb-10">
                            {modalContent}
                        </Dialog.Title>

                        <div className="overflow-y-auto max-h-[80vh]">
                            {modalContent === 'About' && <About />}
                            {modalContent === 'Skills' && <Skills />}
                            {modalContent === 'Projects' && <Projects />}
                            {modalContent === 'Contact' && <Contact />}
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
