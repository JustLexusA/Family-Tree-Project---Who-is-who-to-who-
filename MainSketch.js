function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200);
    // Create family members  
    let john = new FamilyMember('John', null, 'male');

    // Add family members to the family array
    Family.push(john);
    print(Family);
}

function draw() {
    background(200);
}