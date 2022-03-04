package domains;

import org.json.JSONException;
import org.json.JSONObject;

public class Cliente {
	private int idCliente;
	private String nomeCompleto;
	private String telefone;
	private String cpf;
	private String endereço;
	
	public Cliente() {
	}

	public Cliente(int idCliente, String nomeCompleto, String telefone, String cpf, String endereço) {
		super();
		this.idCliente = idCliente;
		this.nomeCompleto = nomeCompleto;
		this.telefone = telefone;
		this.cpf = cpf;
		this.endereço = endereço;
	}
	
	public Cliente(String idCliente, String nomeCompleto, String telefone, String cpf, String endereço) {
		this.idCliente = Integer.valueOf(idCliente);
		this.nomeCompleto = nomeCompleto;
		this.telefone = telefone;
		this.cpf = cpf;
		this.endereço = endereço;
	}

	public Cliente(String idCliente) {
		this.idCliente = Integer.valueOf(idCliente);
	}

	public int getIdCliente() {
		return idCliente;
	}

	public void setIdCliente(int idCliente) {
		this.idCliente = idCliente;
	}

	public String getNomeCompleto() {
		return nomeCompleto;
	}

	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getEndereço() {
		return endereço;
	}

	public void setEndereço(String endereço) {
		this.endereço = endereço;
	}

	@Override
	public String toString() {
		return idCliente + "\t" + nomeCompleto + "\t" + telefone+ "\t" + cpf + "\t" + endereço + "\n";
	}
	
	public JSONObject toJSON(){
		JSONObject json = new JSONObject();
		try {
			json.put("idCliente", idCliente);
			json.put("nomeCompleto", nomeCompleto);
			json.put("telefone", telefone);
			json.put("cpf", cpf);
			json.put("endereço", endereço);
		} catch (JSONException e) {
			System.out.println("Erro ao converter JSON: "+e);
		}
		return json;
	}
}
