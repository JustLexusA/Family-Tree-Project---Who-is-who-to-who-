let OriginalY = 50
let GenerationGap = 50


function drawFamilyTree () {
    // Get the original person (the common ancestor)
    let originalPerson = getOriginalPerson(Family);
    if (originalPerson) {
        // Start drawing the family tree from the original person
        drawParentToChildren(originalPerson, Family, 0, width / 2, width / 2);
    } else {
        console.error("No original person found in the family tree.");
    }
}

function drawParentToChildren(parent, relatives, generation, x, width) {
    // Calculate the y position based on the generation
    let y = OriginalY + generation * GenerationGap;
    
    
    let children = parent.findChildren(relatives);
    let numChildren = children.length;
    let GapBetweenChildren = width / numChildren;
    let StartX = x - width / 2
    children.forEach((child, index) => {
        let childX = StartX + GapBetweenChildren * (index + 0.5);
        // Draw a line from the parent to the child
        push();
        stroke(0);
    });
}