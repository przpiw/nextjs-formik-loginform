import { useFormik } from 'formik'
import { InputField } from './InputField'
import { FormLabel } from './FormLabel'
import { loginSchema } from './validation/loginSchema'

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      // Once form submited ex. {Email: 'John@example.com', Password: 'secret'}
      console.log(values)
    },
  })
  return (
    <>
      <form id='loginform' onSubmit={formik.handleSubmit}>
        <FormLabel text='Email: ' />
        <InputField
          id='email'
          name='email'
          onChange={formik.handleChange}
          style={{ backgroundColor: 'gray' }}
        />
        <FormLabel style={{ color: 'red' }} text={formik.errors.email} />
        <br></br>
        <FormLabel text='Password: ' />
        <InputField
          id='password'
          onChange={formik.handleChange}
          style={{ backgroundColor: 'gray' }}
        />
        <FormLabel style={{ color: 'red' }} text={formik.errors.password} />
      </form>
      <button form='loginform' type='submit'>
        Login
      </button>
    </>
  )
}

export default LoginForm
