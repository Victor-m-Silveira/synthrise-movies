import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import useAuth from '../hooks/useAuth'

interface Inputs {
  email: string
  password: string
}

function Login() {
  const [login, setLogin] = useState(false)
  const { signIn, signUp } = useAuth()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
    if (login) {
      await signIn(data.email, data.password)
    } else {
      await signUp(data.email, data.password)
    }
  }

  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center">
      <Head>
<title>Synthrise Movies</title>
<link rel="icon" href="/favicon.icon"/>
      </Head>
      <Image
      src="https://cdnb.artstation.com/p/assets/images/images/031/841/691/large/mizuri-au-cyberkeanu.jpg?1604750727"
      layout="fill"
      className="-z10  opacity-60 sm:!inline"
      objectFit="cover"
      />
          <img
          src="https://uploaddeimagens.com.br/images/003/834/054/original/synthmovies.png?1650310341"
          width={350}
          height={200}
          className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top -6/"
          />

<form
        className="relative mt-24 space-y-8 rounded bg-gradient-to-r from-purple-800/20   via-red-900/30 to-yellow-300/20  py-10 px-6 md:mt-0 md:max-w-md md:px-14"
        onSubmit={handleSubmit(onSubmit)}

      
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              {...register('email', { required: true })}
              placeholder="Email"
              className={`input ${
                errors.email && 'border-b-2 border-orange-500'
              }`}
              {...register('email', { required: true })}
            />
          {errors.email && (
              <p className="text-sm  text-yellow-300">
                Please enter a valid email.
              </p>
          )}
          </label>
          <label className="inline-block w-full">
            <input
               type="password"
               {...register('password', { required: true })}
               placeholder="Password"
               className={`input ${
                 errors.password && 'border-b-2 border-orange-500'
               }`}
             />
             {errors.password && (
              <p className="text-sm  text-yellow-300">
                Your password must contain between 4 and 60 characters.
              </p>
         )}
          </label>
        </div>
        <button
          className="w-full rounded bg-[#27072580] py-3 font-semibold"
          onClick={() => setLogin(true)}
          type="submit"
        >
          Sign In
        </button>
        <div className="text-[#f0c847]">
          New to SynthriseMovies?{' '}
        
          <button
            className="cursor-pointer text-white hover:underline"
            onClick={() => setLogin(false)}
            type="submit"
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
