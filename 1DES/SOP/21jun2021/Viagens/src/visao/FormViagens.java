package visao;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextArea;

import controle.ProcessaViagens;
import modelo.Viagem;

public class FormViagens extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	private JPanel painel;
	private JButton salvar, cancelar, adicionar, remover, atualizar;
	private JTextArea texto;

	FormViagens() {
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setSize(800, 600);
		setTitle("Registros de Visagens");
		setLocationRelativeTo(null);
		painel = new JPanel();
		setContentPane(painel);
		setLayout(null);

		texto = new JTextArea(listarTodos());
		texto.setEditable(false);
		texto.setBounds(20, 20, 745, 450);
		texto.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		painel.add(texto);

		salvar = new JButton("Salvar");
		salvar.setBounds(20, 480, 120, 30);
		painel.add(salvar);
		salvar.addActionListener(this);

		cancelar = new JButton("Cancelar");
		cancelar.setBounds(150, 480, 120, 30);
		painel.add(cancelar);
		cancelar.addActionListener(this);
		
		adicionar = new JButton("Adicionar");
		adicionar.setBounds(440, 480, 100, 30);
		painel.add(adicionar);
		adicionar.addActionListener(this);
		
		remover = new JButton("Remover");
		remover.setBounds(550, 480, 100, 30);
		painel.add(remover);
		remover.addActionListener(this);
		
		atualizar = new JButton("Atualizar");
		atualizar.setBounds(660, 480, 100, 30);
		painel.add(atualizar);
		atualizar.addActionListener(this);

	}

	public String listarTodos() {
		String acumulador = "";
		acumulador += "Indice\tOrigem\tDestino\tDistancia\tTempo\tVelociade\n";
		int indice = 0;
		for (Viagem v : ProcessaViagens.viagens) {
			acumulador += indice + "\t" + v.toString();
			indice++;
		}
		acumulador += "Horas de v?o: " + ProcessaViagens.tempoTotal();
		return acumulador;
	}

	@Override
	public void actionPerformed(ActionEvent e) { 
		if (e.getSource() == cancelar) {
			dispose();
		} else if (e.getSource().equals(salvar)) {
			if(ProcessaViagens.salvar()) {
				JOptionPane.showMessageDialog(this, "Arquivo salvo!");
				dispose();
			}else {
				JOptionPane.showMessageDialog(this, "Erro ao salvar arquivo");
			}
		} else if (e.getSource().equals(remover)) {
			excluir();
		} else if (e.getSource().equals(adicionar)) {
			adicionar();
		} else if (e.getSource().equals(atualizar)) {
			atualizar();
		} 

	}
	public void adicionar() {
		String entrada = JOptionPane.showInputDialog("Preencha os dados separados por v?rgula");
		try {
			String[] campos = entrada.split(",");
			Viagem v = new Viagem(campos[0], campos[1], Integer.valueOf(campos[2]), Integer.valueOf(campos[3]));
			ProcessaViagens.viagens.add(v);
			texto.setText(listarTodos());
		}catch (Exception e) {
			JOptionPane.showMessageDialog(this, "Erro ao converter dados");
			System.out.println("Erro "+e);
		}
	}
	public void atualizar() {
		int indice = 0;
		try {
			indice = Integer.valueOf(JOptionPane.showInputDialog("Digite o indice a ser alterado"));
		}catch (Exception e) {
			JOptionPane.showMessageDialog(this, "Erro ao converter dados");
			System.out.println("Erro "+e);
		}
		String entrada = JOptionPane.showInputDialog("Preencha os dados separados por v?rgula");
		try {
			String[] campos = entrada.split(",");
			Viagem v = new Viagem(campos[0], campos[1], Integer.valueOf(campos[2]), Integer.valueOf(campos[3]));
			ProcessaViagens.viagens.add(v);
			texto.setText(listarTodos());
		}catch (Exception e) {
			JOptionPane.showMessageDialog(this, "Erro ao converter dados");
			System.out.println("Erro "+e);
		}
	}
	
	public void excluir() {
		int indice = 0;
		try {
			indice = Integer.valueOf(JOptionPane.showInputDialog("Digite o indice a ser excluido"));
			ProcessaViagens.viagens.remove(indice);
			texto.setText(listarTodos());
		}catch (Exception e) {
			JOptionPane.showMessageDialog(this, "Erro ao converter dados");
			System.out.println("Erro "+e);
		}
	}
	public static void main(String[] args) {
		ProcessaViagens.preencherTestes();
		new FormViagens().setVisible(true);

	}

}