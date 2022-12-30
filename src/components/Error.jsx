const Error = ({ children }) => {
  return (
    <div className="text-center my-4 bg-red-600 text-white font-bold p-4 capitalize">
      {children}
    </div>
  );
};

export default Error;
