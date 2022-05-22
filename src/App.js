import "./css/styles.css";

export default function App() {
  return (
    <div>
      <section className="joc">
        <h1>{"Join our community"}</h1>
        <h3 className="greenyellow">
          {" 30-days, hassle-free money back guarantee"}
        </h3>
        <p className="grey">
          {
            "Gain access to our full library of tutorials along with expert code reviews."
          }
        </p>
        <p className="grey">
          {
            "perfect for any developers who are serious about hanging there skills."
          }
        </p>
      </section>
      <section className="ms">
        <h3>{"Monthly Subscription"}</h3>
        <p className="para1">
          <span>$29</span> per month
        </p>
        <p className="para1">{"Full access less than $1 a day"}</p>
        <button>{"Sign Up"}</button>
      </section>
      <section className="wu">
        <h3>{"Why Us"}</h3>
        <p className="para">
          {"Tutorials by industry experts"} <br />
          {"Peer and expert code review"} <br />
          {" Coding exercises "}
          <br />
          {"Access to our Github repos"} <br />
          {"Community forum"} <br />
          {"Flashcard decks"} <br />
          {"New videos everyweek"}
        </p>
      </section>
    </div>
  );
}
