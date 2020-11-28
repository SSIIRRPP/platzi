menu = """
Bienvenido al conversor de monedas.

Elige una opción: 

1 - Pesos colombianos
2 - Pesos argentinos
3 - Pesos mexicanos

"""
opcion = int(input(menu))

if opcion == 1:
    pesos = input("¿Cuántos pesos tienes? ")
    pesos = float(pesos)
    valor_dolar = 3875
    dolares = pesos / valor_dolar
    dolares = round(dolares, 2)
    dolares = str(dolares)
    print("Tienes $" + dolares + " dolares")
elif opcion == 2:
    pesos = input("¿Cuántos pesos tienes? ")
    pesos = float(pesos)
    valor_dolar = 65
    dolares = pesos / valor_dolar
    dolares = round(dolares, 2)
    dolares = str(dolares)
    print("Tienes $" + dolares + " dolares")
elif opcion == 3:
    pesos = input("¿Cuántos pesos tienes? ")
    pesos = float(pesos)
    valor_dolar = 24
    dolares = pesos / valor_dolar
    dolares = round(dolares, 2)
    dolares = str(dolares)
    print("Tienes $" + dolares + " dolares")
else:
    print("Por favor, introduce una opción válida.")


