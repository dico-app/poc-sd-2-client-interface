// @ts-ignore
import { useCollection } from "@dico/react";

export default function LoginForm() {
  const loginForm = useCollection("form.login", [
    useCollection("email", [
      "label", 
      "placeholder"
    ]),
    useCollection("password", [
      "label", 
      "placeholder"
    ]),
    { name: "submitLabel", maxLength: 30 },
  ]);

  return (
    <form method="POST" action="/login">
      <label>{loginForm.email.label}</label>
      <input type="email" placeholder={loginForm.email.placeholder} />
      <label>{loginForm.password.label}</label>
      <input type="password" placeholder={loginForm.password.placeholder} />

      <input type="submit" value={loginForm.submitLabel} />
    </form>
  );
}
