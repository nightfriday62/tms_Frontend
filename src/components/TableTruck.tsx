import { DataTable } from "./generalComponents/data-table";
import { createColumns } from "@/components/generalComponents/columnsGenerator";
import { DialogPopup } from "./generalComponents/Dialog";
import CreateTruckForm from "./Truck/CreateTruckForm";
import { useEffect, useState } from "react";
import { VITE_API_BASE_URL } from "@/config";
import { toast } from "sonner";

export default function TruckTable() {
  const [truckData, setData] = useState([]);
  useEffect(() => {
    const fetchTrucks = async () => {
      try {
        const response = await fetch(`${VITE_API_BASE_URL}/trucks`, {
          method: "GET",
        });
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched trucks:", data);
          setData(data);
        } else {
          toast.error("Failed to fetch trucks");
        }
      } catch (error) {
        toast.error("An unexpected error occurred while fetching trucks");
      }
    };

    fetchTrucks();
  }, []);
  return (
    <div className="flex justify-center" >
      {truckData.length > 0 ?
        (<DataTable columns={createColumns(truckData[0])} data={truckData} />) :
        (<p className="text-gray-500">Loading trucks.</p>)}
      <DialogPopup dialogTitle="Create Truck" dialogDescription="Fill in the details to create a new truck."><CreateTruckForm /></DialogPopup>
    </div>
  );
} 
