CREATE TABLE ranks (
    id INT NOT NULL AUTO_INCREMENT,
    points int,
    game int,
    wins int
    PRIMARY KEY(id) 
);

alter table ranks add FOREIGN KEY (lastRoom) REFERENCES rooms(id)