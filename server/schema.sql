DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  ID INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50),
  PRIMARY KEY (ID)
);


CREATE TABLE rooms (
  ID INT NOT NULL AUTO_INCREMENT,
  roomName VARCHAR(50),
  PRIMARY KEY (ID)
);

CREATE TABLE messages (
  ID INT NOT NULL AUTO_INCREMENT,
  messageBody VARCHAR(250),
  userID INT,
  roomID INT,
  PRIMARY KEY (ID),
  FOREIGN KEY (userID) REFERENCES users(ID),
  FOREIGN KEY (roomID) REFERENCES rooms(ID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

