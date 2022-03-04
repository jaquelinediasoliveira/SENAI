drop database if exists society;
create database society;
use society;

create table jogadores(
    cpf varchar(12) not null primary key,
    nome varchar(50) not null,
    telefone varchar(14)
);

create table grupos(
    id integer not null,
    dia_semana varchar(7) not null,
    horario Time not null,
    constraint pk_id primary key (id)
);

create table joga(
    cpf varchar(12) not null,
    id integer not null
);

alter table joga
add constraint fk_cpf
foreign key (cpf) references jogadores(cpf)
on delete cascade
on update cascade;

alter table joga
add constraint fk_id
foreign key (id) references grupos(id)
on delete cascade
on update cascade;

show databases;
show tables;
describe jogadores;
describe grupos;
describe joga;