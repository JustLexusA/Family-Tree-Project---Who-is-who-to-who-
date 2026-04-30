let john = new FamilyMember('John', null);
let maria = new FamilyMember('Maria', john)
let alex = new FamilyMember('Alex', john)
let sophia = new FamilyMember('Sophia', john)
let thomas = new FamilyMember('Thomas', maria)
let isabella = new FamilyMember('Isabella', maria)
let henry = new FamilyMember('Henry', sophia)
let grace = new FamilyMember('Grace', alex)

let Family = [john, maria, alex, sophia, thomas, isabella, henry, grace]

// Variables to store and compare the two persons
let personA, personB;
let genDiff;
let relationshipofAB; // siblings, cousins, parent, child, etc.


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200);

    // Draws the family tree
    drawFamilyTree();

    // Display the family in the console
    print(Family)

}