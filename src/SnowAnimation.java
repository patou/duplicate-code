import java.awt.Color;
import java.awt.Graphics;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.Timer;

public class SnowAnimation extends JPanel implements ActionListener {

    private static final int WINDOW_WIDTH = 640;
    private static final int WINDOW_HEIGHT = 480;
    private static final int NUM_SNOW_FLAKES = 300;
    private static final int SNOW_SPEED = 1;

    private Timer timer;
    private int[][] snowFlakes;

    public SnowAnimation() {
        snowFlakes = new int[NUM_SNOW_FLAKES][2];
        for (int i = 0; i < NUM_SNOW_FLAKES; i++) {
            snowFlakes[i][0] = (int) (Math.random() * WINDOW_WIDTH);
            snowFlakes[i][1] = (int) (Math.random() * -500) - 50;
        }
        timer = new Timer(50, this);
        timer.start();
    }

    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.WHITE);
        for (int i = 0; i < NUM_SNOW_FLAKES; i++) {
            g.fillOval(snowFlakes[i][0], snowFlakes[i][1], 5, 5);
        }
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        for (int i = 0; i < NUM_SNOW_FLAKES; i++) {
            snowFlakes[i][1] += SNOW_SPEED;
            if (snowFlakes[i][1] > WINDOW_HEIGHT) {
                snowFlakes[i][1] = (int) (Math.random() * -500) - 50;
            }
        }
        repaint();
    }

    public static void main(String[] args) {
        JFrame window = new JFrame("Snow Animation");
        window.setContentPane(new SnowAnimation());
        window.setSize(WINDOW_WIDTH, WINDOW_HEIGHT);
        window.setLocationRelativeTo(null);
        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        window.setVisible(true);
    }
}