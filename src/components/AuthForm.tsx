import React, { useState } from "react";
import "./AuthForm.css";
import logo from "../assets/logo.svg"

interface AuthFormProps {
  isLogin: boolean;
  toggleMode: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, toggleMode }) => {
  return (
    <div className="auth-form text-center">
      <img src={logo} alt="Logo" className="auth-logo" />

      <h2 className="mb-3">{isLogin ? "Entrar" : "Cadastrar"}</h2>

      <form>
        {!isLogin && (
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nome completo"
              required
            />
          </div>
        )}
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="E-mail"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Senha"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {isLogin ? "Entrar" : "Cadastrar"}
        </button>
      </form>

      <p className="mt-3">
        {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
        <button onClick={toggleMode} className="btn btn-link p-0">
          {isLogin ? "Cadastre-se" : "Faça login"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
