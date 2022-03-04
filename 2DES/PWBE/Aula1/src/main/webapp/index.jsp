<%@page import="java.util.ArrayList"%>
<%@page import="control.FuncionarioControl"%>
<%@page import="model.Funcionario"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
		<link rel="stylesheet" href="styles.css">
	</head>
<body>
	<%
		FuncionarioControl fc = new FuncionarioControl();
	
		String nome = request.getParameter("nome");
		String doc = request.getParameter("documento");
		String nasc = request.getParameter("nascimento");
		String reg = request.getParameter("registro");
		String tipo = request.getParameter("tipo");
		
		if(nome != null && doc != null && nasc != null && reg != null){
			Funcionario f = new Funcionario();
			f.setNome(nome);
			f.setNascimento(Integer.parseInt(nasc));
			f.setDoc(doc);
			f.setReg(Integer.parseInt(reg));
			
			switch(tipo){
				case "0":
					fc.cadastrar(f);
					break;
				case "1":
					fc.editar(f);
					break;
				case "2":
					fc.excluir(f);
			}	
		}
	%>
	<div class="div">
		<h1>Cadastrar</h1>
		<form action="index.jsp" method="POST">
			<input type="text" name="nome" id="nome" placeholder="Nome"><br>
			<input type="text" name="documento" id="doc" placeholder="Documento"><br>
			<input type="text" name="nascimento" id="nasc" placeholder="Data de Nascimento"><br>
			<input type="text" name="registro" id="reg" placeholder="Registro"><br>
			<input type="hidden" name="tipo" value="0" id="tipo">
			<input type="submit" value="Cadastrar">
		</form>
	</div>
	<br>
	<br>
	<table>
		<thead>
			<tr>
				<th>Nome</th>
				<th>Registro</th>
				<th>Nascimento</th>
				<th>Documento</th>
			</tr>
		</thead>
		<tbody>
			<%
				ArrayList<String> data = fc.lista();
				for(String linha : data){
					String[] tmp = linha.split(";");
					out.print("<tr>");
						out.print("<td>"+tmp[0]+"</td>");
						out.print("<td>"+tmp[3]+"</td>");
						out.print("<td>"+tmp[1]+"</td>");
						out.print("<td>"+tmp[2]+"</td>");
						out.print("<td><button onclick='edita(this)'>Editar</button></td>");
						out.print("<td><button onclick='excluir(this)'>Excluir</button></td>");
					out.print("</tr>");
				}
			%>
		</tbody>
	</table>
	
</body>
<script src="script.js"></script>
</html>