package controllers;

import java.sql.SQLException;
import java.util.ArrayList;

import dao.ClienteDAO;
import domains.Cliente;

public class ClienteProcess {
	
	public static ArrayList<Cliente> clientes;
	public static ClienteDAO cd = new ClienteDAO();

	public static void carregarLista() throws SQLException {
		clientes = cd.readAll();
		}
}