create database multiGames;

use multiGames;

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    name char(60) NOT NULL, 
    email char(80) NOT NULL,
    password text,
    idRank integer,
    useRoom integer,
    data date,
    PRIMARY KEY(id) 
);

CREATE TABLE ranks (
    id int NOT NULL AUTO_INCREMENT,
    points int,
    game int NOT NULL,
    wins int,
    data date,
    PRIMARY KEY (id) 
);

CREATE TABLE rooms (
    id int NOT NULL AUTO_INCREMENT,
    game int not null,
    PRIMARY KEY (id)
);

create table games (
    id int NOT NULL AUTO_INCREMENT,
    nameGame text not null,
    rounds int,
    limitPlayers int not null,
    minimalPlayer int not null, 
    PRIMARY KEY (id)
);

ALTER TABLE users add FOREIGN KEY(idRank) REFERENCES ranks(id);

ALTER TABLE users add FOREIGN KEY(useRoom) REFERENCES rooms(id);

ALTER TABLE rooms add FOREIGN KEY(game) REFERENCES games(id);

alter table ranks add FOREIGN KEY (game) REFERENCES rooms(id)