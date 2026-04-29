import { DataTable } from "./generalComponents/data-table";
import { createColumns } from "@/components/generalComponents/columnsGenerator";
import { DialogPopup } from "./generalComponents/Dialog";
import CreateTruckForm from "./Truck/CreateTruckForm";

export default function TruckTable() {
  const data = [
    { id: 1, name: "Item 1", description: "Description for Item 1" },
    { id: 2, name: "Item 2", description: "Description for Item 2" },
    { id: 3, name: "Item 3", description: "Description for Item 3" },
  ];
  return (
    <div className="flex justify-center" >
      <DataTable columns={createColumns(data[0])} data={data} />
      <DialogPopup dialogTitle="Create Truck" dialogDescription="Fill in the details to create a new truck."><CreateTruckForm /></DialogPopup>
    </div>
  );
} 
