// @ts-ignore
import { useCollection, useKey } from "@dico/react";

export default function LoginForm() {
  const loginForm = useCollection("login", [
    useKey("emailLabel"),
    useKey("emailPlaceholder"),
    useKey("passwordLabel"),
    useKey("passwordPlaceholder"),
    useKey("submitLabel", { maxLength: 30 }),
  ]);

  return (
    <form method="POST" action="/login">
      <label>{loginForm.emailLabel}</label>

      <input type="email" placeholder={loginForm.emailPlaceholder} />
      <label>{loginForm.labelPlaceholder}</label>
      <input type="password" placeholder={loginForm.passwordPlaceholder} />

      <input type="submit" value={loginForm.submitLabel} />
    </form>
  );
}
