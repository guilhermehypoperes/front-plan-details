import {
  Box,
  Boxed,
  createUseStyles,
  Stack,
  Text2,
  Text3,
  Text5,
} from '@telefonica/mistica';
import Header from '../../components/header';
const useStyles = createUseStyles(() => ({
  listStyle: {
    marginTop: 2,
    paddingLeft: 24,
    color: '#666666',
  },
}));

export default function CancelationCharge() {
  const classes = useStyles();
  return (
    <>
      <Header title="Cobranças por cancelamento" />
      <Box paddingTop={32} paddingX={16}>
        <Text5>Cobranças por cancelamento</Text5>
        <Box paddingY={24}>
          <Text3 regular color="#878787">
            Caso você cancele ou altere algum de nossos serviços antes da
            finalização da permanência mínima, você vai pagar pelo tempo
            proporcional faltante dos 12 meses (pro rata).
          </Text3>
        </Box>
        <Stack space={16}>
          <Boxed>
            <Box paddingX={16} paddingTop={16}>
              <Text3 medium>Valor: R$ 250,00</Text3>
              <ul className={classes.listStyle}>
                <li>
                  <Text2 regular color="#666666">
                    Contratado em 01/01/22
                  </Text2>
                </li>
                <li>
                  <Text2 regular color="#666666">
                    Seu plano está ativo há 8 meses
                  </Text2>
                </li>
                <li>
                  <Text2 regular color="#666666">
                    Valor correspondente aos meses restantes no contato
                  </Text2>
                </li>
              </ul>
            </Box>
          </Boxed>
          <Boxed>
            <Box paddingX={16} paddingTop={16}>
              <Text3 medium>Valor: R$ 0,00</Text3>
              <ul className={classes.listStyle}>
                <li>
                  <Text2 regular color="#666666">
                    Sua fidelidade de 12 meses chegou ao fim e você não vai
                    precisar pagar pelas cobranças de cancelamento/alteração
                  </Text2>
                </li>
              </ul>
            </Box>
          </Boxed>
        </Stack>
      </Box>
    </>
  );
}
