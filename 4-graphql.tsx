// @ts-ignore
import { gql, useQuery } from '@apollo/client';

export default function LoginForm() {
  const GET_FORM = gql`
    query GetFormLogin {
      email {
        label
        placeholder
      }
      password {
        label
        placeholder
      }
      submitLabel
    }
  `;

  const loginForm = useQuery(GET_FORM);

  return (
    <form method="POST" action="/login">

      <label>{ loginForm.email.label }</label>
      <input type="email" placeholder={ loginForm.email.placeholder } />
      <label>{ loginForm.password.label }</label>
      <input type="password" placeholder={ loginForm.password.placeholder } />

      <input type="submit" value={ loginForm.submitLabel } />

    </form>
  );
}
