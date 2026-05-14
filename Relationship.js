function findRelationshipBetween(personA, personB) {
    let genA = personA.findGeneration();
    let genB = personB.findGeneration();
    let genDiff = abs(genA - genB); // Will be used for 1st, 2nd cousins once, twice removed, etc.
    let parentgreatness = genDiff - 2; // Calculates how many times great is needed for grandparents and great grandparents.
    let timesRemoved = abs(genA - genB); // Will be used for cousins once, twice removed, etc.
    //  If genDiff is 2, then greatness is 0 and we don't need to add "great" to the relationship.
    //  If genDiff is 3, then greatness is 1 and we need to add "great" once to the relationship and so on.

    // Check if personA and personB are the same person.
    if (personA === personB) {
        return "the same person as ";
    } 

<<<<<<< HEAD
    // Checks if the depth from personA to personB is -1
    if (personA.depthToCommonAncestor(personB) >= 0) {
        if (genDiff === 0) {
            return 'sibling of ';
        }
    }

=======
    // Calculate depth of personA to personB then print to console.
    let depthAtoB = personA.depthToCommonAncestor(personB);
    let depthBtoA = personB.depthToCommonAncestor(personA);
    let mainDepthValue = 0;

    // If both depths are -1, they are not directly related, but if only one is -1, then they are related.
    if (depthAtoB == -1 && depthBtoA != -1) {
        mainDepthValue = depthBtoA;
    } else if (depthBtoA == -1 && depthAtoB != -1) {
        mainDepthValue = depthAtoB;
    } else if (depthAtoB == -1 && depthBtoA == -1) {
        mainDepthValue = depthAtoB // or depthBtoA, they are both -1 (Not DIRECTLY related)
    }
    // If both are -1, check if they have a common ancestor through their lineage. If they do,
    // then one of them is an uncle/aunt or nephew/niece of the other
    // If they don't have a common ancestor, then they are just cousins, at least in this family tree.
    if (mainDepthValue == -1) {
        let count = 0;
        
        if (genA > genB) {
            let commonAncestor = personA.parent;
            if (count <= genDiff + 1) {
                commonAncestor = commonAncestor.parent;
                count++;
            } 
            
        }
    }


    print(`The depth of ${personA.name} to ${personB.name} is ${mainDepthValue}`);
>>>>>>> eb5b7212190ac40f4599d49b1d51111f8588a610

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
}

function getOriginalPerson(relatives) {
    for (let i = 0; i < relatives.length; i++) {
    let currentPerson = relatives[i];
        while (currentPerson.parent !== null) {
            currentPerson = currentPerson.parent;
        }
        return currentPerson;
    }
    return null; // No original person found???
}

