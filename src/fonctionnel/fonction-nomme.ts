// Format a string to title case
function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Format a string to camel case
function toCamelCase(str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map((word, index) => index == 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

const str = "hello world";

console.log(toTitleCase(str)); // Hello World
console.log(toCamelCase(str)); // helloWorld

