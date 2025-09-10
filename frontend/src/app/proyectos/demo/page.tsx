"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout/Layout";

export default function ProjectDemo() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/proyectos/1");
  }, [router]);
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-16 text-center text-gray-600">Redirecting…</div>
    </Layout>
  );
}
