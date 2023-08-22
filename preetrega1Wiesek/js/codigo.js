let carrito = [];

function checkAvailability() {
    const productName = prompt("Ingrese el nombre del producto:");

    switch (productName) {
        case "Producto A":
        case "Producto B":
        case "Producto C":
            alert(`${productName} está disponible.`);
            break;
        default:
            alert(`${productName} está agotado.`);
    }
}

function calculateTotal() {
    const price = parseInt(prompt("Ingrese el precio del producto:"));
    const quantity = parseInt(prompt("Ingrese la cantidad de productos:"));
    const total = price * quantity;

    alert(`Costo Total: $${total.toFixed(2)}`);
}

function addToCart() {
    let agregarProducto = true;

    while (agregarProducto) {
        const productName = prompt("Ingrese el nombre del producto para agregar al carrito:");
        carrito.push(productName);
        console.log(`${productName} ha sido agregado al carrito.`);

        const confirmacion = prompt("¿Desea agregar otro producto al carrito? (Sí/No)").toLowerCase();
        if (confirmacion !== "si") {
            agregarProducto = false;
        }
    }
}

function displayCart() {
    console.log("Carrito de Compras:", carrito);
    alert(`Carrito de Compras: ${carrito.join(', ')}`);
}