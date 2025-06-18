import { useEffect } from "react";

export default function ErrorPage() {
  useEffect(() => {
    document.title = "404 Not Found";
  });
  return <div>ErrorPage</div>;
}
