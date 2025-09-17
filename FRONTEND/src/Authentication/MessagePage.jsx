import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function MessagePage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { message, redirectTo } = state || {};

  useEffect(() => {
    const timer = setTimeout(() => navigate(redirectTo || "/"), 3000);
    return () => clearTimeout(timer);
  }, [navigate, redirectTo]);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Access Denied</h2>
      <p>{message || "You will be redirected shortly."}</p>
    </div>
  );
}
