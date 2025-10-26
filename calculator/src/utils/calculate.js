export const operations = [
    { value: "+", label: "Sčítanie" },
    { value: "-", label: "Odčítanie" },
    { value: "*", label: "Násobenie" },
    { value: "/", label: "Delenie" },
];

export function calculate(a, b, operation) {
    switch (operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return null;
    }
}
