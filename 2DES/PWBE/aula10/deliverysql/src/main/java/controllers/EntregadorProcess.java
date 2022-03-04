package controllers;

import java.sql.SQLException;
import java.util.ArrayList;

import dao.EntregadorDAO;
import domains.Entregador;

public class EntregadorProcess {

	public static ArrayList<Entregador> entregadores;
	public static EntregadorDAO ed;

	// Testar a conexão
	public static void main(String[] args) throws SQLException {
		ed = new EntregadorDAO();
		entregadores = ed.readAll();
		for (Entregador e : entregadores) {
			System.out.print(e.toString());
		}
	}
}