<%@page import="ctr.ClienteProcess"%>
<%@page import="vo.Cliente"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="estilo.css">
<meta charset="UTF-8">
<title>Lista com todos os clientes (READ)</title>
</head>
<body>
	<div>
		<button onclick="cadastro.jsp">Cadastrar Novo</button>
		<button onclick="editar.jsp">Alterar ou Remover</button>
	</div><br>
	<table style='border: solid 1px'>
		<tr>
			<th>CPF</th>
			<th>Nome</th>
			<th>Telefone</th>
		</tr>
		<%
		ClienteProcess.abrir();
		for (Cliente c : ClienteProcess.clientes) {
			out.print(c.toHTML());
		}
		out.print(ClienteProcess.salvar());
		%>
	</table>
</body>
</html>