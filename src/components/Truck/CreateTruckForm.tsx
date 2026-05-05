import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { VITE_API_BASE_URL } from "@/config";
import { toast } from "sonner";

type CreateTruckForm = z.infer<typeof createTruckSchema>;

const truckTypeDict = { RIGID: "Rigid", SEMI: "Semi", NOTSPECIFIED: "Not Specified" } as const;
const truckTypes = Object.keys(truckTypeDict) as (keyof typeof truckTypeDict)[];
const trailerTypeDict = { FLATBED: "Flatbed", BOX: "Box", REFRIGERATED: "Refrigerated", NOTSPECIFIED: "Not Specified" } as const;
const trailerTypes = Object.keys(trailerTypeDict) as (keyof typeof trailerTypeDict)[];
const createTruckSchema = z.object({
    plateNumber: z.string().min(1, "Plate number is required").max(20, "Plate number must be at most 20 characters"),
    truckType: z.enum(truckTypes).optional(),
    brand: z.string().optional(),
    model: z.string().optional(),
    volume: z.number().optional(),
    weight: z.number().optional(),
    trailerType: z.enum(trailerTypes).optional(),
    trailerPlateNumber: z.string().optional(),
    shipments: z.array(z.string()).nullable().optional(),
});
const genSelectItems = (dict: Record<string, string>) => {
    return Object.keys(dict).map((key) => (
        <SelectItem key={key} value={key}>
            {dict[key]}
        </SelectItem>
    ));
};

export default function CreateTruckForm() {

    const onSubmit = async (data: CreateTruckForm) => {

        try {
            console.log("Submitting data:", data);
            const response = await fetch(`${VITE_API_BASE_URL}/trucks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                toast.success("Truck created successfully!", { position: "top-center" });
            } else {
                const errorMessage = await response.text();
                toast.error("Failed to create truck. " + errorMessage, { position: "top-center" });
            }
        } catch (error) {
            toast.error("An unexpected error occurred. Please try again.", { position: "top-center" });
        }

    };
    const form = useForm<CreateTruckForm>({
        resolver: zodResolver(createTruckSchema),
        mode: "onTouched",
        defaultValues: {
            plateNumber: "",
            truckType: "NOTSPECIFIED",
            brand: "",
            model: "",
            volume: 0,
            weight: 0,
            trailerType: "NOTSPECIFIED",
            trailerPlateNumber: "",
            shipments: null,
        },
    });

    return (
        <form id="create-truck-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
                <Controller name="plateNumber" control={form.control} render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>Plate Number</FieldLabel>
                        <Input placeholder="Required" {...field} />
                        {fieldState.error && <p className="text-red-500">{fieldState.error.message}</p>}
                    </Field>
                )} />
                <Controller name="truckType" control={form.control} render={({ field, fieldState }) => (
                    <Field orientation="responsive"
                        data-invalid={fieldState.invalid}>
                        <FieldLabel>Select Truck Type</FieldLabel>
                        <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger className="w-full"
                                aria-invalid={fieldState.invalid}>
                                <SelectValue placeholder="Select Truck Type" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectGroup>
                                    {genSelectItems(truckTypeDict)}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {fieldState.error && <p className="text-red-500">{fieldState.error.message}</p>}
                    </Field>
                )} />
                <Controller name="brand" control={form.control} render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>Brand</FieldLabel>
                        <Input placeholder="Optional" {...field} />
                        {fieldState.error && <p className="text-red-500">{fieldState.error.message}</p>}
                    </Field>
                )} />
                <Controller name="model" control={form.control} render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>Model</FieldLabel>
                        <Input placeholder="Optional" {...field} />
                        {fieldState.error && <p className="text-red-500">{fieldState.error.message}</p>}
                    </Field>
                )} />
                <Controller name="volume" control={form.control} render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>Volume (m³)</FieldLabel>
                        <Input placeholder="Optional" type="number" step="0.01" onChange={(e) => field.onChange(parseFloat(e.target.value))} value={field.value} />
                        {fieldState.error && <FieldError className="text-red-500" aria-errormessage={fieldState.error.message}></FieldError>}
                    </Field>
                )} />
                <Controller name="weight" control={form.control} render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>Weight (tons)</FieldLabel>
                        <Input placeholder="Optional" type="number" step="0.01" onChange={(e) => field.onChange(parseFloat(e.target.value))} value={field.value} />
                        {fieldState.error && (<FieldError className="text-red-500">{fieldState.error.message}</FieldError>)}
                    </Field>
                )} />
                <Controller name="trailerType" control={form.control} render={({ field, fieldState }) => (
                    <Field orientation="responsive"
                        data-invalid={fieldState.invalid}>
                        <FieldLabel>Select Trailer Type</FieldLabel>
                        <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger className="w-full"
                                aria-invalid={fieldState.invalid}>
                                <SelectValue placeholder="Select Trailer Type" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectGroup>
                                    {genSelectItems(trailerTypeDict)}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {fieldState.error && <p className="text-red-500">{fieldState.error.message}</p>}
                    </Field>
                )} />
                <Controller name="trailerPlateNumber" control={form.control} render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>Trailer Plate Number</FieldLabel>
                        <Input placeholder="Optional" {...field} />
                        {fieldState.error && <FieldError className="text-red-500">{fieldState.error.message}</FieldError>}
                    </Field>
                )} />
                <Controller name="shipments" control={form.control} render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>Shipments</FieldLabel>
                        <Input placeholder="Optional" {...field} value={field.value ? field.value.join(',') : ''} onChange={(e) => {
                            const filtered = e.target.value.split(',').filter(item => item.trim() !== '');
                            field.onChange(filtered.length > 0 ? filtered : null);
                        }} />
                        {fieldState.error && <FieldError className="text-red-500">{fieldState.error.message}</FieldError>}
                    </Field>
                )} />

            </FieldGroup>
            <Button type="reset" variant="outline" onClick={() => form.reset()}>
                Reset
            </Button>
            <Button type="submit">Submit</Button>
        </form>
    );
}