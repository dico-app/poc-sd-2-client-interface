// @ts-ignore
import { useCollection } from "@dico/react";

export default function LoginForm() {
  const login = useCollection("form.login", [
    "emailLabel",
    "emailPlaceholder",
    "passwordLabel",
    "passwordPlaceholder",
    { name: "submitLabel", maxLength: 30 },
  ]);

  return (
    <form method="POST" action="/login">
      <label>{login.emailLabel}</label>
      <input type="email" placeholder={login.emailPlaceholder} />
      <label>{login.passwordLabel}</label>
      <input type="password" placeholder={login.passwordPlaceholder} />

      <input type="submit" value={login.submitLabel} />
    </form>
  );
}
