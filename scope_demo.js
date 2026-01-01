function testVar() {
    if (true) {
        var x = "Je suis vivant !";
    }
    console.log("VAR:", x); // Fonctionne car var ignore le bloc if, il voit toute la fonction
}

function testLet() {
    if (true) {
        let y = "Je suis vivant !";
    }
    
    try {
        console.log("LET:", y); // Erreur
    } catch (error) {
        console.log("LET erreur:", error.message); // y n'existe plus ici
    }
}

console.log("--- Test VAR ---");
testVar();

console.log("\n--- Test LET ---");
testLet();
