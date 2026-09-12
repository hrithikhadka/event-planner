import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createEventAction } from "@/lib/actions/events";
import Link from "next/link";

export default async function NewEventPage() {
  return (
    <div className="mx-auth w-full max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Create a new event</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={createEventAction}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="title">Title</FieldLabel>
                <Input id="title" name="title" placeholder="Team meeting" />
              </Field>
              <Field>
                <FieldLabel htmlFor="description">Description</FieldLabel>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="more details about the event...."
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="location">Location</FieldLabel>
                <Input
                  id="location"
                  name="location"
                  placeholder="optional location"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="eventDate">Date and Time</FieldLabel>
                <Input type="datetime-local" id="eventDate" name="eventDate" />
                <FieldDescription>
                  Option, you can set this later.
                </FieldDescription>
              </Field>

              <div className="flex items-center gap-3">
                <Button type="submit">Create event</Button>
                <Button type="button" variant="outline" asChild>
                  <Link href={"/dashboard"}>Cancel</Link>
                </Button>
              </div>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
