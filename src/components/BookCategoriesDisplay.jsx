import React from "react";

export default function BookCategoriesDisplay({ categories }) {
  return (
    <div className="truncate space-x-3 mb-1">
      {categories.map((c) => {
        return (
          <small
            className="font-medium text-xs cursor-pointer hover:underline"
            title={c}
          >
            {c}
          </small>
        );
      })}
    </div>
  );
}
