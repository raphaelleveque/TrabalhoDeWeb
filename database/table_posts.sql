CREATE TABLE posts (
    titulo VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    horario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    img VARCHAR(255) 
);

CREATE TABLE login (
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    access_token VARCHAR(255)
);


CREATE PROCEDURE CadastraUser(p_email VARCHAR(255), p_password VARCHAR(255))
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        select NULL;
    END;
    
    SET @password_hash = SHA2(p_password, 256);    
    SET @new_token = UUID();
    
    INSERT INTO login (email, password_hash, access_token) VALUES (p_email, @password_hash, @new_token);
    
    Select @new_token as token;
END 

CREATE PROCEDURE LogarUser( p_email VARCHAR(255), p_password VARCHAR(255)
)
BEGIN
    DECLARE user_count INT;

    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        SELECT NULL;
    END;

    SET @password_hash = SHA2(p_password, 256);
    SET @new_token = UUID();

    SELECT COUNT(*) INTO user_count
    FROM login
    WHERE email = p_email AND password_hash = @password_hash;

    IF user_count > 0 THEN
        UPDATE login 
        SET access_token = @new_token 
        WHERE email = p_email AND password_hash = @password_hash;

        SELECT @new_token AS token;
    ELSE
        SELECT NULL;
    END IF;
END 

