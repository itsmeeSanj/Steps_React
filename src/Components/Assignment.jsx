import React from "react";

export default function Assignment() {
  const [step, setStep] = React.useState(1);

  return (
    <>
      <Steps step={step} setStep={setStep} />
      <Counter step={step} />
    </>
  );
}

const Steps = ({ step, setStep }) => {
  return (
    <>
      <div>
        <button onClick={() => setStep(step - 1)}> -</button>
        &nbsp;Steps: {step}&nbsp;
        <button onClick={() => setStep(step + 1)}> + </button>
      </div>
    </>
  );
};

const Counter = ({ step }) => {
  const [count, setCount] = React.useState(0);

  const date = new Date("june 21 2025");
  date.setDate(date.getDate() + count);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setCount((c) => c - step);
          }}
        >
          {" "}
          -
        </button>
        &nbsp;Count: {count}&nbsp;
        <button
          onClick={() => {
            setCount((c) => c + step);
          }}
        >
          {" "}
          +{" "}
        </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
};
