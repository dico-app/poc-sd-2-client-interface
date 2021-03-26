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

  const login = useQuery(GET_FORM);

  return (
    <form method="POST" action="/login">

      <label>{ login.email.label }</label>
      <input type="email" placeholder={ login.email.placeholder } />
      <label>{ login.password.label }</label>
      <input type="password" placeholder={ login.password.placeholder } />

      <input type="submit" value={ login.submitLabel } />

    </form>
  );
}
