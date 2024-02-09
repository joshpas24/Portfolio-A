import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    return (
        <ModalContext.Provider value={{ showModal, setShowModal, modalContent, setModalContent }}>
            {children}
        </ModalContext.Provider>
    )
};

export function useModal() {
    return useContext(ModalContext);
}
