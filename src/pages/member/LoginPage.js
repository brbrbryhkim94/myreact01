import LoginComponent from "../../components/member/LoginComponent";
import BasicLayout from "../../layouts/BasicLayout";


const LoginPage = () => {
    return (
        <BasicLayout>
            <div className="font-extrabold text-center text-4xl">Login Page</div>
            <LoginComponent></LoginComponent>
        </BasicLayout>
    );
}

export default LoginPage;