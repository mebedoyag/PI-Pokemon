function Creation() {
  return (
    <form action="post">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="typeOne">Type</label>
      <input type="text" name="typeOne" id="typeOne" />
      <label htmlFor="height">Height</label>
      <input type="text" name="height" id="height" />
      <label htmlFor="weight">Weight</label>
      <input type="text" name="weight" id="weight" />
    </form>
  );
}

export default Creation;