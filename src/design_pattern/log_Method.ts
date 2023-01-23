class MaClass {
  @log
  public maMethode(arg1: string, arg2: number): void {
      // implémentation de la méthode
  }
}

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const originalMethod = descriptor.value;
  descriptor.value = function(...args: any[]) {
      console.log(`Appel de la méthode ${propertyKey} avec les arguments: ${args}`);
      const result = originalMethod.apply(this, args);
      console.log(`Méthode ${propertyKey} retourné: ${result}`);
      return result;
  };
  return descriptor;
}