with open("./datos.sql", "r") as f:
    texto = f.read()
    texto2 = texto.replace('platziblog.', 'platziblog' + "`" + "." + "`")
    texto3 = texto.replace("`" + "," + "`", "`" + ", " + "`")

with open("./datos.sql", 'w') as f2:
    f2.write(texto3)