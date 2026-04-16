import "./SearchBox.css";
function SearchBox({ placeholder = "Search...by description", onSearch }: { placeholder?: string; onSearch: (query: string) => void }) {
  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get("search-input") as string;
    onSearch(query);
  };
    return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input id="search-input" type="text" placeholder={placeholder} style={{ height: '30px', width: '400px' }} />
      <button type="submit" style={{ height: '30px', marginLeft: '10px' }}>Search</button>
    </form>
  );
}

export default SearchBox;