S = int(input("Salario:"))

P = int(input("Parcelas:"))

V = int(input("Valor do emprestimo:"))

Parcela = V//P

if Parcela<=S*0.3:

    print("Aprovado")

else:

    print("Negado")