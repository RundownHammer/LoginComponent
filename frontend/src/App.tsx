import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { loginSchema, LoginFormData } from "./logic/validation";
import { useLogin } from "./logic/useLogin";

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // to get properties like isSuccessfull, isLoading etc.
  const loginMutation = useLogin();

  // this function is the final stage after the user input verification by validation, 
  // auth (api call) and the uselogin function
  
  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#ffffff"
    }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: "320px",
          height: "314px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
        }}
      >
        <h2 style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "600",
          color: "#1a1a1a"
        }}>
          Welcome back!
        </h2>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          width: "320px"
        }}>
          <Input
            {...register("email")}
            placeholder="Email"
            error={errors.email?.message}
            label={{ visible: errors.email? true : false }}
          />

          <Input
            {...register("password")}
            type="password"
            placeholder="Password"
            error={errors.password?.message}
            label={{ visible: errors.password? true : false }}
          />
        </div>

        <div>
          <Button text={loginMutation.isLoading ? "Logging in..." : "Login"} type="submit" />
        </div>

        {loginMutation.isError && (
          <p style={{
            color: "red",
            marginTop: "16px",
            textAlign: "center",
            fontSize: "14px"
          }}>
            {(loginMutation.error as Error).message}
          </p>
        )}
        {loginMutation.isSuccess && (
          <p style={{
            color: "green",
            textAlign: "center",
            marginTop: "16px",
            fontSize: "14px" }}>
            {loginMutation.data?.message}
          </p>
        )}
      </form>
    </div>
  );
}
