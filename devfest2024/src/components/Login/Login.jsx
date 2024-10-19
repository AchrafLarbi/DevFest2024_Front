import LoginForm from "./LoginForm";
import InfoSection from "./InfoSection";

const Login = () => {
  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center font-poppins">
      <div className="flex w-full h-screen">
        <div className="w-full lg:w-1/2 bg-white flex justify-center items-center">
          <LoginForm />
        </div>
        <div className="hidden lg:flex w-1/2 bg-[#026AA2] justify-center items-center rounded-[20px] m-4">
          <InfoSection />
        </div>
      </div>
    </div>
  );
};

export default Login;
