// @ts-ignore
import { useDef } from "@dico/react";

export default function loginForm() {
  const form = useDef({
    form: {
      login: [
        { email: ["label", "placeholder" ]},
        { password: ["label", "placeholder" ]},
        "submitLabel"
      ]
    }
  });

  return (
    <form method="POST" action="/login">

      <label>{ form.email.label }</label>
      <input type="email" placeholder={ form.email.placeholder } />
      <label>{ form.passwordLabel }</label>
      <input type="password" placeholder={ form.password.placeholder } />

      <input type="submit" value={ form.submit.label } />

    </form>
  )
}
