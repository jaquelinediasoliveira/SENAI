package fonte;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Vacinacao {

	// Manipulação dos arquivos de entrada e saída
	private static BufferedReader br;
	private static BufferedWriter bw;
	private static String entrada = "./arquivos/entrada.txt";
	private static String saida = "./arquivos/saida.txt";

	// Atributos do problema
	private static int meses = 0;
	private static int d1 = 0, d2 = 0, d1a = 0, d2a = 0;

	public static void main(String[] args) {

		String resultado = "";

		try {
			br = new BufferedReader(new FileReader(entrada));
			String linha = br.readLine();
			meses = Integer.parseInt(linha);
			br.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (NumberFormatException e) {
			e.printStackTrace();
		}

		resultado += "Pessoas completamente imunizadas:" + d2 + "\r\n";
		resultado += "Pessoas imunizadas apenas com uma dose:" + d1 + "\r\n";
		resultado += "Pessoas que tomaram a segunda dose com atraso:" + d2a + "\r\n";
		resultado += "Pessoas esperando a segunda dose com atraso:" + d1a;

		System.out.println(resultado);
		try {
			bw = new BufferedWriter(new FileWriter(saida, false));
			bw.write(resultado);
			bw.close();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}
}