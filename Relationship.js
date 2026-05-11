function findRelationshipBetween(personA, personB) {
    let genDiff = abs(personA.findGeneration() - personB.findGeneration()); // Will be used for 1st, 2nd cousins once, twice removed, etc.
    let greatness = genDiff - 2; // Calculates how many times great is needed for grandparents and great grandparents.
    let timesRemoved = abs(personA.findGeneration() - personB.findGeneration()); // Will be used for cousins once, twice removed, etc.
    //  If genDiff is 2, then greatness is 0 and we don't need to add "great" to the relationship.
    //  If genDiff is 3, then greatness is 1 and we need to add "great" once to the relationship and so on.

    // Check if personA and personB are the same person.
    if (personA === personB) {
        relationshipofAB = "the same person as ";
    } 
    // Compare the common ancestor of personA and personB to determine their relationship.
    


    // Check if both personA and personB have the same oldest common ancestor.
    // if (personA !== personB) {
    //     if (genDiff === 0) {
    //         relationshipofAB = 'possibily a sibling or cousin of ';
    //     } else if (genDiff === 1) {
    //         relationshipofAB = `possibly a parent or child or nephew/niece and aunt/uncle, or 1st, 2nd, 3rd, etc. cousins ${timesRemoved} times removed of `;
    //     } else if (genDiff >= 2) {
    //         relationshipofAB = `possibly a ${"great ".repeat(greatness)}grandparent or grandchild, or 1st, 2nd, 3rd, etc. cousins ${timesRemoved} times removed of `;
    //     }
    // }


    
    
    
    



    print(`${personA.name} is ${relationshipofAB}${personB.name}`);
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

