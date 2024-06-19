CREATE TABLE posts (
    titulo VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    horario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    img VARCHAR(255) -- Aqui você pode ajustar o tamanho conforme necessário
);