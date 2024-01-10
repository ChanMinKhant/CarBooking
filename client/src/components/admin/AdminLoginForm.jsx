const AdminLoginForm = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center">
        <form className="w-[80dvw] h-[80dvh] border border-gray-100 shadow-lg rounded-lg flex flex-col justify-center items-center p-5">
          <h1 className="m-5 text-orange-500 font-bold">Admin Information</h1>
          <div className="m-3">
            <h1 className="">Email:</h1>
            <input
              type="email"
              className="w-[64dvw] h-[5dvh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300"
            ></input>
          </div>
          <div className="m-3">
            <h1>Password:</h1>
            <input
              type="password"
              className="w-[64dvw] h-[5dvh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300"
            ></input>
          </div>
          <button className="m-2 bg-orange-500 hover:bg-orange-300 text-white w-[24dvw] rounded-full p-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminLoginForm;
