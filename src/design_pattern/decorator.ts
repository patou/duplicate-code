class Personne {
  constructor(public nom: string) {}

  sHabiller() {
    return `${this.nom} porte :`;
  }
}

function avecPull(personne: Personne) {
  const originalSHabiller = personne.sHabiller;
  personne.sHabiller = () => `${originalSHabiller()} un pull`;
  return personne;
}

function avecManteau(personne: Personne) {
  const originalSHabiller = personne.sHabiller;
  personne.sHabiller = () => `${originalSHabiller()} un manteau`;
  return personne;
}

const jean = new Personne("Jean");
console.log(jean.sHabiller()); // Jean porte :

const jeanAvecPull = avecPull(jean);
console.log(jeanAvecPull.sHabiller()); // Jean porte : un pull

const jeanAvecPullEtManteau = avecManteau(jeanAvecPull);
console.log(jeanAvecPullEtManteau.sHabiller()); // Jean porte : un pull un manteau
