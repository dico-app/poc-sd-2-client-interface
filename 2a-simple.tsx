// @ts-ignore
import { useCollection } from "@dico/react";

export default function loginForm() {
  const form = useCollection("form.login", [
    "emailLabel",
    "emailPlaceholder",
    "passwordLabel",
    "passwordPlaceholder",
    { name: "submitLabel", maxLength: 30 }
  ]);

  return (
    <form method="POST" action="/login">

      <label>{ form.emailLabel }</label>
      <input type="email" placeholder={ form.emailPlaceholder } />
      <label>{ form.passwordLabel }</label>
      <input type="password" placeholder={ form.passwordPlaceholder } />

      <input type="submit" value={ form.submitLabel } />

    </form>
  )
}
