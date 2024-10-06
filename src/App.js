import React from "react";

function App() {
  const [step, setStep] = React.useState(1);

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const prevButton = () => {
    setStep(step - 1);
  };

  const nextButton = () => {
    setStep(step + 1);
  };

  console.log(step, messages.length);

  return (
    <div className='steps'>
      <div className='numbers'>
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>

        <div className={`${step >= 2 ? "active" : ""}`}>2</div>

        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className='message'>
        Step {step} - {messages[step - 1]}
      </p>

      <div className='buttons'>
        <button
          style={{
            backgroundColor: "#7950f2",
            color: "#fff",
          }}
          onClick={prevButton}
          disabled={step === 1}
        >
          Previous
        </button>
        <button
          style={{
            backgroundColor: "#7950f2",
            color: "#fff",
          }}
          onClick={nextButton}
          disabled={messages.length === step}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
