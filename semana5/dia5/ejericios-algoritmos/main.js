function callMenu(){
    let nro_ejercicio = parseInt(
        prompt("iingrese el numero de ejercicio que quiere ejecutar: \r\n 1.suma. \r\n 2.Promedio de Examanes \r\n 3. Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.calcular el area del Circulo \r\n 6. Calcular salario semanal \r\n 7. convertir pulgadas \r\n 8. cambiar a dolares \r\n 14. calcular focosngrese el numero de ejercicio que quiere resolver ")
    );
    if(isNaN(nro_ejercicio)){
        alert("porfavor ingresa valores numericos")
    }else(
        MenuEjercicios(nro_ejercicio)
    )
}


function MenuEjercicios(nro_ejercicio){
    switch(nro_ejercicio){
        case 1:
            let valor1 = parseFloat(prompt("ingrese el valor 1 a sumar"))
            let valor2 = parseFloat(prompt("ingrese el valor 2 a sumar"))
            alert(ej1_sumarValores(valor1,valor2))
    }
}


function ej1_sumarValores(a,b){
    if(isNaN(a) || isNaN(b)){
        return "porfavor ingresa valores "
    }else{
        return a+b;
    }
}