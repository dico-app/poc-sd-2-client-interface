// @ts-ignore
import { useCollection } from "@dico/react";

export default function loginForm() {
  const form = useCollection("form.login", [
    useCollection("email", [
      useKey("label"),
      useKey("placeholder")
    ]),
    useCollection("password", [
      useKey("label"),
      useKey("placeholder")
    ]),
    useKey("submitLabel", { maxLength: 30 })
  ]);

  return (
    <form method="POST" action="/login">

      <label>{ form.email.label }</label>
      <input type="email" placeholder={ form.email.placeholder } />
      <label>{ form.password.label }</label>
      <input type="password" placeholder={ form.password.placeholder } />

      <input type="submit" value={ form.submitLabel } />

    </form>
  )
}
