import SearchBox from "../components/SearchBox";
import Table from "../components/TableShippingUnit";

function ShippingUnits() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div>
      <h1 style={{ fontSize: '8rem', color: '#3b82f6', textAlign: 'center' }}>Shipping Units</h1>
      <SearchBox onSearch={handleSearch} />
      <Table />

    </div>
  );
}

export default ShippingUnits;