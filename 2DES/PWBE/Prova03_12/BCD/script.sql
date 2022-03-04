drop database if exists Pesqueiro;
create database Pesqueiro;
use Pesqueiro;

create table pescaria(
    id integer not null primary key auto_increment,
    cidade varchar(265) not null,
    quantidade integer not null
);

insert into pescaria(cidade, quantidade) values
("Pedreira", 5),
("Amparo", 10),
("Campinas", 20),
("Ubatuba", 40),
("Pedreira", 30),
("Amparo", 20),
("Campinas", 10),
("Ubatuba", 9);

select * from pescaria;