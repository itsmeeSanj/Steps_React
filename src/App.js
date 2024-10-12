import React from "react";

export default function App() {
  const [step, setStep] = React.useState(1);

  return (
    <>
      <input
        type='range'
        min={1}
        max={10}
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      {step}

      <Counter step={step} setStep={setStep} />
    </>
  );
}

// const Steps = ({ step, setStep }) => {
//   return (
//     <>
//       <div>
//         <button onClick={() => setStep(step - 1)}> -</button>
//         &nbsp;Steps: {step}&nbsp;
//         <button onClick={() => setStep(step + 1)}> + </button>
//       </div>
//     </>
//   );
// };

const Counter = ({ step, setStep }) => {
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
        <input
          type='text'
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        {/* &nbsp;Count: {count}&nbsp; */}
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
      {/*  */}
      {(count !== 0 || step !== 1) && (
        <button
          onClick={() => {
            setStep(1);
            setCount(0);
          }}
        >
          Reset
        </button>
      )}
    </>
  );
};

// function Steps() {
//   const [step, setStep] = React.useState(1);
//   const [isOpen, setIsOpen] = React.useState(true);

//   const messages = [
//     "Learn React ⚛️",
//     "Apply for jobs 💼",
//     "Invest your new income 🤑",
//   ];

//   const prevButton = () => {
//     step > 1 && setStep((step) => step - 1);
//   };

//   const nextButton = () => {
//     step < 3 && setStep((step) => step + 1);
//   };

//   return (
//     <div>
//       {/* assigning callback function to change the correct state */}
//       <button className='close' onClick={() => setIsOpen((isOpen) => !isOpen)}>
//         {!isOpen ? <>&amp;</> : <>&times;</>}

//         {/* &#215; */}
//       </button>

//       {isOpen && (
//         <div className='steps'>
//           <div className='numbers'>
//             <div className={`${step >= 1 ? "active" : ""}`}>1</div>
//             <div className={`${step >= 2 ? "active" : ""}`}>2</div>
//             <div className={`${step >= 3 ? "active" : ""}`}>3</div>
//           </div>

//           <p className='message'>
//             Step {step} - {messages[step - 1]}
//           </p>

//           <div className='buttons'>
//             <button
//               style={{
//                 backgroundColor: "#7950f2",
//                 color: "#fff",
//               }}
//               onClick={prevButton}
//             >
//               Previous
//             </button>
//             <button
//               style={{
//                 backgroundColor: "#7950f2",
//                 color: "#fff",
//               }}
//               onClick={nextButton}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
