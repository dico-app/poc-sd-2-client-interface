// @ts-ignore
import { useCollection, useKey } from "@dico/react";

export default function LoginForm() {
  const { email, password, submitLabel } = useCollection("loginForm", [
    useCollection("email", [
      useKey("label"), 
      useKey("placeholder")
    ]),
    useCollection("password", [
      useKey("label"), 
      useKey("placeholder")
    ]),
    useKey("submitLabel", { maxLength: 30 }),
  ]);

  return (
    <form method="POST" action="/login">
      <label>{email.label}</label>

      <input type="email" placeholder={email.placeholder} />
      <label>{password.label}</label>
      <input type="password" placeholder={password.placeholder} />

      <input type="submit" value={submitLabel} />
    </form>
  );
}
