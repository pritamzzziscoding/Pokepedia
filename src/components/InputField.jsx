export const InputField = ({ pokemon, setPokemon }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search Pokemon"
        autoComplete="off"
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
      />
    </>
  );
};
