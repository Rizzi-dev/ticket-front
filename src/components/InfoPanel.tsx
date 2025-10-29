import React from "react";
import "./InfoPanel.css";

interface InfoPanelProps {
  isLogin: boolean;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ isLogin }) => {
  return (
    <div className="info-panel d-flex flex-column justify-content-center align-items-center text-center p-5">
      <h1 className="mb-4">
        {isLogin ? "Bem-vindo à Ticketera!" : "Crie sua conta na Ticketera"}
      </h1>
      <p className="lead">
        {isLogin
          ? "Gerencie, venda e acompanhe seus ingressos de forma simples e rápida."
          : "Em poucos segundos você poderá começar a divulgar seus eventos e vender ingressos com praticidade!"}
      </p>
    </div>
  );
};

export default InfoPanel;
