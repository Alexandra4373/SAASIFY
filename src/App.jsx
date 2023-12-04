import mail from "./assets/mail.png";

function App() {
  return (
    <>
      <div>
        {/* Navbar and hero */}
        <div className="">
          <div className="flex justify-between py-5">
            <h1>Saasify</h1>

            <ul className="flex gap-5">
              <li>Product</li>
              <li>Solution</li>
              <li>Customer</li>
              <li>Pricing</li>
              <li>About Us</li>
            </ul>

            {/* sign up button */}
            <div className="">
              <button>Sign up</button>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col py-20">
            <p>The fastest way for startups to do any analysis</p>

            <p>
              Equals is the only spreadsheet with built-in connections to any
              database, versioning, and collaboration.
            </p>

            <label className="flex justify-center">
              <img src={mail} />
              <input
                type="text"
                placeholder="Enter your email"
                className="rounded-lg"
              ></input>
              <button>Start for free</button>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
