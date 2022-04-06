import { Button, Input, FormGroup, Form, Label } from '~/styles';

export type ResultType = {
  baseValue: string;
  workedHours: string;
  moneyFormatted: string;
};

export interface CalculateFormProps {
  handleResult: (result: ResultType) => void;
}

export function CalculateForm({ handleResult }: CalculateFormProps): React.ReactElement {
  const [baseValue, setBaseValue] = React.useState<string>('');
  const [workedHours, setWorkedHours] = React.useState<string>('');

  const inputBase = React.useRef();
  const inputHours = React.useRef();

  React.useEffect(() => {
    handleChangeBase();
    handleChangeHours();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const moneyFormat = (value: string, options = {}) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', ...options }).format(value);
  };

  const handleChangeBase = (event: React.ChangeEventHandler<HTMLInputElement>) => {
    const inputValue = inputBase.current.value.replace(/\D/g, '');
    const formattedValue = moneyFormat(inputValue, { minimumFractionDigits: 0 });

    inputBase.current.value = formattedValue;
    setBaseValue(formattedValue.replace(/\D/g, ''));
  };

  const handleChangeHours = (event: React.ChangeEventHandler<HTMLInputElement>) => {
    const { value } = inputHours.current;
    const match = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})/);
    const formattedValue = !match[2] ? match[1] : `${match[1]}:${match[2]}`;

    inputHours.current.value = formattedValue;

    setWorkedHours(formattedValue);
  };

  const handleFormat = () => {
    const splitHour = workedHours.split(':');
    const hour = +splitHour[0];
    const min = +splitHour[1];
    const moneyTotal = ((hour * 60 + min) * baseValue) / 60;

    const moneyFormatted = moneyFormat(moneyTotal);
    const baseFormated = moneyFormat(baseValue);
    if (handleResult) handleResult({ baseValue: baseFormated, workedHours, moneyFormatted });
  };

  return (
    <Form>
      <FormGroup>
        <Label htmlFor="WorkedHours">Horas trabalhadas</Label>
        <Input ref={inputHours} id="WorkedHours" defaultValue="38:11" maxLength={5} onChange={handleChangeHours} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="BaseValue">Base valor hora</Label>
        <Input ref={inputBase} id="BaseValue" defaultValue="100" onChange={handleChangeBase} />
      </FormGroup>
      <FormGroup>
        <Label>&nbsp;</Label>
        <Button onClick={handleFormat}>Calcular valores</Button>
      </FormGroup>
    </Form>
  );
}
