import React from 'react';
import { UPDATE } from '../store/actionTypes';
import { useSelector, useDispatch } from 'react-redux';
import { 
    Container, 
    Button,
} from 'reactstrap'; 

const Nodes = () => {
    // You need to use the state for each node to define it's current background-color. But how????
    const currentColor = useSelector((state) => state.currentColor);
    const dispatch = useDispatch();

    // Define an array with the total number of nodes (for large screens--small screens will cut nodes off);
    let nodesArray = [];
    for (let i = 1; i <= 1300; i++) {
        nodesArray.push(i);
    }

    const nodesGrid = () => {
        return (
            <>
                { nodesArray.map((num) => (
                    <Button className="node" key={num} id={num} onClick={() => {
                        dispatch({ type: UPDATE, payload: {node: num, newColor: currentColor}});
                    }}/>
                ))}
                {/* Add something like what's below to set the background color of each node on UPDATE */}
                {/* style={{ backgroundColor: `${nodeColor}`}} */}
            </>
        )
    }
    return (
        <Container className="Nodes" fluid>
            {nodesGrid()}
        </Container>
    );
};

export default Nodes;
