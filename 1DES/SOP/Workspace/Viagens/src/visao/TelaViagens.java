package visao;

import java.util.ArrayList;
import java.util.Scanner;

public class TelaViagens {
    public static int menu = 0; 
    public static Scanner leia = new Scanner(System.in); 
    public static ArrayList<String> viagens; 
    public static void main(String[] args) {
        viagens = new ArrayList<>();
        viagens.add("Para?ba");
        viagens.add("Amazonas");
        viagens.add("Alagoas");
        viagens.add("Amap?");
        viagens.add("Bahia");
        viagens.add("Esp?rito Santo");
        while (menu != 5) {
            menu = menu(new String[]{ "\n1.Cadastro", "2.Listar", "3.Alterar", "4.Excluir", "5.Sair\n" });
            switch(menu) {
            case 1:
                System.out.print("Digite um destino: ");
                String destino = leia.next();
                viagens.add(destino);
                break;
            case 2:
                for(String v: viagens) {
                    System.out.println(v);
                }
                break;
            case 3:
                System.out.print("Digite o ?ndice do destino que deseja alterar: ");
                int indice = leia.nextInt();
                System.out.print("Digite um novo destino: ");
                 break;
            case 4:
                System.out.println("digite o ?ndice do destino que deseja excluir");
                viagens.remove(leia.nextInt());
                break;
            case 5:
                System.out.println("At? mais!");
                break;
            default:
                System.out.println("Op??o inv?lida");
                break;
            }
        }
    }

    public static int menu(String[] itens) {
        for(String i : itens) {
            System.out.println(i);
        }
        return leia.nextInt();
    }
}