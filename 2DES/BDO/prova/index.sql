drop database if exists locadora;
create database locadora;
use locadora;

create table veiculos
(
    placa varchar(7) not null primary key,
    modelo varchar(40) not null,
    marca varchar(30) not null,
    cor varchar(20) not null,
    valor_diaria decimal(10,2) not null,
    ano integer not null,
    tipo varchar(40)
);

create table locacao(
    id integer not null primary key auto_increment,
    data_retirada Date not null,
    data_devolucao Date not null,
    obs varchar(80) not null,
    valor_efetivo decimal(10,2) not null
);

create table cliente
(
    cpf varchar(11) not null primary key,
    nome varchar(40) not null,
    email varchar(50) not null
);

create table endereco
(
    cpf varchar(11) not null,
    logradouro varchar(80) not null,
    bairro varchar(80) not null,
    cidade varchar(80) not null,
    uf varchar(2) not null
);

create table telefone
(
    cpf varchar(11) not null,
    telefone varchar(9) not null
);

--alter table veiculos
--add constraint fk_locacao_veiculos 
--FOREIGN key (id) references locacao(id)
--on update cascade;

describe veiculos;
insert to veiculos (placa, modelo, marca, cor, valor_diaria, ano, tipo) values ("hsv999", "Seila", "hhhh", "azul", 200.00, 2003, "kkkk"), ("jev777", "Saff", "hhhh", "azul", 300.00, 2001, "kiiii");
select * from veiculos;

describe locacao;
insert to locacao ( data_retirada, data_devolucao, valor_efetivo) values ("17/02/2021", "22/03/2021", 600.00), ("10/02/2021", "23/03/2021", 00.00);
select * from locacao;