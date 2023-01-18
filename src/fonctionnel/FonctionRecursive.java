package fonctionnel;

public class FonctionRecursive {
  
  public static int sommeSansRecursion(int n) {
    int somme = 0;
    for (int i = 1; i <= n; i++) {
      somme += i;
    }
    return somme;
  }

  public static int sommeAvecRecursion(int n) {
    if (n == 1) return 1;
    return n + sommeAvecRecursion(n - 1);
  }

  public static void main(String[] args) {
    System.out.println(sommeSansRecursion(10)); // 55
    System.out.println(sommeAvecRecursion(10)); // 55
  }
}
