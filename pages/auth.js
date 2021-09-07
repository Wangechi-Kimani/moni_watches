import { getSession } from 'next-auth/client';
import { useEffect } from 'react';
import { useRouter } from "next/router";
import AuthForm from '../components/auth/auth-form';

function AuthPage() {
 const router = useRouter();

  useEffect(()=>{
    getSession().then(session => {
      if(session) {
        router.replace('/')
      } 
    })
  }, [router])

  return <AuthForm />;
}

export default AuthPage;
