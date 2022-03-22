

export default function Signup() {
  return (
    <div className="pt-20 min-h-screen">
    <div className="flex items-center justify-center relative  bg-black bg-opacity-30 h-screen">
      <img
        src={require("../images/sign.jpg")}
        className="h-full w-full absolute object-cover opacity-50 -z-10 "
      />
      <div className="shadow-lg bg-white p-2 border rounded-md z-20 min-w-[350px] sm:w-[500px] ">
        <h1 className="text-3xl text-gray-700 font-semibold pb-2 w-[90%] border-b border-blue-200 text-center m-2 mb-4 mx-auto">
          Create an Account
        </h1>
        <form className="space-y-4 mb-5">
          <div className="w-full space-y-2">
            <p className="text-xs tracking-wide text-gray-600">Email</p>
            <input
              type="email"
              placeholder="user@email.com"
              className="border outline-none focus-ring-0 p-2 rounded-md focus:border-green-200 w-full "
            />
          </div>
          <div className="w-full space-y-2">
            <p className="text-xs tracking-wide text-gray-600">New Password</p>
            <input
              type="password"
              className="border outline-none focus-ring-0 p-2 rounded-md focus:border-green-200 w-full "
            />
          </div>
          <div className="w-full space-y-2">
            <p className="text-xs tracking-wide text-gray-600">Confirm Password</p>
            <input
              type="password"
              className="border outline-none focus-ring-0 p-2 rounded-md focus:border-green-200 w-full "
            />
          </div>
          <button className="bg-orange-600 p-1 rounded-lg w-full text-white font-semibold tracking-wide text-md">Register</button>
        </form>
      </div>
    </div>
  </div>
  )
}
