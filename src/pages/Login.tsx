import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button/Button";
import Input from "../components/common/Input/Input";
import { login } from "../api/auth/auth";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
const handleLoginClick = async () => {
  let isValid = true;

  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailCheck.test(email)) {
    setEmailError("올바른 이메일 형식이 아닙니다");
    isValid = false;
  } else {
    setEmailError("");
  }

  if (password.length < 8) {
    setPasswordError("비밀번호는 8자 이상입니다");
    isValid = false;
  } else {
    setPasswordError("");
  }

  if (!isValid) return;

  try {
    const loginData = await login({
      email,
      password,
    });

    console.log("로그인 댓나:", loginData);

    localStorage.setItem("access_token", loginData.accessToken);
    navigate("/dashboard/members", { replace: true });
    
  } catch (error) {
    console.error("로그인 내 정보 조회 실패:", error);
    alert("이메일 또는 비밀번호가 올바르지 않습니다");
  }
};

  return (
    <>
      <div className="w-screen h-screen bg-black p-10 border-box flex items-center justify-center">
        <div className="box-content bg-slate-200 justify-center items-center rounded-lg h-100 w-70 border p-10">
          <div className="flex flex-col justify-center items-center mb-10">
            <div className="flex items-center">
              <img
                src="/d.png"
                className="w-10 h-10 m-2 rounded-lg"
                alt="logo"
              />
            </div>

            <p className="text-2xl text-black font-bold pt-2">로그인</p>
          </div>

          <div className="justify-center">
            <Input
              id="email"
              label="이메일"
              value={email}
              onChange={setEmail}
              placeholder="이메일을 입력하세요"
              className="input border input-bordered bg-transparent border-black w-full max-w-xs mb-5"
              errorMessage={emailError}
            />

            <Input
              id="password"
              label="비밀번호"
              type="password"
              value={password}
              onChange={setPassword}
              placeholder="비밀번호를 입력하세요"
              className="input border input-bordered bg-transparent border-black w-full max-w-xs mb-5"
              errorMessage={passwordError}
              onEnter={handleLoginClick}
            />

            <Button
              onClick={handleLoginClick}
              className="btn btn-primary w-full mt-7"
            >
              로그인
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;