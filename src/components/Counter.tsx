import { useState } from 'react';

interface CounterProps {
  title: string;
  start?: number;
}

export default function Counter({
  title,
  start = 0
}: CounterProps) {
  const [count, setCount] = useState<number>(start);

  return (
    <div>
      <h2>{title}</h2>
      <h1 style={{ color: count > 20 ? 'red' : 'inherit' }}>
        {count}
      </h1>

      <button onClick={() => setCount(count + 1)}>
        +1
      </button>

      <button
        onClick={() => setCount(Math.max(0, count - 1))}
        disabled={count === 0}
      >
        -1
      </button>

      <button onClick={() => setCount(start)}>
        Reset
      </button>
    </div>
  );
}