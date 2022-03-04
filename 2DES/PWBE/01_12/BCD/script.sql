drop database if exists JogoBicho;
create database JogoBicho;
use JogoBicho;

create table sorteio(
    id integer primary key not null auto_increment,
    bicho varchar(160) not null,
    data date not null
);

insert into sorteio(bicho, data) values 
("Galinha", "2020-12-12"),
("Hipopotamo", "2020-12-15"),
("Galinha", "2020-12-24"),
("Macaco", "2020-12-26"),
("Zebra", "2020-12-30");