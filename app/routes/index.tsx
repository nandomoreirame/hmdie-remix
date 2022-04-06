import { CalculateForm, ResultType, Footer } from '~/components';
import { Description, Result, ResultItem, /* ResultTitle, */ Title, Wrapper } from '~/styles';

export default function Index() {
  const [result, setResult] = React.useState<ResultType>();

  const getResult = (res: ResultType) => {
    setResult(res);
  };

  return (
    <Wrapper>
      <Title>Calcule quantos dinheiro$$ você tem para receber com base em suas horas trabalhadas</Title>
      <Description>
        Uma{' '}
        <strong>
          <u>calculadora</u>
        </strong>{' '}
        que faz o <strong>cálculo base</strong> o seu montante em Reais (R$) com base em{' '}
        <strong>suas horas trabalhadas</strong> no seu aplicativo de <strong>tracking</strong>, <strong>toggl</strong>,{' '}
        <strong>clockify</strong>, etc.
      </Description>

      <CalculateForm handleResult={getResult} />

      {result && (
        <Result>
          {/* <ResultTitle>Resultado:</ResultTitle> */}
          {/* <ResultItem>
            Horas trabalhadas: <strong>{result.workedHours}</strong>
          </ResultItem>
          <ResultItem>
            Base de cálculo: <strong>{result.baseValue}</strong>
          </ResultItem> */}
          <ResultItem>
            A receber: <strong>{result.moneyFormatted}</strong>
          </ResultItem>
        </Result>
      )}

      <Footer />
    </Wrapper>
  );
}
