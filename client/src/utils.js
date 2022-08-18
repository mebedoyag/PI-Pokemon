function validate(inp) {
  let errors = {};
  let regexp = /\d/g;

  if (!inp.name) {
    errors.name = 'Name is required';
  } else if (regexp.test(inp.name)) {
    errors.name = 'Name is invalid';
  }

  return errors;
}

export default validate;