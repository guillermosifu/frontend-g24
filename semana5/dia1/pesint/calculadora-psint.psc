Proceso calculadora
	Definir numero1 Como Entero;
	Definir numero2 Como Entero;
	Definir sumar Como Entero;
	Definir resta Como Entero;
	Definir producto Como Entero;
	Definir cociente Como Entero;
	
	//Proceso 
	Escribir 'ingrese el numero ';
	Leer numero1;
	Escribir 'ingresea el segundo numero';
	Leer numero2;
	
	sumar = numero1 + numero2;
	resta = numero1 - numero2;	
	producto = numero1 * numero2;

	
	si (numero2=0) Entonces
		Escribir 'no se puede dividir entre 0';
		cociente=0;
	SiNo
		cociente = numero1 / numero2;
	FinSi
	
	
	
	
	
	
	//salida
	
	Escribir 'suma forma 1: ',(sumar);
	Escribir  'suma forma 2 :' , numero1 +numero2;
	Escribir 'resta' , (resta);
	Escribir 'producto' , (producto);
	Escribir 'cociente' , (cociente);
	
	
FinProceso
