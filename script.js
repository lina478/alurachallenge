//variables
let textareaEntrada = document.getElementById("textarea-entrada");
let textareaSalida = document.getElementById("textarea-salida");
let texto;
let resultado;

//funcion para  encriptar

function encriptar() {
    if (textareaEntrada && textareaSalida) {
         texto = textareaEntrada.textContent;
         resultado = texto.replace(/(e|o|i|a|u)/g, match => {
            switch(match) {
                case 'o': return 'ober';
                case 'a': return 'ai';
                case 'i': return 'imes';
                case 'u': return 'ufat';
                case 'e': return 'enter';
                default: return match;
            }
        });
        textareaSalida.textContent = resultado;
    } else {
        console.error("Problemas :)");
    }
}

//funcion para  desencriptar
function desencriptar() {
    if (textareaEntrada && textareaSalida) {
         texto = textareaEntrada.textContent;
         resultado = texto.replace(/(enter|ober|imes|ai|ufat)/g, match => {
            switch(match) {
                case 'ai': return 'a';
                case 'enter': return 'e';
                case 'ober': return 'o';
                case 'imes': return 'i';     
                case 'ufat': return 'u';
                default: return match;
            }
        });
        textareaSalida.textContent = resultado;
    } else {
        console.error("Problemas :)");
    }
}

//funcion para  copiar
function copiarTexto() {
    if (textareaSalida) {
         texto = textareaSalida.textContent.trim();

        if (texto === "") {
            console.log('No hay texto para copiar.');
            return;
        }
        
        navigator.clipboard.writeText(texto)
            .then(() => {
                console.log('Texto copiado al portapapeles');
                
            })
            .catch(err => console.error('Error al copiar texto: ', err));
    } else {
        console.error('No se encontró el elemento textarea-salida');
    }
}



