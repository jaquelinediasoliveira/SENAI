
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class ManipulacaoDados {

	public static void main(String args[]) {

		// Escrita
		//FileWriter
		//BufferedWriter
		try {

			// BufferedWriter bw = new BufferedWriter(new FileWriter("data.txt"));
			FileWriter file = new FileWriter("data.txt", true);
			BufferedWriter bw = new BufferedWriter(file);
			bw.write("Teste de escrita\r\n");
			bw.close();
			file.close();
		} catch (IOException e) {
			System.out.println("Falha ao abrir arquivo para escrita");
		}

		//Leitura
		//FileReader
		//BufferedReader
		try {
			FileReader fr = new FileReader("data.txt");
			BufferedReader br = new BufferedReader(fr);
			String line = "";
			while ((line = br.readLine()) != null) {
				System.out.println(line);
			}
			br.close();
			fr.close();
		} catch (IOException e) {
			System.out.println("Falha ao abrir arquivo");
		}

	}
}