const app = document.getElementById("App");

const greeting = (name: string): string => {
    return `Hello ${name}`;
};

if (app) {
    app.textContent = greeting("Maciej");
}
