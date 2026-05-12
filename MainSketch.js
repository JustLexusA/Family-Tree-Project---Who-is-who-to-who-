let john = new FamilyMember('Pikachu', null);
let maria = new FamilyMember('Charizard', john)
let alex = new FamilyMember('Blastoise', john)
let sophia = new FamilyMember('Venusaur', john)
let thomas = new FamilyMember('Dragonite', maria)
let isabella = new FamilyMember('Gyarados', maria)
let henry = new FamilyMember('Arcanine', sophia)
let grace = new FamilyMember('Alakazam', alex)
let gerald = new FamilyMember('Machamp', thomas)
let darlan = new FamilyMember('Golem', isabella)
let tobias = new FamilyMember('Articuno', henry)
let beethoven = new FamilyMember('Zapdos', henry)
let miigwans = new FamilyMember('Moltres', grace)
let joseph = new FamilyMember('Mewtwo', darlan)
let peter = new FamilyMember('Mew', darlan)
let harry = new FamilyMember('Typhlosion', beethoven)
let owen = new FamilyMember('Feraligatr', grace)
let jerry = new FamilyMember('Meganium', grace)
let fred = new FamilyMember('Rayquaza', alex)

// New Pokemon family members
let pikachu_child1 = new FamilyMember('Electrode', maria)
let pikachu_child2 = new FamilyMember('Lapras', alex)
let charizard_child = new FamilyMember('Ho-Oh', thomas)
let blastoise_child = new FamilyMember('Lugia', grace)
let venusaur_child = new FamilyMember('Groudon', henry)
let arcanine_child = new FamilyMember('Kyogre', tobias)
let alakazam_child = new FamilyMember('Rayquaza', owen)
let machamp_child = new FamilyMember('Dialga', gerald)
let golem_child = new FamilyMember('Palkia', joseph)
let zapdos_child = new FamilyMember('Giratina', harry)
let mewtwo_child = new FamilyMember('Arceus', joseph)
let alakazam_child2 = new FamilyMember('Salamence', jerry)
let arcanine_child2 = new FamilyMember('Metagross', beethoven)

let Family = [fred, jerry, owen, john, maria, alex, sophia, thomas, isabella, henry, grace, gerald, darlan, tobias, beethoven, miigwans, joseph, peter, harry, pikachu_child1, pikachu_child2, charizard_child, blastoise_child, venusaur_child, arcanine_child, alakazam_child, machamp_child, golem_child, zapdos_child, mewtwo_child, alakazam_child2, arcanine_child2];

// Variables to store and compare the two persons
let personA, personB;
let generationPersonA, generationPersonB;
let childrenOfA, childrenOfB;
let genDiff;
let relationshipofAB; // siblings, cousins, parent, child, etc.

// Count for the fibonacci sequence
let count = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200);

    // Selected family members (RANDOMIZE)
    personA = alakazam_child // Family[Math.floor(Math.random() * Family.length)];
    personB = alakazam_child // Family[Math.floor(Math.random() * Family.length)];
    generationPersonA = personA.findGeneration();
    generationPersonB = personB.findGeneration();
    childrenOfA = personA.findChildren(relatives = Family);
    childrenOfB = personB.findChildren(relatives = Family);
    lineageOfA = personA.findLineage();
    lineageOfB = personB.findLineage();
    Family.forEach(FamilyMember => {
        FamilyMember.findChildren(relatives = Family);
        FamilyMember.findLineage();
        FamilyMember.findGeneration();
        FamilyMember.draw();
        FamilyMember.depthToCommonAncestor(ancestor = getOriginalPerson(Family));
    });
    
    // Find the relationship between two random family members
    relationshipofAB = findRelationshipBetween(personA, personB);
    drawRelationshipArrow(personA, personB);
    
    // Draws the family tree
    drawFamilyTree();

    // Figure out the relationship between personA and personB and print it to the console.
    print(`${personA.name} is the ${relationshipofAB}${personB.name}`);
    

    
    // // print(personA)
    // print(`${personA.name} is in generation ${generationPersonA}`)
    // print(`${personA.name} has ${childrenOfA.length} children: ${childrenOfA.map(child => child.name).join(', ')}`)
    // print(`Lineage of ${personA.name}: ${lineageOfA.map(ancestor => ancestor.name).join(' -> ')}`)
    // // print(personB)
    // print(`${personB.name} is in generation ${generationPersonB}`)
    // print(`${personB.name} has ${childrenOfB.length} children: ${childrenOfB.map(child => child.name).join(', ')}`)
    // print(`Lineage of ${personB.name}: ${lineageOfB.map(ancestor => ancestor.name).join(' -> ')}`)
}
