// @ts-ignore
import { useDef } from "@dico/react";

export default function LoginForm() {
  const loginForm = useDef({
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

      <label>{ loginForm.email.label }</label>
      <input type="email" placeholder={ loginForm.email.placeholder } />
      <label>{ loginForm.passwordLabel }</label>
      <input type="password" placeholder={ loginForm.password.placeholder } />

      <input type="submit" value={ loginForm.submit.label } />

    </form>
  );
}
