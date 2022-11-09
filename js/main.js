// numeri da 1 a 100

for (var i = 1; i < 101; i++) {
    // se i diviso 15 da come resto 0 è divisibile per 3 e 5
    if (i % 15 == 0) console.log("divisiible per 3 e 5");
    // se i diviso 3 da come resto 0 è divisibile per 3
    else if (i % 3 == 0) console.log("divisibile3");
    // se i diviso 5 da come resto 0 è divisibile per 5
    else if (i % 5 == 0) console.log("dibisibile5");
   
}