// @ts-ignore
import { useCollection } from "@dico/react";

export default function LoginForm() {
  const login = useCollection("form.login", [
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
      <label>{login.email.label}</label>
      <input type="email" placeholder={login.email.placeholder} />
      <label>{login.password.label}</label>
      <input type="password" placeholder={login.password.placeholder} />

      <input type="submit" value={login.submitLabel} />
    </form>
  );
}
