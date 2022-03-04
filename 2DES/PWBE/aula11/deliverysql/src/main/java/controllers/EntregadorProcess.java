package controllers;

import java.sql.SQLException;
import java.util.ArrayList;

import dao.EntregadorDAO;
import domains.Entregador;

public class EntregadorProcess {
	
	public static ArrayList<Entregador> entregadores;
	public static EntregadorDAO ed = new EntregadorDAO();
	
	public static void carregarLista() throws SQLException {
		entregadores = ed.readAll();
		}
}