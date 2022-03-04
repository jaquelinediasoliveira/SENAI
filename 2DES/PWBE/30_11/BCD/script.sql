drop database if exists biblioteca;
create database biblioteca;
use biblioteca;

create table reservas(
    id integer not null primary key auto_increment,
    nome_livro varchar(100) not null,
    nome_pessoa varchar(265) not null,
    data_devolucao Date not null
);