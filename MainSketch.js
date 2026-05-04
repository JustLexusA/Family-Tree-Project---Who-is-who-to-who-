let john = new FamilyMember('John', null);
let maria = new FamilyMember('Maria', john)
let alex = new FamilyMember('Alex', john)
let sophia = new FamilyMember('Sophia', john)
let thomas = new FamilyMember('Thomas', maria)
let isabella = new FamilyMember('Isabella', maria)
let henry = new FamilyMember('Henry', sophia)
let grace = new FamilyMember('Grace', alex)
let gerald = new FamilyMember('Gerald', thomas)

let Family = [john, maria, alex, sophia, thomas, isabella, henry, grace, gerald]

// Variables to store and compare the two persons
let personA, personB;
let generationPersonA, generationPersonB;
let childrenOfA, childrenOfB;
let genDiff;
let relationshipofAB; // siblings, cousins, parent, child, etc.


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200);

    // Draws the family tree
    drawFamilyTree();

    // Find the relationship between two random family members
    
    // Display the family in the console
    // print(Family)
    
    // Selected family members (RANDOMIZE)
    personA = Family[Math.floor(Math.random() * Family.length)]
    personB = Family[Math.floor(Math.random() * Family.length)]
    generationPersonA = personA.findGeneration();
    generationPersonB = personB.findGeneration();
    childrenOfA = personA.findChildren();
    childrenOfB = personB.findChildren();
    
    findRelationship(personA, personB);
    
    // print(personA)
    print(`${personA.name} is in generation ${generationPersonA}`)
    print(`${personA.name} has ${childrenOfA.length} children: ${childrenOfA.map(child => child.name).join(', ')}`)
    // print(personB)
    print(`${personB.name} is in generation ${generationPersonB}`)
    print(`${personB.name} has ${childrenOfB.length} children: ${childrenOfB.map(child => child.name).join(', ')}`)
}