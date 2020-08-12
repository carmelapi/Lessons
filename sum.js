document.querySelector ("#buttonPrincipale").addEventListener ("click", () => {
    let a = document.querySelector ("#firstNumber").value;
    let b = document.querySelector ("#secondNumber").value;

    a = parseInt(a);
    b = parseInt(b);

    let somma = a + b;
    let sommaHtml = document.querySelector ("#somma");
    sommaHtml.value = somma;

    
});

document.querySelector ("#buttonTwo").addEventListener ("click", () => {
    let a = document.querySelector ("#firstNumber").value;
    let b = document.querySelector ("#secondNumber").value;

    a = parseInt(a);
    b = parseInt(b);

    let differenza = a - b;
    let diffenzaHtml = document.querySelector ("#diff");
    diffenzaHtml.value = differenza;
});

