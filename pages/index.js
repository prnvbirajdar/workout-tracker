import Link from "next/link";

//import ImageLight from '../assets/img/login-office.jpeg'
//import ImageDark from '../assets/img/login-office-dark.jpeg'
//import { GithubIcon, TwitterIcon } from '../icons'
import { Label, Input, Button } from "@windmill/react-ui";

const IndexPage = () => {
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              //src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              //src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>
              <Label>
                <span>Email</span>
                <Input
                  className="mt-1"
                  type="email"
                  placeholder="john@doe.com"
                />
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input
                  className="mt-1"
                  type="password"
                  placeholder="***************"
                />
              </Label>

              <Button block className="mt-4">
                <Link href="/home">
                  <a>Log in</a>
                </Link>
              </Button>

              <hr className="my-8" />

              <Button block layout="outline">
                {/*              <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                 */}{" "}
                Github
              </Button>
              <Button className="mt-4" block layout="outline">
                {/* <TwitterIcon className="w-4 h-4 mr-2" aria-hidden="true" /> */}
                Twitter
              </Button>

              <p className="mt-4">
                <Link href="/ForgotPassword">
                  <a className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
                    Forgot your password?
                  </a>
                </Link>
              </p>
              <p className="mt-1">
                <Link href="/CreateAccount">
                  <a
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    Create account
                  </a>
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

// export default function IndexPage() {
//   return (
//     <div>
//       <div className="my-36">
//         <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
//           Welcome to Lift
//         </h1>
//         <h3 className="text-center my-4">Train harder. Track smarter.</h3>

//         <div className="flex justify-center mt-20">
//           <button className="text-blue-500 mr-6">Register</button>
//           <button className="px-5 py-2 font-bold text-white bg-blue-500 rounded">
//             Log In
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
