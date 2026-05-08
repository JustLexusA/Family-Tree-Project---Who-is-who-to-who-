let OriginalY = 50
let GenerationGap = 50


function drawFamilyTree () {
    let originalPerson = getOriginalPerson(Family);
    if (originalPerson) {
    
        drawParentToChildren(originalPerson, Family, 0, width / 2, windowWidth * 0.9);
    } else {
        console.error("No original person found in the family tree.");
    }
}

function drawParentToChildren(parent, relatives, generation, x, width) {
    // The y position of each member is determined by their generation.
    let y = OriginalY + generation * GenerationGap;
    // Draw the parent at the specified x and y position.
    parent.draw(x, y);

    let children = parent.findChildren(relatives);
    if (children.length === 0) {
        return;
    }

    let numChildren = children.length;
    let gap = width / numChildren;
    let startX = x - width / 2;

    children.forEach((child, index) => {
        let childX = startX + gap * (index + 0.5);
        let childY = OriginalY + (generation + 1) * GenerationGap;

        stroke(0);
        // Draw the line from the parent to the child.
        line(x, y + 10, childX, childY - 10);
        drawParentToChildren(child, relatives, generation + 1, childX, gap * 0.8);
    });
}

function drawRelationshipArrow(personA, personB) {
    if (personA.drawPos && personB.drawPos) {
        let base = personA.drawPos;
        let vec = p5.Vector.sub(personB.drawPos, personA.drawPos);
        drawArrow(base, vec, 'red');
    }
}

function drawArrow(base, vec, myColor) {
    push();
    stroke(myColor);
    strokeWeight(3);
    fill(myColor);
    translate(base.x, base.y);
    line(0, 0, vec.x, vec.y);
    rotate(vec.heading());
    let arrowSize = 7;
    translate(vec.mag() - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
}