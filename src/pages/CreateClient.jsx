import { useNavigate, Form, useActionData, redirect } from 'react-router-dom';
import Error from '../components/Error';
import Inputs from '../components/Inputs';
import { createClient } from '../data/clients';

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const email = formData.get('email');

  // Validación
  const errors = [];
  if (Object.values(data).includes('')) {
    errors.push('All fields are required.');
    return errors;
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errors.push('The email is not valid.');
    return errors;
  }

  // Retornar data si hay errors
  if (Object.keys(errors).length) {
    return errors;
  }
  await createClient(data);
  return redirectt('/');
}

const CreateClient = () => {
  const errors = useActionData();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Create Client</h1>
      <p className="mt-2">create your clietns</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold capitalize"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:3/4 mx-auto px-5 py-10">
        {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)}
        <Form method="post">
          <Inputs />
          <input
            type="submit"
            value="Create"
            className="mt-5 w-full bg-blue-800 p-3 capitalize font-bold text-white text-lg"
          />
        </Form>
      </div>
    </>
  );
};

export default CreateClient;
