import React from 'react';
import { 
    Container, 
    Button,
} from 'reactstrap'; 

const Nodes = () => {
    // You need to use the state for each node to define it's current background-color. 
    // You need an action creator to change the color of each node when clicked to "currentColor"

    const nodesGrid = () => {
        let nodesArray = [];
        for (let i = 1; i <= 1300; i++) {
            nodesArray.push(i);
        }
        return (
            <>
                { nodesArray.map((num) => (
                    <Button className="node" key={num} id={`node${num}`} />
                ))}
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
