type SearchBarProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Zoek tenders..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default SearchBar;
