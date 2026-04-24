import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function inputs() {
    return (
        <FieldGroup>
            <Field>
                <FieldLabel>Description</FieldLabel>
                <Input name="description" placeholder="Description" />
            </Field>
            <FieldGroup className="grid max-w-sm grid-cols-3">
                <Field>
                    <FieldLabel>Height (m)</FieldLabel>
                    <Input name="height" placeholder="Height" type="number" step="0.01" />
                </Field>
                <Field>
                    <FieldLabel>Width (m)</FieldLabel>
                    <Input name="width" placeholder="Width" type="number" step="0.01" />
                </Field>
                <Field>
                    <FieldLabel>Length (m)</FieldLabel>
                    <Input name="length" placeholder="Length" type="number" step="0.01" />
                </Field>
            </FieldGroup>
            <FieldGroup className="grid max-w-sm grid-cols-2">
                <Field>
                    <FieldLabel>Weight (tons)</FieldLabel>
                    <Input name="weight" placeholder="Weight" type="number" step="0.01" />
                </Field>
                <Field>
                    <FieldLabel>Volume (cubic meters)</FieldLabel>
                    <Input name="volume" placeholder="Volume" type="number" step="0.01" />
                </Field>
            </FieldGroup>
            <Field orientation="horizontal">
                <Button type="reset" variant="outline">
                    Reset
                </Button>
                <Button type="submit">Submit</Button>
            </Field>
        </FieldGroup>
    );
}