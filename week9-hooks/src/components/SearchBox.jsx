import { useState, useEffect, useRef } from "react";

function SearchBox() {
  const [search, setSearch] = useState("");

  const inputRef = useRef(null);
  const renderCount = useRef(0);

  renderCount.current += 1;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section>
      <h2>Search Box</h2>

      <input
        ref={inputRef}
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Type to search..."
      />

      <p>Search text: {search}</p>
      <p>Render count: {renderCount.current}</p>
    </section>
  );
}

export default SearchBox;