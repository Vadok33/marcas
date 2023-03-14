
      function adivinar(numero) {
        var acierto = Math.floor(Math.random() * 4) + 1;
        if (numero == acierto) {
          document.getElementById('resultado').innerHTML = '¡Has acertado!';
        } else {
          document.getElementById('resultado').innerHTML = 'El numero correcto es ' + acierto;
        }
      }
      function reiniciar(){
        document.getElementById('resultado').innerHTML = "";
      }