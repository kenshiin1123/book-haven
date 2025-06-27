import React from "react";

export default function BookCategoriesDisplay({ categories, truncate = true }) {
  return (
    <span className={`${truncate && "truncate"} space-x-3 mb-1 block`}>
      {categories.map((c, i) => {
        return (
          <small
            className="font-medium text-xs cursor-pointer hover:underline"
            title={c}
            key={i}
          >
            {c}
          </small>
        );
      })}
    </span>
  );
}
