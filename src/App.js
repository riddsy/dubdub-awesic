import Button from './Components/Button';
import Toggle from './Components/Toggle';
import Label from './Components/Label';

function App() {
  const theme = {
    colors: {
      primary: ['153,23,123'],
    },
  };
  return (
    <div>
      <Button label='hey' />
      <Toggle theme={theme} />
      <Label text='yoi' />
    </div>
  );
}

export default App;
