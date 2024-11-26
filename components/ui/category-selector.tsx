"use client"

import { Category } from "@/sanity.types";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CategorySelectorProps {
  categories: Category;
}

export function CategorySelectorComponent({
  categories,
}: CategorySelectorProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<String>("");
  const router = useRouter;
}
