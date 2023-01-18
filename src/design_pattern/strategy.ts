interface TransportationStrategy {
  calculateCost(kms: number): number;
  calculateTime(kms: number): number;
}
class Car implements TransportationStrategy {
  calculateCost(kms: number): number { return kms * 0.50; }
  calculateTime(kms: number): number { return kms / 90;}
}
class Bus implements TransportationStrategy {
  calculateCost(kms: number): number { return kms * 0.10; }
  calculateTime(kms: number): number { return kms / 80; }
}
class Train implements TransportationStrategy {
  calculateCost(kms: number): number { return kms * 0.30; }
  calculateTime(kms: number): number { return kms / 140; }
}

class Traveler {
  constructor(private transportationStrategy: TransportationStrategy) {}
  calculate(kms: number): number {
    return this.transportationStrategy.calculateCost(kms) * this.transportationStrategy.calculateTime(kms);
  }
}

const traveler = new Traveler(new Bus());
console.log(traveler.calculate(10)); // Bus cost calculation
