import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

// import { GetServerSideProps } from 'next';

export default function Home() {
  const { user } = useUser()

  return (
    <div>
      <h1>Olá, {user ? user.name : 'Desconhecido'}</h1>
      <img src={user.picture} alt="Avatar" width={30} />
      <br />
      <br />


      {/* <pre>
        {JSON.stringify(user, null, 2)}
      </pre> */}
      <a href="/api/auth/logout">Logout</a>
    </div >
  )
}

// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   const session = getSession(req, res);

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/api/auth/login',
//         permanent: false
//       }
//     }
//   }

//   return {
//     props: {}
//   }

// }

export const getServerSideProps = withPageAuthRequired()