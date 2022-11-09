let container = document.getElementById("container"); 
// Definisco la variabile container associandola al corrispettivo elemento HTML


for (let i = 1; i <= 100; i++) { 
// Genera numeri da 1 a 100

  if((i%3 == 0) && (i%5 == 0)){ 

    container.innerHTML += '<div class="box fizzbuzz">FizzBuzz</div>';
    // Stampa FizzBuzz se multiplo di 3 e 5

  } else if((i%3 == 0)) { 

    container.innerHTML += '<div class="box fizz">Fizz</div>';
    // Stampa Fizz se multipplo di 3

  } else if ((i%5 == 0)) { 

    container.innerHTML += '<div class="box buzz">Buzz</div>';
    // Stampa Buzz se multipplo di 5
  } else {
    
    container.innerHTML += '<div class="box">' + i + '</div>';
    // stampa i numeri
}

}