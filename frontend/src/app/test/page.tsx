"use client";
import React from "react";
import TestForm from "./test.form";
import Navbar from "../Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function page() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 3000, // 5 minutes
      },
    },
  });
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <TestForm />
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      </QueryClientProvider>
    </div>
  );
}

export default page;
