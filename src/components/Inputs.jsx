const Inputs = ({ client }) => {
  return (
    <>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="name">
          Name:
        </label>
        <input
          id="name"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Name client"
          name="name"
          defaultValue={client?.name}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="company">
          Comapny:
        </label>
        <input
          id="company"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Company client"
          name="company"
          defaultValue={client?.company}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          type="email"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Email Client"
          name="email"
          defaultValue={client?.email}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="phone">
          Phone:
        </label>
        <input
          id="phone"
          type="tel"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Phone client"
          name="phone"
          defaultValue={client?.phone}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="notes">
          Notes:
        </label>
        <textarea
          as="textarea"
          id="notes"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
          placeholder="Notes client"
          name="notes"
          defaultValue={client?.notes}
        />
      </div>
    </>
  );
};

export default Inputs;
