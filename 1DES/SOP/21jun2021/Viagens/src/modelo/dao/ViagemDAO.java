package modelo.dao;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import modelo.Viagem;

public class ViagemDAO {
	private ArrayList<Viagem> viagens;
	private Viagem viagem;
	private BufferedReader br;
	private BufferedWriter bw;
	private String arquivo = "./bd/viagem.csv";
	
	public boolean salvar(ArrayList<Viagem> vs) {
		try {
			bw = new BufferedWriter(new FileWriter(arquivo));
			for(Viagem v: vs) {
				bw.write(v.toString());
			}
			bw.close();
			return true;
		} catch (IOException e) {
			e.printStackTrace();
			return false;
		}
	}
	public ArrayList<Viagem> abrir() {
		return null;
	}
}
