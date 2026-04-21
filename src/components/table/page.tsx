import { columns } from "./columns_demo";
import type { Payment } from "./columns_demo";
import { DataTable } from "./data-table";

function getData(): Payment[] {
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "processing",
            email: "p@example.com",
        },

    ];
}

export default function DemoPage() {
    const data = getData();
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}