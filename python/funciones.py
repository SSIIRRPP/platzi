# def imprimir_mensaje():
#     print("Mensaje especial: ")
#     print("¿Estoy aprendiendo a usar funciones!")


# imprimir_mensaje()
# imprimir_mensaje()
# imprimir_mensaje()

def conversacion():
    print("Hola")
    print("¿Cómo estás?")
    print("Elegiste la opcion " + str(opcion))
    print("Adiós pelotudo")

def conversacion2(mensaje):
    print("Hola")
    print("¿Cómo estás?")
    print(mensaje)
    print("Adiós pelotudo")    


opcion = int(input("Elige una opción (1, 2 o 3): "))

if opcion == 1:
    conversacion()
elif opcion == 2:
    conversacion()
elif opcion == 3:
    conversacion()
else:
    print("Elige una opción correcta, pendejo")
print("")
print("Separación ;)")
print("")

if opcion == 1:
    conversacion2("Elegiste la opción 1")
elif opcion == 2:
    conversacion2("Elegiste la opción 2")
elif opcion == 3:
    conversacion2("Elegiste la opción 3")
else:
    print("Elige una opción correcta, pendejo")