package controllers;

import java.util.ArrayList;

import models.Produto;

public class ProdutoProcess {
	public static ArrayList<Produto> produtos;
	
	public static void iniciar() {
		produtos = new ArrayList<>();
		produtos.add(new Produto(1, "Arroz", "Branco", 25.95f, 40));
		produtos.add(new Produto(2, "Abacate", "Verde", 10.00f, 20));
		produtos.add(new Produto(3, "Jujuba", "Colorida", 5.50f, 20));
		produtos.add(new Produto(4, "Macarr�o", "Parafuso", 10.00f, 40));
		produtos.add(new Produto(5, "Salsicha", "Perdigao", 12.90f, 15));
	}
}
