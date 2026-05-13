let pikachu = new FamilyMember('Pikachu', null);
let charizard = new FamilyMember('Charizard', pikachu)
let blastoise = new FamilyMember('Blastoise', pikachu)
let venusaur = new FamilyMember('Venusaur', pikachu)
let dragonite = new FamilyMember('Dragonite', charizard)
let gyarados = new FamilyMember('Gyarados', charizard)
let arcanine = new FamilyMember('Arcanine', venusaur)
let alakazam = new FamilyMember('Alakazam', blastoise)
let machamp = new FamilyMember('Machamp', dragonite)
let golem = new FamilyMember('Golem', gyarados)
let articuno = new FamilyMember('Articuno', arcanine)
let zapdos = new FamilyMember('Zapdos', arcanine)
let moltres = new FamilyMember('Moltres', alakazam)
let mewtwo = new FamilyMember('Mewtwo', golem)
let peter = new FamilyMember('Mew', golem)
let harry = new FamilyMember('Typhlosion', zapdos)
let owen = new FamilyMember('Feraligatr', alakazam)
let jerry = new FamilyMember('Meganium', alakazam)
let fred = new FamilyMember('Rayquaza', blastoise)

// New Pokemon family members
let pikachu_child1 = new FamilyMember('Electrode', charizard)
let pikachu_child2 = new FamilyMember('Lapras', blastoise)
let charizard_child = new FamilyMember('Ho-Oh', dragonite)
let blastoise_child = new FamilyMember('Lugia', alakazam)
let venusaur_child = new FamilyMember('Groudon', arcanine)
let arcanine_child = new FamilyMember('Kyogre', articuno)
let alakazam_child = new FamilyMember('Rayquaza', owen)
let machamp_child = new FamilyMember('Dialga', machamp)
let golem_child = new FamilyMember('Palkia', mewtwo)
let zapdos_child = new FamilyMember('Giratina', harry)
let mewtwo_child = new FamilyMember('Arceus', mewtwo)
let alakazam_child2 = new FamilyMember('Salamence', jerry)
let arcanine_child2 = new FamilyMember('Metagross', zapdos)

let Family = [fred, jerry, owen, pikachu, charizard, blastoise, venusaur, dragonite, gyarados, arcanine, alakazam, machamp, golem, articuno, zapdos, moltres, mewtwo, peter, harry, pikachu_child1, pikachu_child2, charizard_child, blastoise_child, venusaur_child, arcanine_child, alakazam_child, machamp_child, golem_child, zapdos_child, mewtwo_child, alakazam_child2, arcanine_child2];

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
    personA = Family[Math.floor(Math.random() * Family.length)];
    personB = Family[Math.floor(Math.random() * Family.length)];
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
    
    // Draws the family tree
    drawFamilyTree();
    // Find the relationship between two random family members
    relationshipofAB = findRelationshipBetween(personA, personB);
    drawRelationshipArrow(personA, personB);
    

    // Figure out the relationship between personA and personB and print it to the console.
    print(`${personA.name} is the ${relationshipofAB}${personB.name}`);
    

    // Calculate the depth of personA to personB and print it to the console.
    print(`the depth of ${personB.name} to ${personA.name} is ${personB.depthToCommonAncestor(personA)}`);
    // // print(personA)
    // print(`${personA.name} is in generation ${generationPersonA}`)
    // print(`${personA.name} has ${childrenOfA.length} children: ${childrenOfA.map(child => child.name).join(', ')}`)
    // print(`Lineage of ${personA.name}: ${lineageOfA.map(ancestor => ancestor.name).join(' -> ')}`)
    // // print(personB)
    // print(`${personB.name} is in generation ${generationPersonB}`)
    // print(`${personB.name} has ${childrenOfB.length} children: ${childrenOfB.map(child => child.name).join(', ')}`)
    // print(`Lineage of ${personB.name}: ${lineageOfB.map(ancestor => ancestor.name).join(' -> ')}`)
}
