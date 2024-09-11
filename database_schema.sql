create database uas_database;
use uas_database;

create table user (
    id int() primary key auto_increment,
    nama varchar(255),
    telepon varchar(12)
);

create table post (
    id int primary key auto_increment,
    judul varchar(255),
    tulisan varchar(255),
    user_id int(),
);