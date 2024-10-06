function App() {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  return (
    <div className='steps'>
      <div className='numbers'>
        <div className='active'>1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <p className='message'>ss</p>

      <div className='buttons'>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default App;
