CREATE DATABASE chat_room_db;
USE chat_room_db;

CREATE TABLE Usuarios(
    IdUsuario INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Usuario VARCHAR(200),
    UltimoAcceso TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Imagen VARCHAR(200)    
);

CREATE TABLE Chats(
    IdChat INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    CreadoPor INT(11),
    Cliente INT(11),
    FechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (CreadoPor) REFERENCES Usuarios(IdUsuario),
    FOREIGN KEY (Cliente) REFERENCES Usuarios(IdUsuario)
);
CREATE TABLE UsuariosChats(
    IdUsuarioChat INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    IdChat INT(11),
    IdUsuario INT(11),    
    FOREIGN KEY (IdChat) REFERENCES Chats (IdChat),
    FOREIGN KEY (IdUsuario) REFERENCES Usuarios(IdUsuario)
);
CREATE TABLE ChatRoom(
    IdChatRoom INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    IdChat INT(11),
    IdUsuario INT(11),
    Comentario TEXT,
    Fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,    
    LeidoInd INT(1),
    FOREIGN KEY (IdChat) REFERENCES Chats (IdChat),
    FOREIGN KEY (IdUsuario) REFERENCES Usuarios(IdUsuario)
);
 
