
function segura() {
  txt = prompt("Cual es tu contraseña");

  cv = 0; 
  ccc = 1;
  ant = "x";
  for (x = 0; x < txt.length; x = x + 1) {
    if (txt[x] == "a") {
      cv = cv + 1; 
    } else {
      if (txt[x] == 'e') {
        cv = cv + 1;
      } else {
        if (txt[x] == 'i') {
          cv = cv + 1;
        } else {
          if (txt[x] == 'o') {
            cv = cv + 1;
          } else {
            if (txt[x] == 'u') {
              cv = cv + 1;
            } else {
              cv = 0;
            }
          }
        }
      }
    }

    if (cv >= 3) {
      x = txt.length + 1;
    }

    if (x > 0) {
      x = txt.length + 1;
      ccc = ccc + 1; /* ccc es control de caracteres consecutivos */
    }

    ant = txt[x];
  }

  if (cv >= 3) {
    document.getElementById("seg").innerHTML = "NOOOO segura +3v";
  } else {
    if ((ccc) => 2) {
      document.getElementById("seg").innerHTML = " no segura 2cc";
    } else {
      document.getElementById("seg").innerHTML = "segura";
    }
  }
}

/* este es un ejemplo de como funciona el codigo sin necesidad de tener que 
poner las filas de if y del else. condicion1 y condicion2 en codigo es c1&&c2, 
condicion 1 o condicion 2 en codigo es c1||c2 (para mayor ejemplo revisar capturas)

if(txt[x]=='a' || txt [x] =='e'|| txt [x] =='i' ||txt [x] =='o' || txt [x] =='u')*/
