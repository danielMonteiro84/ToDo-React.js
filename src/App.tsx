import Text from "./components/text";

export default function App() {
  return (
    <div className="flex flex-col gap-2">
      <Text variant="body-sm-bold">Olá Mundo!</Text>
      <Text variant="body-md">Olá Mundo!</Text>
      <Text variant="body-md-bold">Olá Mundo!</Text>
    </div>
  );
}
