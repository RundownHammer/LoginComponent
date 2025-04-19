import { useMutation } from "react-query";
import { loginUser } from "../api/auth";
import { LoginFormData } from "./validation";

export function useLogin() {
  return useMutation((data: LoginFormData) => loginUser(data));
}
