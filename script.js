function consigueDatos()
{
    const input_x2 = document.getElementById("x_cuadratica");
    const x_2 = input_x2.value;

    const input_x = document.getElementById("x_lineal");
    const x_1 = input_x.value;

    const input_c = document.getElementById("c_independiente");
    const x_0 = input_c.value;

    const res = resuelveEcuacion(x_2,x_1,x_0)
    alert(res);
    
}

function resuelveEcuacion(x_2,x_1,x_0)
{
    let res,aux,res1;
    aux = (x_1 * x_1) + 4 * x_2 * x_0;  
    res = (-x_2 + Math.sqrt(aux))/(2 * x_2);
    res1 = (-x_2 - Math.sqrt(aux))/(2 * x_2);
    return res,res1;
}