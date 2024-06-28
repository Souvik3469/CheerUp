"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { DatePicker } from "@mui/x-date-pickers";
// import { loginUser } from "@/api";
// import { useRouter } from "next/navigation";
const formSchema = z.object({
  event_title: z.string().min(2, {
    message: "Title must have minimum of 2 charecters",
  }),
  location: z.string(),
  event_date: z.date({ required_error: "Event date is required" }),
  // .min(2, {
  //   message: "password must be long",
  // }),
});

function Ngoform() {
  // const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      event_title: "",
      location: "",
      event_date: new Date(),
    },
  });

  const handleDateChange = (newDate) => {
    if (newDate) {
      form.setValue("event_date", newDate.toDate());
    }
  };

  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
    try {
      console.log(formData);
    } catch (err) {}
  };

  return (
    <div className="w-4/5 my-auto mx-auto flex flex-col gap-10">
      <div className="text-4xl font-semibold">
        Please Enter Your Details About Ngo Program
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="event_title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Title</FormLabel>
                <FormControl>
                  <Input placeholder="Event-title" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="flex justify-between">Location</FormLabel>
                <FormControl>
                  <Input placeholder="Location" {...field} />
                </FormControl>
                <FormMessage>
                  <FormDescription>
                    Please provide a valid location.
                    <br />
                  </FormDescription>
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="event_date"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="flex justify-between">
                  Date of event
                </FormLabel>
                <FormControl>
                  <DatePicker
                    label="Select a date"
                    onChange={(newDate) => handleDateChange(newDate)}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            // disabled={buttonDisabled}
          >
            Create Event
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Ngoform;
