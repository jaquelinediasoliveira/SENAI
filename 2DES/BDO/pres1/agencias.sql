drop database if exists agencia;
create database agencia;
use agencia;

create table vendedores(
    id_vendedor integer not null primary key auto_increment,
    nome VARCHAR
(40) not null
);

create table veiculos(
    id_veiculo integer not null primary key auto_increment,
    modelo VARCHAR
(40) not null,
    preco decimal
(9,2) not null
);

create table agencias(
    id_agencia integer not null primary key auto_increment,
    cidade VARCHAR
(40) not null,
    uf VARCHAR
(2) not null
);

create table vendas
(
    data Date not null,
    id_vendedor integer not null,
    id_veiculo integer not null,
    id_agencia integer not null,
    constraint fk_venda_vendedor foreign key (id_vendedor) references vendedores(id_vendedor),
    constraint fk_venda_veiculo foreign key (id_veiculo) references veiculos(id_veiculo),
    constraint fk_venda_agencia foreign key (id_agencia) references agencias(id_agencia)
);

show tables;

-- CRUD em mysql (INSERT INTO, SELECT, UPDATE, DELETE)

describe agencias;

insert into agencias
    (cidade, uf)
values
    ("Jaguariuna", "SP"),
    ("Pedreira", "SP"),
    ("Holambra", "SP"),
    ("Amparo", "SP"),
    ("Serra Negra", "SP");

select *
from agencias;

describe vendedores;

insert into vendedores
    (nome)
values
    ("Manuel Gomes"),
    ("Rogerio Francoso"),
    ("Rhysand da Silva"),
    ("Fernando Soares"),
    ("Astolfo Dias");

select *
from vendedores;

describe veiculos;

insert into veiculos
    (modelo, preco)
values
    ("Gol", 10000),
    ("Uno", 17000),
    ("Palio", 30000),
    ("Fox", 40000),
    ("Siena", 45000);

select *
from veiculos;

-- select nomedocampo from nomedatabela; mostra um campo especifico
-- * significa tudo

-- apaga a tabela inteira
delete from veiculos;

--altera a tabela toda
update veiculos set modelo = "Civic" ;

 --Where(Onde) Cláusula mais importante do CRUD