// @ts-ignore
import { useCollection } from "@dico/react";

export default function LoginForm() {
  const loginForm = useCollection("form.login", [
    "emailLabel",
    "emailPlaceholder",
    "passwordLabel",
    "passwordPlaceholder",
    { name: "submitLabel", maxLength: 30 },
  ]);

  return (
    <form method="POST" action="/login">
      <label>{loginForm.emailLabel}</label>
      <input type="email" placeholder={loginForm.emailPlaceholder} />
      <label>{loginForm.passwordLabel}</label>
      <input type="password" placeholder={loginForm.passwordPlaceholder} />

      <input type="submit" value={loginForm.submitLabel} />
    </form>
  );
}
