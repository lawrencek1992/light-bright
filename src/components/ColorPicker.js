import React from 'react';
import { 
    Button, 
    ButtonGroup,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

const ColorPicker = () => {
    const largeScreens = window.matchMedia("(max-width: 992px)");

    return (
        <>
        { largeScreens.matches
            ? (
                <>

                    {/* Ultimately you want these buttons to be a gray color until they are clicked, and then you want them to turn their color. If another button is clicked, you want them to turn back to gray. You'll probably do this with state. */}

                    <Button className="node" />
                    <UncontrolledDropdown>
                        <DropdownToggle nav caret>
                            Color Picker
                        </DropdownToggle>
                        <DropdownMenu style={{"backgroundColor": "#212529"}} right>
                            <DropdownItem className="btn-red">Red</DropdownItem>
                            <DropdownItem className="btn-orange">Orange</DropdownItem>
                            <DropdownItem className="btn-yellow">Yellow</DropdownItem>
                            <DropdownItem className="btn-green">Green</DropdownItem>
                            <DropdownItem className="btn-blue">Blue</DropdownItem>
                            <DropdownItem className="btn-pink">Pink</DropdownItem>
                            <DropdownItem className="btn-purple">Purple</DropdownItem>
                            <DropdownItem className="btn-brown">Brown</DropdownItem>
                            <DropdownItem className="btn-black">Black</DropdownItem>
                            <DropdownItem className="btn-white">White</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </>
            )
            :
            (
                <ButtonGroup className="ColorPicker" id="showColor">
                    <Button color="red">Red</Button>
                    <Button color="orange">Orange</Button>
                    <Button color="yellow">Yellow</Button>
                    <Button color="green">Green</Button>
                    <Button color="blue">Blue</Button>
                    <Button color="pink">Pink</Button>
                    <Button color="purple">Purple</Button>
                    <Button color="brown">Brown</Button>
                    <Button color="black">Black</Button>
                    <Button color="white">White</Button>
                </ButtonGroup>
            )
        }
        </>
    );
};

export default ColorPicker;