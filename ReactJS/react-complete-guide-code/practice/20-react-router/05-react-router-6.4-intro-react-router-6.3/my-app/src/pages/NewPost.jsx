import {
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

import NewPostForm from "../components/NewPostForm";
import { savePost } from "../util/api";

// function NewPostPage() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState();
//   const navigate = useNavigate();

//   async function submitHandler(event) {
//     event.preventDefault();
//     setIsSubmitting(true);
//     try {
//       const formData = new FormData(event.target);
//       const post = {
//         title: formData.get('title'),
//         body: formData.get('post-text'),
//       };
//       await savePost(post);
//       navigate('/');
//     } catch (err) {
//       setError(err);
//     }
//     setIsSubmitting(false);
//   }

//   function cancelHandler() {
//     navigate('/blog');
//   }

//   return (
//     <>
//       {error && <p>{error.message}</p>}
//       <NewPostForm
//         onCancel={cancelHandler}
//         onSubmit={submitHandler}
//         submitting={isSubmitting}
//       />
//     </>
//   );
// }

function NewPostPage() {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  function cancelHandler() {
    navigate("/blog");
  }

  return (
    <>
      {data && data.status && <p>{data.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === "submitting"}
      />
    </>
  );
}

export default NewPostPage;

// this action function here will be invoked whenever the form is submitted and here we also get an object, an
// automatically generated object with some data. We again would get some params here if we needed them but we also get
// a request object. And this time, the request object is important because this automatically generated request object,
// which hasn't left the browser yet, that's really important, we're still in the browser but this automatically
// generated request object will actually contain the data that was submitted with the form. And you will be able to
// extract data by using the names assigned to the form inputs. So the names matter.

export async function action({ request }) {
  const formData = await request.formData();
  const post = {
    title: formData.get("title"),
    body: formData.get("post-text"),
  };

  try {
    await savePost(post);
  } catch (error) {
    if (error.status === 422) {
      return error;
    }
    throw error;
  }
  return redirect("/blog");
}
