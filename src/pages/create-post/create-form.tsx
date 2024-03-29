import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import {db , auth} from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';


interface createFormData {
    title: string;
    description: string;
}



export const CreateForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

   const schema = yup.object().shape({
    title: yup.string().required("you must add a title"),
    description: yup.string().required("you must add a Description"),
   });


   const {register, handleSubmit, formState: {errors}} = 
   useForm<createFormData>(
    {resolver: yupResolver(schema)
    });

   const postsRef = collection(db, 'posts');

  const onCreatePost = async (data: createFormData) =>{
   await addDoc(postsRef, {
    title: data.title,
    description: data.description,
    userid: user?.uid,
    username: user?.displayName,
   });

   navigate("/");
  }

    return (
        <div>
           <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder='Title..' {...register('title')}/>
            <p style={{color: 'red'}}>{errors.title?.message}</p>
            <textarea placeholder='Description...' {...register('description')}/>
            <p style={{color: 'red'}}>{errors.description?.message}</p>
            <input type="submit" className='submitForm'/>
           </form>
        </div>
    );
}