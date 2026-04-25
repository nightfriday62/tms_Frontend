import { VITE_API_BASE_URL } from "@/config";
import { useEffect, useState } from "react";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import type { ShippingUnitRequest } from "@/types/shippingUnit.type";
import { toast } from "sonner";

export default function Inputs() {
    const [description, setDescription] = useState('');
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [length, setLength] = useState("");
    const [volume, setVolume] = useState("");
    const [isVolumeModified, setVolumeModified] = useState(false);
    const [weight, setWeight] = useState("");
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(e.target.value);
        setVolumeModified(true);
    };
    const handleReset = function () {
        setHeight('');
        setDescription('');
        setWidth('');
        setLength('');
        setVolume('');
        setWeight('');
        setVolumeModified(false);
    };
    const handleSubmit = async function (e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            form.reportValidity(); // Show validation errors
            return;
        }

        const request: ShippingUnitRequest = {
            description: description,
            height: parseFloat(height),
            width: parseFloat(width),
            length: parseFloat(length),
            volume: parseFloat(volume),
            weight: parseFloat(weight),
        };
        try {
            const response = await fetch(`${VITE_API_BASE_URL}/shipping-units`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(request),
            });
            if (response.ok) {
                toast.success("Shipping unit created successfully!", { position: "top-center" });

            } else {
                const errorMessage = await response.text();
                toast.error("Failed to create shipping unit. " + errorMessage, { position: "top-center" });
            }
        } catch (error) {
            toast.error("An error occurred while creating the shipping unit.", { position: "top-center" });
        }
    };
    useEffect(() => {
        if (!isVolumeModified && height && width && length) {
            const calculatedVolume =
                parseFloat(height) * parseFloat(width) * parseFloat(length);
            setVolume(calculatedVolume.toFixed(2));
        } else {
            setVolume("");
        }
    }, [height, width, length]);
    return (
        <form className="grid w-full items-center gap-6" onSubmit={(e) => { handleSubmit(e); }}>
            <FieldGroup>
                <Field>
                    <FieldLabel>Description</FieldLabel>
                    <Input name="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required maxLength={255} />
                </Field>
                <FieldGroup className="grid max-w-sm grid-cols-3">
                    <Field>
                        <FieldLabel>Height (m)</FieldLabel>
                        <Input
                            name="height"
                            placeholder="Height"
                            type="number"
                            step="0.01"
                            min='0'
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            required
                            max='100'

                        />
                    </Field>
                    <Field>
                        <FieldLabel>Width (m)</FieldLabel>
                        <Input
                            name="width"
                            placeholder="Width"
                            type="number"
                            step="0.01"
                            value={width}
                            onChange={(e) => setWidth(e.target.value)}
                            required
                        />
                    </Field>
                    <Field>
                        <FieldLabel>Length (m)</FieldLabel>
                        <Input
                            name="length"
                            placeholder="Length"
                            type="number"
                            step="0.01"
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                            required

                        />
                    </Field>
                </FieldGroup>
                <FieldGroup className="grid max-w-sm grid-cols-2">
                    <Field>
                        <FieldLabel>Weight (tons)</FieldLabel>
                        <Input name="weight" placeholder="Weight" type="number" step="0.01" value={weight} onChange={(e) => setWeight(e.target.value)} required />
                    </Field>
                    <Field>
                        <FieldLabel>Volume (cubic meters)</FieldLabel>
                        <Input
                            name="volume"
                            placeholder="Volume"
                            type="number"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                        />
                    </Field>
                </FieldGroup>
                <Field orientation="horizontal">
                    <Button type="reset" variant="outline" onClick={handleReset}>
                        Reset
                    </Button>
                    <Button type="submit">Submit</Button>
                </Field>
            </FieldGroup>
        </form>
    );
}