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
let mew = new FamilyMember('Mew', golem)
let typhlosion = new FamilyMember('Typhlosion', zapdos)
let feraligatr = new FamilyMember('Feraligatr', alakazam)
let meganium = new FamilyMember('Meganium', alakazam)
let rayquaza = new FamilyMember('Rayquaza', blastoise)

// New Pokemon family members
let electrode = new FamilyMember('Electrode', charizard)
let lapras = new FamilyMember('Lapras', blastoise)
let hooh = new FamilyMember('Ho-Oh', dragonite)
let lugia = new FamilyMember('Lugia', alakazam)
let groudon = new FamilyMember('Groudon', arcanine)
let kyogre = new FamilyMember('Kyogre', articuno)
let rayquaza2 = new FamilyMember('Rayquaza', feraligatr)
let dialga = new FamilyMember('Dialga', machamp)
let palkia = new FamilyMember('Palkia', mewtwo)
let giratina = new FamilyMember('Giratina', typhlosion)
let arceus = new FamilyMember('Arceus', mewtwo)
let salamence = new FamilyMember('Salamence', meganium)
let metagross = new FamilyMember('Metagross', zapdos)

let Family = [rayquaza, meganium, feraligatr, pikachu, charizard, blastoise, venusaur, dragonite, gyarados, arcanine, alakazam, machamp, golem, articuno, zapdos, moltres, mewtwo, mew, typhlosion, electrode, lapras, hooh, lugia, groudon, kyogre, rayquaza2, dialga, palkia, giratina, arceus, salamence, metagross];

// Variables to store and compare the two persons
let personA, personB;
let genA, genB;
let childrenOfA, childrenOfB;
let genDiff;
let relationshipofAB; // siblings, cousins, parent, child, etc.

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200);

    // Selected family members (RANDOMIZE)
    personA = Family[Math.floor(Math.random() * Family.length)];
    personB = Family[Math.floor(Math.random() * Family.length)];
    // Selected family members (MANUAL)
    // personB = dragonite;
    // personA = mew;
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
}
