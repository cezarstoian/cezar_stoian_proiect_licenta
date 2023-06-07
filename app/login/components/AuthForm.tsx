'use client';

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGoogle } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const session = useSession()
  const router = useRouter()
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (user: any, subject: string, content: string) => {
    const body = { subject, content, user }
    axios.post('/api/mailjet', body)
    .then(() => console.log('Email trimis pentru:', user.name))
    .catch(() => toast.error('Ceva nu a funcționat!'))
  }

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/users');
    }
  }, [session?.status, router])

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER")
    } else {
      setVariant("LOGIN")
    }
  }, [variant])

  const {register, handleSubmit, 
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    if (variant === "REGISTER") {
      const subject = 'Cont creat'
      const content = `Bună ziua, ${data.name}! Contul dumneavoastră a fost creat! Trebuie să așteptați programarea pentru a vi se aproba contul!`

      axios.post('/api/register', data)
      .then(() => {
        sendEmail(data, subject, content)
        router.push('/home')
        toast.success('Cont creat, dar inactiv! Așteptați sa fie validat!')
      })
      .catch(() => toast.error('Ceva nu a funcționat!'))
      .finally(() => setIsLoading(false))
    }

    if (variant === "LOGIN") {
      signIn('credentials', {
        ...data,
        redirect: false
      })
      .then((callback) => {
        if (callback?.error) {
          toast.error('Credențiale greșite sau cont inactiv!')
        }

        if (callback?.ok && !callback?.error) {
          toast.success('Ai intrat în cont!')
          router.push('/users')
        }
      })
      .finally(() => setIsLoading(false))
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true)

    signIn(action, { redirect: false })
    .then((callback) => {
      if (callback?.error) {
        toast.error('Credențiale greșite sau cont inactiv!')
      }

      if (callback?.ok && !callback?.error) {
        toast.success('Ai intrat în cont!')
      }
    })
    .finally(() => setIsLoading(false))
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="Nume complet" 
              register={register} 
              errors={errors}
            />
          )}
          <Input 
              id="email"
              label="Adresa de email"
              type="email"
              register={register} 
              errors={errors}
          />
          <Input 
              id="password"
              label="Parolă"
              type="password"
              register={register} 
              errors={errors}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Intră în cont" : "Înregistrează-te"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="border-t w-full border-gray-300" />
            </div>
            <div className="flex relative justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Sau continuați cu
              </span>
            </div>
          </div>

          <div className="flex mt-6 gap-2">
            <AuthSocialButton 
              icon={BsGoogle}
              onClick={() => socialAction('google')}
            />
          </div>
        </div>

        <div className="gap-2 flex justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === "LOGIN" ? "Utilizator nou?" : "Am deja cont."}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Crează un cont" : "Loghează-te"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;