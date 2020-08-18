euros = input("¿Cuántos euros tienes? ")
euros = float(euros)
valor_dolar_euro = 0.85
dolares = euros / valor_dolar_euro
dolares = round (dolares, 2)
dolares = str(dolares)
print("Tienes $" + dolares + " dólares.")