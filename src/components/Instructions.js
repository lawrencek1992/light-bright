import React from 'react';
import {
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Button,
} from 'reactstrap';

const Instructions = ({ showInstructions, setShowInstructions }) => {
    const toggle = () => setShowInstructions(!showInstructions);

    return (
        <Modal className="Instructions" isOpen={showInstructions} toggle={toggle} fade centered>
            <ModalHeader toggle={toggle}>Light-Bright Instructions</ModalHeader>
            <ModalBody>To use Light-Bright select a color, then click on a node to change it to that color. You can use the Reset button to erase your work.</ModalBody>
            <ModalFooter>
                <Button className="btn-gray" onClick={() => setShowInstructions(false)}>Close</Button>
            </ModalFooter>
        </Modal>
    );
};

export default Instructions;