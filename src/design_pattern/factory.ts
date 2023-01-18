interface MoyenTransport {
  transporter(poids: number): string;
}

class Camion implements MoyenTransport {
  transporter(poids: number) {
    return `Transport de ${poids} tonnes
        de bois par la route.`;
  }
}

class Bateau implements MoyenTransport {
  transporter(poids: number) {
    return `Transport de ${poids} tonnes
        de bois par voie maritime.`;
  }
}

function creerTransporteur(type: "route" | "mer"): MoyenTransport {
  switch (type) {
    case "route":
      return new Camion();
    case "mer":
      return new Bateau();
    default:
      throw new Error(`Type de transport
            non valide`);
  }
}

const route = creerTransporteur("route");
console.log(route.transporter(5));
// Transport de 5 tonnes de bois par la route.

const mer = creerTransporteur("mer");
console.log(mer.transporter(10));
// Transport de 10 tonnes de bois par voie maritime.
