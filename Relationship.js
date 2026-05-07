function findRelationshipBetween(personA, personB) {
    let genDiff = abs(personA.findGeneration() - personB.findGeneration()); // Will be used for 1st, 2nd cousins once, twice removed, etc.
    let greatness = genDiff - 2; // Calculates how many times great is needed for grandparents and great grandparents.
    let timesRemoved = abs(personA.findGeneration() - personB.findGeneration()); // Will be used for cousins once, twice removed, etc.
    //  If genDiff is 2, then greatness is 0 and we don't need to add "great" to the relationship.
    //  If genDiff is 3, then greatness is 1 and we need to add "great" once to the relationship and so on.

    // Check if personA and personB are the same person.
    if (personA === personB) {
        relationshipofAB = "the same person as";
    } 

    // Check if personA is from the same lineage as personB.
     if (personA.findLineage().includes(personB)) {
        if (genDiff === 1) {
            relationshipofAB = "parent of";
        }
    }
    
    



    print(`${personA.name} is the ${relationshipofAB} ${personB.name}`);
}

function getOriginalPerson(relatives) {
    for (let i = 0; i < relatives.length; i++) {
    let currentPerson = relatives[i];
        while (currentPerson.parent !== null) {
            currentPerson = currentPerson.parent;
        }
    return currentPerson;
    }
}

