import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export default function AccountPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/account/profile");
  });
}
