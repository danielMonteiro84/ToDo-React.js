import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import XIcon from "./assets/icons/x.svg?react";
import Icon from "./components/icon";
import Bagde from "./components/bagde";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";

export default function App() {
  return (
    <div className="grid gap-4">
      <div className="flex flex-col gap-2">
        <Text variant="body-sm-bold">Olá Mundo!</Text>
        <Text variant="body-md">Olá Mundo!</Text>
        <Text variant="body-md-bold">Olá Mundo!</Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-pink-base" />
        <Icon svg={CheckIcon} />
        <Icon svg={PencilIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={SpinnerIcon} animate />
        <Icon svg={XIcon} />
      </div>

      <div>
        <Bagde variant="secundary">5</Bagde>
        <Bagde variant="primary">2 de 5</Bagde>
      </div>

      <div>
        <Button icon={PlusIcon}>Nova Tarefa</Button>
      </div>

      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} variant="secundary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
      </div>

      <div>
        <InputText />
      </div>
    </div>
  );
}
