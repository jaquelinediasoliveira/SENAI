package model;

public class Funcionario {
	private String nome;
	private int nascimento;
	private String doc;
	private int reg;
	
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public int getNascimento() {
		return nascimento;
	}
	public void setNascimento(int nascimento) {
		this.nascimento = nascimento;
	}
	public String getDoc() {
		return doc;
	}
	public void setDoc(String doc) {
		this.doc = doc;
	}
	public int getReg() {
		return reg;
	}
	public void setReg(int reg) {
		this.reg = reg;
	}
	
	public void trabalhando() {
		System.out.println("Estou trabalhando, nao estorva");
	}
	
}
