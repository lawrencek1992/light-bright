import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { 
    Navbar, 
    NavItem, 
    NavbarBrand,
    Button
} from 'reactstrap';
import ColorPicker from './ColorPicker';
import ResetWarning from './ResetWarning';
import Instructions from './Instructions';

const Header = () => {
    const [showWarning, setShowWarning] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);
    const currentColor = useSelector((state) => state.currentColor);
    
    return (
        <Navbar className="Navbar" dark>
            <NavbarBrand id="title">
                Light-Bright
            </NavbarBrand>
            <NavItem>
                <Button 
                    id="reset-button" 
                    onClick={() => setShowWarning(true)}>Reset</Button>
            </NavItem>
            <NavItem className="show-color">
                <Button className="node" style={{ backgroundColor: `${currentColor}`}} disabled />
            </NavItem>
            <ColorPicker />
            <ResetWarning showWarning={showWarning} setShowWarning={setShowWarning} />
            <Instructions showInstructions={showInstructions} setShowInstructions={setShowInstructions} />
        </Navbar>
    );
};

export default Header;