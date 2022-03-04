package controle;
//Controle processa os cálculos totais, listas
import java.util.ArrayList;
import modelo.Viagem;
import modelo.dao.ViagemDAO;

public class ProcessaViagens {
	public static ArrayList<Viagem> viagens = new ArrayList<>(); // lista
	private static ViagemDAO vd = new ViagemDAO();
	// metodo
	public static int tempoTotal() { // total
		int acumulador = 0;
		for (Viagem v : viagens) {
			acumulador += v.getTempo();
		}
		return acumulador;
	}
	public static boolean salvar() {
		if(vd.salvar(viagens)) {
			return true;
		}else {
			return false;
		}
	}
	
	//metodo
	public static void preencherTestes() {
		viagens.add(new Viagem("Campinas", "Amapá", 1200, 2));
		viagens.add(new Viagem("Campinas", "Paraiba", 1100, 3));
		viagens.add(new Viagem("Campinas", "Pedreira", 1900, 2));
		viagens.add(new Viagem("Campinas", "Jaguariúna", 1800, 3));
		viagens.add(new Viagem("Campinas", "Maranhão", 1400, 2));
		viagens.add(new Viagem("Campinas", "Recife", 1700, 1));
		viagens.add(new Viagem("Campinas", "Acre", 1300, 7));
		viagens.add(new Viagem("Campinas", "Acre", 1300, 7));
	}

}