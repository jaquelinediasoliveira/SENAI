package control;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;

import model.Funcionario;

public class FuncionarioControl {
	public boolean cadastrar(Funcionario func) {
		try {
			FileWriter cad = new FileWriter("D:/cad.txt", true);
			BufferedWriter bw = new BufferedWriter(cad);
			
			String linha  = func.getNome() + ";" +
							func.getNascimento() + ";" +
							func.getDoc() + ";" +
							func.getReg() + "\r\n";
			
			bw.write(linha);
			
			bw.close();
			cad.close();
		}catch(Exception e) {
			System.out.println();
		}
		return false;
	}
	
	public ArrayList<String> lista(){
		ArrayList<String> data = new ArrayList<String>();
		
		try {
			FileReader fr = new FileReader("D:/cad.txt");
			BufferedReader br = new BufferedReader(fr);
			
			String linha = "";
			while((linha = br.readLine())!= null) {
				data.add(linha);
			}
			
			br.close();
			fr.close();
		}catch (Exception e) {
			System.out.println(e);
		}
		return data;
	}
	public boolean editar(Funcionario func) {
		ArrayList<String> data = lista();
		
		try {
			FileWriter fw = new FileWriter("D:/cad.txt", false);
			BufferedWriter bw = new BufferedWriter(fw);
			
			for(int i = 0; i < data.size(); i++) {
				String linha = data.get(i);
				if(linha.contains(func.getDoc())) {
					linha  = func.getNome() + ";" +
							func.getNascimento() + ";" +
							func.getDoc() + ";" +
							func.getReg();
					data.remove(i);	
					data.add(i, linha);
				}
				bw.write(data.get(i)+"\r\n");
			}
			
			bw.close();
			fw.close();
			
			return true;
		}catch(Exception e) {
			System.out.println(e);
		}
		return false;
	}
	public boolean excluir(Funcionario func) {
		ArrayList<String> data = lista();
		
		try {
			FileWriter fw = new FileWriter("D:/cad.txt", false);
			BufferedWriter bw = new BufferedWriter(fw);
			
			for(int i = 0; i < data.size(); i++) {
				String linha = data.get(i);
				if(!linha.contains(func.getDoc())) {
					bw.write(data.get(i)+"\r\n");
				}
			}
			
			bw.close();
			fw.close();
			
			return true;
		}catch(Exception e) {
			System.out.println(e);
		}
		return false;
	}
	
}