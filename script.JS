let numerador =promt ('Digite o numerador da divisão... ');
let divisor =promt ('Digite o divisor da divisão... ');

let resultado = numerador / divisor

if (divisor == 0) 
{
    alert ('Não é possível dividir por 0');
}
else if (numerador == 0 )
{ 
    alert ('O resulado é 0');
}
else 
{
    alert (`O rsultado dessa divisão é ${resultado}`);
}