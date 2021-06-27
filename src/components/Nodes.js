import React from 'react';
import { 
    Container, 
    Button,
} from 'reactstrap'; 

const Nodes = () => {
    const nodesGrid = () => {
        let nodesArray = [];
        for (let i = 1; i <= 1000; i++) {
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
