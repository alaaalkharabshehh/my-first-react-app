import Counter from './components/Counter';

function App() {
  return (
    <div>
      <h1>My Counters</h1>

      <Counter title="Coffee cups" />

      <Counter title="Push-ups" start={10} />
    </div>
  );
}

export default App;