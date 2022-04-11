

function consigueDatos()
{
    const input_x2 = document.getElementById("x_cuadratica");
    const x_2 = input_x2.value;

    const input_x = document.getElementById("x_lineal");
    const x_1 = input_x.value;

    const input_c = document.getElementById("c_independiente");
    const x_0 = input_c.value;

    const res = resuelveEcuacion(x_2,x_1,x_0)
  
    
}

function resuelveEcuacion(x_2,x_1,x_0)
{
    const resultP = document.getElementById("resultadoP")
    var  aux;
    aux = Math.pow(x_1,2) + (4 * x_2 * x_0);  
    console.log(aux)
    if (aux < 0)
    {
        aux = Math.abs(aux);
        const [res,res1] = FormulaGeneral(aux,x_2);
        alert("Las raíces no son reales");
        resultP.innerText = "x = " + res +"i," + res1 + "i" ;
    }
    else
    {
        const [res,res1] = FormulaGeneral(aux,x_2)
     
        resultP.innerText = "x = " + res +","+ res1 ;
    }
}

function FormulaGeneral(aux,x_2)
{
    var res,res1;
    res = (-x_2 + Math.sqrt(aux))/(2 * x_2);
    res1 = (-x_2 - Math.sqrt(aux))/(2 * x_2);
    console.log("res = " + res + "res1 =" + res1);
    return [res,res1];
}