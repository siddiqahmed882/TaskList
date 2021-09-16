const SearchItem = ({ newSearch, setNewSearch }) => {
  return (
    <form className='searchItem-form' onSubmit={(e) => e.preventDefault()}>
      <input
        type='text'
        role='searchbox'
        placeholder='Search todos....'
        value={newSearch}
        onChange={(e) => setNewSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
