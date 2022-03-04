drop database if exists locadora;
create database locadora;
charset = UTF8 collate = utf8_general_ci;
use locadora;

create table veiculos
(
    placa varchar(8) not null primary key,
    modelo varchar(30) not null,
    marca varchar(30) not null,
    cor varchar(20) not null,
    valor_diaria decimal(6,2) not null,
    ano integer(4) not null,
    tipo varchar(15) not null
);

create table locacoes(
     id integer not null primary key auto_increment,
     data_retirada Date not null,
     data_devolucao Date,
     obs varchar
(100),
     valor_efetivo decimal
(7,2)
);

create table clientes
(
    cpf varchar(12) primary key not null,
    nome varchar(50) not null,
    endereco varchar(100) not null,
    email varchar(70)
);

create table telefones
(
    cpf varchar(12) not null,
    telefone varchar(11) not null,
    constraint fk_tel_cli foreign key (cpf) references clientes(cpf)
    on delete CASCADE
    on update cascade
);

show tables;

alter table locacoes ADD
placa varchar(8) not null;

alter table locacoes ADD
constraint  fk_loc_vei foreign key (placa)
references veiculos (placa)
on update cascade;

alter table locacoes ADD
cpf varchar(12) not null;

alter table locacoes ADD
constraint fk_loc_cli foreign key (cpf)
references clientes (cpf)