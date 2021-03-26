// @ts-ignore
import { useCollection, useKey } from "@dico/react";

export default function LoginForm() {
  const login = useCollection("login", [
    useKey("emailLabel"),
    useKey("emailPlaceholder"),
    useKey("passwordLabel"),
    useKey("passwordPlaceholder"),
    useKey("submitLabel", { maxLength: 30 }),
  ]);

  return (
    <form method="POST" action="/login">
      <label>{login.emailLabel}</label>

      <input type="email" placeholder={login.emailPlaceholder} />
      <label>{login.labelPlaceholder}</label>
      <input type="password" placeholder={login.passwordPlaceholder} />

      <input type="submit" value={login.submitLabel} />
    </form>
  );
}
