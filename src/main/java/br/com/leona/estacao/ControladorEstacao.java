package br.com.leona.estacao;

public class ControladorEstacao {

    void controlar(String graus, String movimento) {
        if (movimento.equals("Elevação")){
            System.out.println("Moveu Elevação: "+graus);
        }
        if (movimento.equals("Azimute")){
            System.out.println("Moveu Azimute: "+graus);
        }
        if (movimento.equals("Ligar")){
            System.out.println("Ligou Estação");
        }
        if (movimento.equals("Desligar")){
            System.out.println("Desligou Estação");
        }
        if (movimento.equals("Resetar")){
            System.out.println("Resetou Estação");
        }
    }
    
}
