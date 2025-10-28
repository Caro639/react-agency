import React from "react";

// Mock de react-router-dom pour les tests Jest
const mockNavigate = jest.fn();

const Link = ({ children, to, ...props }) => (
  <a href={to} {...props}>
    {children}
  </a>
);

const useParams = () => ({});
const useNavigate = () => mockNavigate;
const Routes = ({ children }) => (
  <div>{children}</div>
);
const Route = ({ element }) => element;
const BrowserRouter = ({ children }) => (
  <div>{children}</div>
);

module.exports = {
  Link,
  useParams,
  useNavigate,
  Routes,
  Route,
  BrowserRouter,
  __mockNavigate: mockNavigate,
};
