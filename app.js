function mostrarJugador() {
    const jugadores = [
        "Lionel Messi - Argentina",
        "Cristiano Ronaldo - Portugal",
        "Kylian Mbappé - Francia",
        "Erling Haaland - Noruega"
    ];

    const random = Math.floor(Math.random() * jugadores.length);
    document.getElementById("infoJugador").textContent = jugadores[random];
}