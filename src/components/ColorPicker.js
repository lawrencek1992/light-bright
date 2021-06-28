import React from 'react';
import { STORE } from '../store/actionTypes';
import {
    RED,
    ORANGE,
    YELLOW,
    GREEN,
    BLUE,
    PINK,
    PURPLE,
    BROWN,
    BLACK,
    WHITE
} from '../store/colors';
import { useDispatch } from 'react-redux';
import { 
    Button, 
    ButtonGroup,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

const ColorPicker = () => {
    const dispatch = useDispatch();

    const largeScreens = window.matchMedia("(max-width: 992px)");

    return (
        <>
        { largeScreens.matches
            ? (
                <UncontrolledDropdown>
                    <DropdownToggle nav caret className="dropdown">
                        Color Picker
                    </DropdownToggle>
                    <DropdownMenu style={{"backgroundColor": "#212529"}} right>
                        <DropdownItem className="btn-red" onClick={() => dispatch({ type: STORE, payload: RED })}>Red</DropdownItem>
                        <DropdownItem className="btn-orange" onClick={() => dispatch({ type: STORE, payload: ORANGE })}>Orange</DropdownItem>
                        <DropdownItem className="btn-yellow" onClick={() => dispatch({ type: STORE, payload: YELLOW })}>Yellow</DropdownItem>
                        <DropdownItem className="btn-green" onClick={() => dispatch({ type: STORE, payload: GREEN })}>Green</DropdownItem>
                        <DropdownItem className="btn-blue" onClick={() => dispatch({ type: STORE, payload: BLUE })}>Blue</DropdownItem>
                        <DropdownItem className="btn-pink" onClick={() => dispatch({ type: STORE, payload: PINK })}>Pink</DropdownItem>
                        <DropdownItem className="btn-purple" onClick={() => dispatch({ type: STORE, payload: PURPLE })}>Purple</DropdownItem>
                        <DropdownItem className="btn-brown" onClick={() => dispatch({ type: STORE, payload: BROWN })}>Brown</DropdownItem>
                        <DropdownItem className="btn-black" onClick={() => dispatch({ type: STORE, payload: BLACK })}>Black</DropdownItem>
                        <DropdownItem className="btn-white" onClick={() => dispatch({ type: STORE, payload: WHITE })}>White</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            )
            :
            (
                <ButtonGroup className="ColorPicker" id="showColor">
                    <Button color="red" onClick={() => dispatch({ type: STORE, payload: RED })}>Red</Button>
                    <Button color="orange" onClick={() => dispatch({ type: STORE, payload: ORANGE })}>Orange</Button>
                    <Button color="yellow" onClick={() => dispatch({ type: STORE, payload: YELLOW })}>Yellow</Button>
                    <Button color="green" onClick={() => dispatch({ type: STORE, payload: GREEN })}>Green</Button>
                    <Button color="blue" onClick={() => dispatch({ type: STORE, payload: BLUE })}>Blue</Button>
                    <Button color="pink" onClick={() => dispatch({ type: STORE, payload: PINK })}>Pink</Button>
                    <Button color="purple" onClick={() => dispatch({ type: STORE, payload: PURPLE })}>Purple</Button>
                    <Button color="brown" onClick={() => dispatch({ type: STORE, payload: BROWN })}>Brown</Button>
                    <Button color="black" onClick={() => dispatch({ type: STORE, payload: BLACK })}>Black</Button>
                    <Button color="white" onClick={() => dispatch({ type: STORE, payload: WHITE })}>White</Button>
                </ButtonGroup>
            )
        }
        </>
    );
};

export default ColorPicker;