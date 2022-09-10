import {
  Box,
  Boxed,
  createUseStyles,
  Stack,
  Text2,
  Text3,
  Text5,
} from '@telefonica/mistica';
import React from 'react';
import Header from '../../components/header';
const useStyles = createUseStyles(() => ({
  listStyle: {
    marginTop: 2,
    paddingLeft: 24,
    color: '#666666',
  },
}));

interface cancelationChargeProps {
  title: string,
  dateCycleRenewal: string,
  planValue: string,
  dataAllowance: string,
  callSmsTariffs: string,
  loyaltyTime: string,
  activatedSince: string,
  cancelInvoice: string,
  hired: string,
  loyaltyValue: string,
  validity: string,
}
export default function CancelationCharge() {

  const [data, setData] = React.useState<cancelationChargeProps>();

  const fetchData = async () => {

    const response : any = await fetch(`https://poc-mistica-br-backend.telefonicabigdata.com/mvbff/plandetails/basic-information`);
    const responseData = await response.json();
    setData(responseData.productBasicInformation);

  }

  React.useEffect(() => {
    if (!data) {
      fetchData();
    }
  })

  const classes = useStyles();

  return (
    <>
      <Header />
      <Box paddingTop={32} paddingX={16}>
        <Text5>Cobranças por cancelamento</Text5>
        {data && (
          <>
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
                  <Text3 medium>Valor: {data.cancelInvoice}</Text3>
                  <ul className={classes.listStyle}>
                    <li>
                      <Text2 regular color="#666666">
                        {data.hired}
                      </Text2>
                    </li>
                    <li>
                      <Text2 regular color="#666666">
                        {data.activatedSince}
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
                  <Text3 medium>Valor: {data.loyaltyValue}</Text3>
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
          </>
        )}
      </Box>
    </>
  );
}
