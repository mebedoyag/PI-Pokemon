export function validate(inp) {
  let errors = {};
  let regexp = /\d/g;

  if (!inp.name) {
    errors.name = 'Name is required';
  } else if (regexp.test(inp.name)) {
    errors.name = 'Name is invalid';
  }

  return errors;
}

export function getFilterObj(locationSearch) {
  return locationSearch
    .slice(1)
    .split("&")
    .map(str => str.split("="))
    .reduce((result, pair) => {
      result[pair[0]] = pair[1];
      return result;
    }, {});
}

export function filterPokemons(option, pokemons) {
  let pokeFiltered = [];

  if (option === "existing") {
    pokeFiltered = pokemons
      .filter(poke => {
        return !isNaN(Number(poke.id));
      });
  } else if (option === "created") {
    pokeFiltered = pokemons
      .filter(poke => {
        return isNaN(Number(poke.id));
      });
  } else {
    pokeFiltered = pokemons
      .filter(poke => {
        return poke
          .types
          .includes(option);
      });
  } 
  return pokeFiltered;
}

export function orderPokemons(option, pokemons) {
  let pokeOrdered = [];

  if (option === "asc") {
    pokeOrdered = pokemons
      .sort((a, b) => {
        const nameA = a.name;
        const nameB = b.name;
        
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
  } else {
    pokeOrdered = pokemons
      .sort((a, b) => {
        const nameA = a.name;
        const nameB = b.name;
        
        if (nameA < nameB) return 1;
        if (nameA > nameB) return -1;
        return 0;
      });
  }
  return pokeOrdered;
}