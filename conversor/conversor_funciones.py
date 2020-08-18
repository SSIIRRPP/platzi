menu = """
Bienvenido al conversor de monedas.

Elige una opción: 

1 - Pesos colombianos
2 - Pesos argentinos
3 - Pesos mexicanos

"""
opcion = int(input(menu))

pesos = input("¿Cuántos pesos tienes? ")
pesos = float(pesos)

valor_dolar_pesos_colombianos = 3875
valor_dolar_pesos_argentinos = 65
valor_dolar_pesos_mexicanos = 24

def conversor(moneda):
    dolares = pesos / moneda
    dolares = round(dolares, 2)
    dolares = str(dolares)
    print("Tienes $" + dolares + " dolares")

if opcion == 1:
    conversor(valor_dolar_pesos_colombianos)
elif opcion == 2:
    conversor(valor_dolar_pesos_argentinos)
elif opcion == 3:
    conversor(valor_dolar_pesos_mexicanos)
else:
    print("Por favor, introduce una opción válida.")


