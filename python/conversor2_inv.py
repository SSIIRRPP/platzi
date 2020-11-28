dolares = input("¿Cuántos dólares tienes? ")
dolares = float(dolares)
valor_euro_dolar = 1 / 0.85
euros = dolares / valor_euro_dolar
euros = round(euros, 2)
euros = str(euros)
print("Tienes €" + euros + " euros.")