async function fetchPokemon() {
  const input = document.getElementById("pokemonInput").value.toLowerCase();
  const card = document.getElementById("pokemonCard");
  const error = document.getElementById("error");

  if (!input) return;

  try {
    error.textContent = "";
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

    if (!response.ok) {
      throw new Error("Không tìm thấy Pokémon");
    }

    const data = await response.json();

    document.getElementById("name").textContent =
      data.name.toUpperCase();

    document.getElementById("image").src =
      data.sprites.front_default;

    document.getElementById("height").textContent =
      data.height;

    document.getElementById("weight").textContent =
      data.weight;

    document.getElementById("types").textContent =
      data.types.map(t => t.type.name).join(", ");

    card.classList.remove("hidden");

  } catch (err) {
    card.classList.add("hidden");
    error.textContent = err.message;
  }
}