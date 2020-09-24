SELECT *
FROM usuarios
	 LEFT JOIN posts ON CAST(usuarios.id AS DOUBLE) = CAST(posts.usuario_id AS DOUBLE)
WHERE posts.usuario_id IS NULL
UNION 
SELECT *
FROM usuarios
	RIGHT JOIN posts ON CAST(usuarios.id AS DOUBLE) = CAST(posts.usuario_id AS DOUBLE)
WHERE posts.usuario_id IS NULL;