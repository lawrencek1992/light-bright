let nodesArray = [];
for (let i = 1; i <= 1300; i++) {
    nodesArray.push(i);
}
let initialNodeColors = {};
initialNodeColors.currentColor = "#343a40";
nodesArray.forEach(element => {
    let nodeID = "node" + element;
    let nodeColor = "#343a40"; // $gray-800
    initialNodeColors.id = nodeID;
    initialNodeColors.color = nodeColor;
})

export const initialData = initialNodeColors;