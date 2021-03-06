package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.stream.Collectors;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import controllers.PedidoProcess;
import domains.Pedido;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/pedidos")
public class PedidoHttp extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// Configurações
		PrintWriter out = resp.getWriter();// Configurar a saida de resto resp
		resp.setContentType("application/json"); // Configura a resposta no formato JSON
		resp.setCharacterEncoding("utf8");// Configura o charset
		
		// Lendo os dados do BD "CSV"
		PedidoProcess.abrir();

		//Recebendo dados por Parâmetros
		String id = req.getParameter("id"); // Recebe um "parâmetro" via URI "?id=2"
		String nome = req.getParameter("nome");
		if (id != null) {// Verifica se chegou o parâmetro "id"
			if (PedidoProcess.pedidos.contains(new Pedido(id))) {
				int indice = PedidoProcess.pedidos.indexOf(new Pedido(id));// Obtem o indice
				out.print(PedidoProcess.pedidos.get(indice).toJSON());
			} else {
				resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
				//out.print("{ \"erro\": \"Id não encontrado\" }");
			}
		} else if(nome != null){
			for(Pedido p: PedidoProcess.pedidos) {
				if(p.getCliente().contains(nome)) {
					resp.getWriter().print(p.toJSON().toString());
				}else {
					resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
				}
			}
		}else {
			JSONArray vetor = new JSONArray(); // Cria um vetor para armazenar cada obj json
			for (Pedido p : PedidoProcess.pedidos) {
				vetor.put(p.toJSON());// Preenche o vetor
			}
			out.print(vetor);// Mostra o vetor
		}
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter out = resp.getWriter();// Configurar a saida de resto resp
		resp.setContentType("application/json"); // Configura a resposta no formato JSON
		resp.setCharacterEncoding("utf8");// Configura o charset
		// Lendo os dados do BD "CSV"
		PedidoProcess.abrir();
		String body = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
		
		try {
			JSONObject jo = new JSONObject(body);
			
			PedidoProcess.pedidos.add(new Pedido(jo.getString("cliente"), jo.getString("endereco"), jo.getString("produto")));
			PedidoProcess.salvar();
			resp.setStatus(HttpServletResponse.SC_CREATED);
			
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}
	
	@Override
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("id");
		
		if(id != null) {
			if (PedidoProcess.pedidos.contains(new Pedido(id))) {
				int indice = PedidoProcess.pedidos.indexOf(new Pedido(id));// Obtem o indice
				PedidoProcess.pedidos.remove(indice);
				PedidoProcess.salvar();
				resp.setStatus(HttpServletResponse.SC_OK);
			} else {
				resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
			}
		}
	}
	
	@Override
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("id");
		String status = req.getParameter("status");
		
		if(id != null) {
			int indice = PedidoProcess.pedidos.indexOf(new Pedido(id));
			switch (status) {
			case "inicio":
				PedidoProcess.pedidos.get(indice).setHoraInicioEntrega();
				PedidoProcess.salvar();
				resp.setStatus(HttpServletResponse.SC_OK);
				break;
			case "fim":
				PedidoProcess.pedidos.get(indice).setHoraFimEntrega();
				PedidoProcess.salvar();
				resp.setStatus(HttpServletResponse.SC_OK);
				break;
			default: 
				resp.setStatus(HttpServletResponse.SC_NOT_MODIFIED);
			}
		}
	}
}