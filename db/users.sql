CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    name char(60) NOT NULL, 
    email char(80) NOT NULL,
    password text,
    idRank integer,
    useRoom integer,
    PRIMARY KEY(id) 
);

ALTER TABLE users add FOREIGN KEY(idRank) REFERENCES ranks(id)

ALTER TABLE users add FOREIGN KEY(useRoom) REFERENCES rooms(id)
