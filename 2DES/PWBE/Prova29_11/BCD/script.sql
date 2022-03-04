drop database if exists Contabilidade;
create database Contabilidade;
use Contabilidade;

 create table funcionarios(
    matricula integer primary key not null,
    nome_completo varchar(256) not null,
    data_desligamento Date not null,
    ultimo_salario decimal(9,2) not null
);

insert into funcionarios(matricula, nome_completo, data_desligamento, ultimo_salario) values (201901, "Alfredo Santos", "2020-01-13", 2525.00), (201902, 'Amanda Alves', '2020-05-28', 3507.00);
-- LOAD DATA INFILE 'C:/Users/DESENVOLVIMENTO/Desktop/Provas/Back29_11/BCD/funcionarios.csv'
-- INTO TABLE funcionarios
-- FIELDS TERMINATED BY ';'
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\r\n'
-- IGNORE 1 ROWS;

select * from funcionarios;