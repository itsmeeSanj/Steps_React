import React from "react";

function App() {
  const [step, setStep] = React.useState(1);
  const [isOpen, setIsOpen] = React.useState(true);

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const prevButton = () => {
    step > 1 && setStep(step - 1);
  };

  const nextButton = () => {
    step < 3 && setStep(step + 1);
  };

  console.log(step, messages.length);

  return (
    <>
      <button className='close' onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? <>&amp;</> : <>&times;</>}

        {/* &#215; */}
      </button>

      {isOpen && (
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
            >
              Previous
            </button>
            <button
              style={{
                backgroundColor: "#7950f2",
                color: "#fff",
              }}
              onClick={nextButton}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
