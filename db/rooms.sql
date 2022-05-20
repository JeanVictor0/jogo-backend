CREATE TABLE rooms (
    id NOT NULL AUTO_INCREMENT,
    usersEnter int,
    game text,
    PRIMARY KEY (id)
);

FOREIGN KEY (users) add REFERENCES users(id)