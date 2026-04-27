import SearchBox from "../components/SearchBox";
import Table from "../components/Table";
import { Toaster } from "@/components/ui/sonner";

function ShippingUnits() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div>
      <h1 style={{ fontSize: '8rem', color: '#3b82f6' }}>Shipping Units</h1>
      <SearchBox onSearch={handleSearch} />
      <Table />
      <Toaster />
    </div>
  );
}

export default ShippingUnits;