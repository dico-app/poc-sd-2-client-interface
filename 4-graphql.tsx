// @ts-ignore
import { gql, useQuery } from '@apollo/client';

export default function loginForm() {
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

  const form = useQuery(GET_FORM);

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
