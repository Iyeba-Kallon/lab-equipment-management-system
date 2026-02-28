import React, { createContext, useContext, useState } from 'react';

interface ModalContextType {
    isBookingModalOpen: boolean;
    openBookingModal: () => void;
    closeBookingModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const openBookingModal = () => setIsBookingModalOpen(true);
    const closeBookingModal = () => setIsBookingModalOpen(false);

    return (
        <ModalContext.Provider value={{ isBookingModalOpen, openBookingModal, closeBookingModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
