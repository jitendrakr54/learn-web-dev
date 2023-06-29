const renderPokemonList1 = function (data) {
  const dropDown = document.createElement("select");

  data.forEach((d) => {
    const html = `
      <option>${d.name}</option>
    `;
    dropDown.insertAdjacentHTML("afterbegin", html);
  });

  document
    .querySelector(".container")
    .insertAdjacentElement("afterbegin", dropDown);
};

const renderPokemonList2 = function (data) {
  const dropDown = document.querySelector("#pokemon-list");

  data.forEach((d, index) => {
    // const html = `<option value=${index}>${d.name}</option>`;
    const html = `<option value=${d.name}>${d.name}</option>`;
    dropDown.insertAdjacentHTML("afterbegin", html);
  });
  console.log(dropDown);
};

const renderPokemon = (name, abilities) => {
  console.log(name, abilities);
  const pokemonDetail = document.querySelector("#pokemon-detail");

  const html = `<tr>
                  <td>${name}</td>
                  <td>${abilities}</td>
                </tr>`;
  pokemonDetail.innerHTML = html;
};

const getSelectedPokemon = function () {
  const dropDownList = document.querySelector("#pokemon-list");
  dropDownList.addEventListener("change", () => {
    const text = dropDownList.options[dropDownList.selectedIndex].text;
    pokemon.name = text;
    console.log(text);
  });
};

const fetchPokemons = async function () {
  localStorage.clear();
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await response.json();
  const pokemonList = data.results;
  // return pokemonList;
  renderPokemonList2(pokemonList);

  const dropDownList = document.querySelector("#pokemon-list");
  dropDownList.addEventListener("change", async (event) => {
    console.log(event.target.value);
    const name = event.target.value;
    // const name = dropDownList.options[dropDownList.selectedIndex].text;

    if (!localStorage.getItem(name)) {
      const url = pokemonList.find((list) => list.name === name).url;
      const resp = await fetch(url);
      const { abilities } = await resp.json();
      const ables = abilities.map((a) => a.ability.name);
      renderPokemon(name, ables);
      console.log(ables);
      localStorage.setItem(name, JSON.stringify(ables));
    } else {
      const abilities = JSON.parse(localStorage.getItem(name));
      console.log(name, abilities);
      renderPokemon(name, abilities);
    }
  });
};

fetchPokemons();
// fetchPokemons().then((data) => renderPokemonList2(data));
