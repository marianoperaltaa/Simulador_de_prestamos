


//TOMA DE DATOS 
class Usuario {
    constructor (nombre, apellido, edad, dni){ //Objeto que se encarga de pedir datos personales del usuario

        this.nombre = nombre;
        this.apellido = apellido; 
        this.edad = edad; 
        this.dni = dni; 

    }

        get_datos(){ //Método que muestra por consola los datos ingresados por el usuario
            console.log ("<----- DATOS DEL USUARIO ----->");
            console.log ("Nombre: ", this.nombre);
            console.log ("Apellido: ", this.apellido);
            console.log ("Edad: ", this.edad); 
            console.log ("DNI: ", this.dni); 
        }


    }


    let usuario_1 = new Usuario (prompt("Ingrese su nombre"), prompt("Ingrese su apellido"), prompt("Ingrese su edad"), prompt("Ingrese su dni")); //Se le pide al Usuario los datos personales

    if (usuario_1.edad < 18){ //Condicional que impide al usuario usar el simulador en caso de ser menor de edad

        alert ("Si sos menor de edad no podes realizar ninguna operación");


    }
    else { //Condicional que ejecuta la operación en caso de ser mayor de edad

        let monto = parseInt(prompt("Ingrese el monto que desee")); //Prompt que pide ingresar un monto
        let cuotas =parseInt(prompt("Ingrese la cantidad de cuotas en las que desee pagar: 3/6/9/12")); //Prompt que pide ingresar las cuotas


        if (cuotas == 3) { //Condicional que se encarga de agregarle el 10% de interes si el usuario eligió calcular en 3 cuotas

            let porcentaje_en_3_cuotas = valor_cuotas (monto , cuotas) * 0.10; //Toma la función "Valor_cuotas" y saca el 10% del resultado
            let pago_final = valor_cuotas (monto, cuotas) + porcentaje_en_3_cuotas; //Suma el 10% al resultado de la función "Valor_cuotas"
        
            console.log ("El valor de la cuota mensual con interes es de $" + pago_final);
        
        }
        else if (cuotas == 6) { //Condicional que se encarga de agregarle el 15% de interes si el usuario eligió calcular en 6 cuotas
        
            let porcentaje_en_6_cuotas = valor_cuotas (monto , cuotas) * 0.15; //Toma la función "Valor_cuotas" y saca el 15% del resultado
            let pago_final = valor_cuotas (monto , cuotas) + porcentaje_en_6_cuotas; //Suma el 15% al resultado de la función "Valor_cuotas"
        
            console.log ("El valor de la cuota mensual con interes es de $" + pago_final);
        
        }
        else if (cuotas == 9) { //Condicional que se encarga de agregarle el 10% de interes si el usuario eligió calcular en 9 cuotas
            let porcentaje_en_9_cuotas = valor_cuotas (monto, cuotas) * 0.20; //Toma la función "Valor_cuotas" y saca el 20% del resultado
            let pago_final = valor_cuotas (monto , cuotas) + porcentaje_en_9_cuotas; //Suma el 20% al resultado de la función "Valor_cuotas"
        
            console.log ("El valor de la cuota mensual con interes es de $" + pago_final);
        }
        else if (cuotas == 12) { //Condicional que se encarga de agregarle el 10% de interes si el usuario eligió calcular en 12 cuotas
            let porcentaje_en_12_cuotas = valor_cuotas (monto, cuotas) * 0.25; //Toma la función "Valor_cuotas" y saca el 25% del resultado
            let pago_final = valor_cuotas (monto, cuotas) + porcentaje_en_12_cuotas; //Suma el 25% al resultado de la función "Valor_cuotas"
        
            console.log ("El valor de la cuota mensual con interes es de $" + pago_final);
        }
        
        else {
            while (cuotas != 3 || cuotas != 6 || cuotas != 9 || cuotas != 12){ //Condicional que se encarga de de mandar un mensaje pr alet en caso de no haber ingresado un dato valido
        
                alert ("No se pudo calcular el valor de las cuotas");
                break;
        
            }
        }
    }


    function valor_cuotas (monto, cuotas){ //Función que divide el moto por las cuotas para obtener el valor de las cuotas sin intereses

        let pago_cuotas = monto / cuotas;
        return pago_cuotas;
        
    }


    usuario_1.get_datos(); //Muestra los datos de el usuario por consola





    alert ("Para asegurarnos de que pueda adquirir su prestamo, agregue los datos de 3 familiares o amigos cercanos para que nos podamos contactar en caso de que se atrase con el pago");

    let lista_circulo_familiar = [] //Array que guarda los datos introducidos en "circulo_familiar"

    for (let i = 0; i < 3; i++){

        let circulo_familiar = new Usuario (prompt ("Ingrese el nombre de un familiar o amigo cercano"), prompt ("Ingrese el apellido de la persona"), prompt ("Ingrese la edad de la persona"), prompt ("Ingrese el numero de DNI de la persona"));

        if (circulo_familiar.edad < 18){ //Condicional que impide registrar a menores de 18 años

            alert ("No se puede registrar a menores de edad");
            continue

        }
        else { //Condicional que pushea lo datos de "circulo_familiar" dentro del array "lista_circulo_famiiar" en caso de ser mayor de edad

            lista_circulo_familiar.push (circulo_familiar);

        }




    }


    lista_circulo_familiar.forEach (function (lista_circulo_familiar){ //Método que muestra por consola los datos de las personas agregadas

        console.log ("SE AGREGÓ CORRECTAMENTE A: " + lista_circulo_familiar.nombre+ " " + lista_circulo_familiar.apellido + " " + lista_circulo_familiar.dni);



    })
















