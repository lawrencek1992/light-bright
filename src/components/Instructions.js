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
            <ModalBody>
                <ol>
                    <li>
                       <strong>
                       Use the color selector to select a color. 
                       </strong> Click on any node to change its color. 
                    </li>
                    <br />
                    <li>
                        <strong>
                            Double click
                        </strong> on any node in order to <strong>  reset </strong> it to its original color.
                    </li>
                    <br />
                    <li>
                        Use the <strong> Reset button </strong> to erase all of your work and reset the entire board. 
                    </li>
                    <br />
                    <em>
                        <li>
                            If you resize the screen while you are working, your image will become distorted. 
                        </li>
                    </em>
                </ol>
            </ModalBody>
            <ModalFooter>
                <Button className="btn-gray" onClick={() => setShowInstructions(false)}>Close</Button>
            </ModalFooter>
        </Modal>
    );
};

export default Instructions;