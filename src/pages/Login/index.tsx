import React, { useState } from "react";
import AuthForm from "../../components/AuthForm";
import InfoPanel from "../../components/InfoPanel";
import "./style.css";

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin((prev) => !prev);

  return (
    <div className={`auth-container ${isLogin ? "" : "flipped"}`}>
      <div className="left-panel">
        {isLogin ? <InfoPanel isLogin={true} /> : <AuthForm isLogin={false} toggleMode={toggleMode} />}
      </div>
      <div className="right-panel">
        {isLogin ? <AuthForm isLogin={true} toggleMode={toggleMode} /> : <InfoPanel isLogin={false} />}
      </div>
    </div>
  );
};

export default AuthPage;
