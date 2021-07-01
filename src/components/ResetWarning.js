import React from 'react';
import { RESET } from '../store/actionTypes';
import { useDispatch } from 'react-redux';
import {  
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Button,
} from 'reactstrap';

const ResetWarning = ({ showWarning, setShowWarning }) => {
    const toggle = () => setShowWarning(!showWarning);
    const dispatch = useDispatch();

    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <Modal isOpen={showWarning} toggle={toggle} fade={true} className="ResetWarning" light="false" centered>
            <ModalHeader toggle={toggle} color="dark"></ModalHeader>
            <ModalBody color="dark" >Are you sure you want to reset? All progress will be lost. </ModalBody>
            <ModalFooter color="dark">
                <Button className="btn-red" tag="button" onClick={() => {
                    dispatch({ type: RESET });
                    reloadPage();
                }}>
                    Reset
                </Button>
                <Button className="btn-gray" outline onClick={() => setShowWarning(false)}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ResetWarning;