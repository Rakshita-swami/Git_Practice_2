import React, { memo, useState } from "react";
import { useStore } from "./store";

// CounterDisplay (re-renders only when count changes)
const CounterDisplay = memo(() => {
  const count = useStore((s) => s.count);
  const isEven = useStore((s) => s.isEven());

  return (
    <div className="rounded-2xl p-6 shadow bg-white">
      <h2 className="text-xl font-semibold">Counter</h2>
      <p className="text-4xl font-bold mt-2">{count}</p>
      <p className="mt-1 text-sm opacity-70">
        This number is {isEven ? "Even" : "Odd"}
      </p>
    </div>
  );
});

// NameDisplay (re-renders only when name changes)
const NameDisplay = memo(() => {
  const name = useStore((s) => s.name);

  return (
    <div className="rounded-2xl p-6 shadow bg-white">
      <h2 className="text-xl font-semibold">User</h2>
      <p className="mt-2 text-lg">
        Hello, <span className="font-medium">{name}</span>
      </p>
    </div>
  );
});

// Controls (calls store actions, doesn't subscribe to state)
const Controls = () => {
  const increment = useStore((s) => s.increment);
  const reset = useStore((s) => s.reset);
  const setName = useStore((s) => s.setName);

  const [localName, setLocalName] = useState("");

  return (
    <div className="rounded-2xl p-6 shadow bg-white">
      <h2 className="text-xl font-semibold">Controls</h2>
      <div className="mt-4 flex gap-3 flex-wrap">
        <button
          onClick={increment}
          className="px-4 py-2 rounded-2xl bg-black text-white"
        >
          + Increment
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 rounded-2xl bg-gray-200"
        >
          Reset
        </button>
      </div>

      <div className="mt-6">
        <label className="block text-sm mb-2">Change name</label>
        <div className="flex gap-2">
          <input
            value={localName}
            onChange={(e) => setLocalName(e.target.value)}
            placeholder="Type a name"
            className="flex-1 rounded-2xl border px-3 py-2"
          />
          <button
            onClick={() => setName(localName || "Rakshita")}
            className="px-4 py-2 rounded-2xl bg-blue-600 text-white"
          >
            Save
          </button>
        </div>
        <p className="text-xs opacity-70 mt-2">
          This component does not re-render when count changes (selector
          memoization).
        </p>
      </div>
    </div>
  );
};


const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold tracking-tight">
          Zustand: Closures + Memoization
        </h1>
        <p className="mt-2 opacity-80">
          Only components that read a specific slice of state re-render.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <CounterDisplay />
          <NameDisplay />
        </div>

        <div className="mt-6">
          <Controls />
        </div>
      </div>
    </div>
  );
};

export default App;
