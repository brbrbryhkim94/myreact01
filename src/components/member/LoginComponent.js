import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLoginThunk, requestLogin } from "../../reducers/loginSlice";

const initState = {
    email: 'user00@aaa.com',
    pw: '1111', //비밀번호
}

const LoginComponent = () => {
    const loginState = useSelector(state => state.login);
    const [loginInfo, setLoginInfo] = useState({ ...initState });
    const dispatch = useDispatch();
    const errorMsg = loginState.errorMsg;

    return (
        <div>
            <div className="text-3xl bg-red-500 text-white py-2 px-4 rounded-lg">
                {loginState.loading ? '로그인 중' : ''}
            </div>
            {errorMsg && (
                <div className="text-3xl bg-red-500 text-white py-2 px-4 rounded-lg">
                    이메일과 비밀번호를 다시 확인해 주세요
                </div>
            )}
            <div className="mt-4">
                <label className="text-lg font-bold">Email: </label>
                <input
                    className="border-2 p-2 rounded-lg"
                    type="text"
                    name="email"
                    value={loginInfo.email}
                    onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })}
                />
            </div>
            <div className="mt-4">
                <label className="text-lg font-bold">Password: </label>
                <input
                    className="border-2 p-2 rounded-lg"
                    type="password"
                    name="pw"
                    value={loginInfo.pw}
                    onChange={(e) => setLoginInfo({ ...loginInfo, pw: e.target.value })}
                />
            </div>
            <div className="mt-6">
                <button
                    className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg"
                    onClick={() => dispatch(postLoginThunk(loginInfo))}
                >
                    LOGIN
                </button>
            </div>
        </div>
    );
}

export default LoginComponent;
