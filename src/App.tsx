import "./App.css";
import TextInput from "./components/TextInput/TextInput";

function App() {
  return (
    <div className="card">
      <TextInput
        type="email"
        label="Email"
        hint="This is a hint text."
        placeholder="name@email.com"
        endIcon="CircleHelp"
      />
      <TextInput
        type="email"
        label="Email"
        hint="This is a hint text."
        placeholder="name@email.com"
        endIcon="CircleHelp"
        startIcon="Mail"
      />
      <TextInput
        type="email"
        label="Email"
        hint="This is a hint text."
        placeholder="name@email.com"
        endIcon="CircleHelp"
      />
      <TextInput
        type="email"
        label="Email"
        hint="This is a hint text."
        value="name@email.com"
        endIcon="CircleHelp"
        error="This is an error message"
      />
    </div>
  );
}

export default App;
