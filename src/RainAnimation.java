import java.awt.Color;
import java.awt.Graphics;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.Timer;

public class RainAnimation extends JPanel implements ActionListener {

    private static final int WINDOW_WIDTH = 640;
    private static final int WINDOW_HEIGHT = 480;
    private static final int NUM_RAIN_DROPS = 300;
    private static final int RAIN_SPEED = 3;

    private Timer timer;
    private int[][] rainDrops;

    public RainAnimation() {
        rainDrops = new int[NUM_RAIN_DROPS][2];
        for (int i = 0; i < NUM_RAIN_DROPS; i++) {
            rainDrops[i][0] = (int) (Math.random() * WINDOW_WIDTH);
            rainDrops[i][1] = (int) (Math.random() * -500) - 50;
        }
        timer = new Timer(50, this);
        timer.start();
    }

    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.BLACK);
        for (int i = 0; i < NUM_RAIN_DROPS; i++) {
            g.fillOval(rainDrops[i][0], rainDrops[i][1], 5, 10);
        }
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        for (int i = 0; i < NUM_RAIN_DROPS; i++) {
            rainDrops[i][1] += RAIN_SPEED;
            if (rainDrops[i][1] > WINDOW_HEIGHT) {
                rainDrops[i][1] = (int) (Math.random() * -500) - 50;
            }
        }
        repaint();
    }

    public static void main(String[] args) {
        JFrame window = new JFrame("Rain Animation");
        window.setContentPane(new RainAnimation());
        window.setSize(WINDOW_WIDTH, WINDOW_HEIGHT);
        window.setLocationRelativeTo(null);
        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        window.setVisible(true);
    }
}