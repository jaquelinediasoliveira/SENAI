A=eval(input('peso='))
B=eval(input('altura='))
imc=A/(B)**2
if imc<=18.5:
	print("Abaixo do peso")
elif 18.5<=imc<=25:
	print("Peso normal")
elif 25<=imc<=30:
	print("Acima do peso")
else:
	print("Obeso")