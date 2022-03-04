package ctr;

import java.util.ArrayList;
import vo.Cliente;
import vo.dao.ClienteDAO;

public class ClienteProcess {
	
	//Atributos
	public static ArrayList<Cliente> clientes;
	public static ClienteDAO cd = new ClienteDAO();
	
	//Método para gerar dados de teste
	public static void testes() {
		clientes = new ArrayList<>();
		clientes.add(new Cliente("11111111111","Jacinto Pinto","19 70707060"));
		clientes.add(new Cliente("22222222222","Jacinto Pena","19 70707062"));
		clientes.add(new Cliente("33333333333","Jacinto Paixao","19 70707063"));
		clientes.add(new Cliente("44444444444","Jacinto Leite","19 70707064"));
		clientes.add(new Cliente("55555555555","Jacinto Rola","19 70707065"));
	}
	//Método que abre o arquivo csv
	public static void abrir() {
		clientes = cd.abrir();
	}
	//Método que abre o arquivo csv
		public static String salvar(){
			if(cd.salvar(clientes)) {
				return "<p> Salvo com sucesso! </p>";
			}else {
				return "<p> Erro ao salvar </p>";
			}
		}
}
