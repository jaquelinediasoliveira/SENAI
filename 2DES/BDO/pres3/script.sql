drop database if exists delivery;
create database delivery;
use delivery;

create table clientes(
    id_cliente integer not null primary key auto_increment,
    nome VARCHAR(40) not null,
    endereco VARCHAR(70) not null
);

create table produtos(
    id_produto integer not null primary key auto_increment,
    produto VARCHAR(30) not null
);

create table info_ped(
    id_cliente integer not null,
    id_produto integer not null,
    datinha Date not null,
    hr_pedido time not null,
    hr_entrega time ,
    hr_fim time 
);

show tables;

describe clientes;
describe produtos;
describe info_ped;

alter table info_ped add
constraint fk_inf_cli FOREIGN key (id_cliente)
references clientes(id_cliente);

alter table info_ped add
constraint fk_inf_prod FOREIGN key (id_produto)
references produtos(id_produto);

insert into clientes(nome, endereco) values
 ("Yara Mattos", "Av. 7 de setembro, Jardim Brasil, Nova Odessa, SP"),
 ("Sara Filho", "Rua dos Trabalhadores, Jardim Brasil, Nova Odessa, SP"),
 ("Ivone Bispo", "Paesa Ivone Souza, Parque das Flores, Campinas, SP"),
 ("Gisele Martim Souza", "Rua do selascar, Parque das Flores, Jaguariuna, SP"),
 ("Keli Silva", "Rua das Flores, Parque das Flores, Amparo, SP"),
 ("Keli Oliveira", "Av. 7 de setembro, Centro, Americana, SP"),
 ("Pedro Martins", "Rua das Rosas, Parque das Flores, Campinas, SP"),
 ("Valaoria de Souza Sobrinho", "Rua do Mel, Jardim SÃ£o Paulo, Nova Odessa SP"),
 ("Zaolia Bispo", "Av. Paulista Jardim, Sao Paulo, Pedreira, SP"),
 ("Paula Mattos", "Rua Pedro Silva Martins, Parque das Flores, Campinas, SP"),
 ("Xailo Alves Filho", "Rua Pedro Silva Martins, Jardim Sao Paulo, Americana, SP"),
 ("Willian Custodio de Oliveira", "Praca dos Trabalhadores, Parque das Flores, Amparo, SP");

 insert into produtos(produto) values 
("Refrigerante 2L"),
("X-Bacon"),
("X-Frango"),
("Refrigerante Lata"),
("X-Tudo"),
("Refrigerante Lata"),
("X-Frango"),
("X-Tudo"),
("X-Burguer"),
("Refrigerante Lata"),
("Refrigerante Lata"),
("X-Burguer");

insert into info_ped(id_cliente, id_produto, datinha) values
("1", "1", "2021-09-27"),
("2", "2", "2021-09-27"),
("3", "3", "2021-09-27"),
("4", "4", "2021-09-27"),
("5", "5", "2021-09-27"),
("6", "6", "2021-09-27"),
("7", "7", "2021-09-27"),
("8", "8", "2021-09-27"),
("9", "9", "2021-09-27"),
("10", "10", "2021-09-27"),
("11", "11", "2021-09-27"),
("12", "12", "2021-09-27");

UPDATE info_ped set hr_pedido = "11:10";
update info_ped set hr_entrega = "11:59:33";
update info_ped set hr_fim = "12:10";

select * from clientes;
select * from produtos;
select * from info_ped;