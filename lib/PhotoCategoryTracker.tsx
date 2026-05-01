"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

type Props = {
  category: string;
  categoryTitle: string;
};

export function PhotoCategoryTracker({ category, categoryTitle }: Props) {
  useEffect(() => {
    posthog.capture("photography_category_viewed", {
      category,
      category_title: categoryTitle,
    });
  }, [category, categoryTitle]);

  return null;
}
