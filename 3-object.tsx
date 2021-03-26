// @ts-ignore
import { useDef } from "@dico/react";

export default function LoginForm() {
  const login = useDef({
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

      <label>{ login.email.label }</label>
      <input type="email" placeholder={ login.email.placeholder } />
      <label>{ login.passwordLabel }</label>
      <input type="password" placeholder={ login.password.placeholder } />

      <input type="submit" value={ login.submit.label } />

    </form>
  );
}
