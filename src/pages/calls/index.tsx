import { Stack, Text1, Divider, Text2, Text3, Box } from '@telefonica/mistica';
import React from 'react';
import ContentLoader from 'react-content-loader';
import Header from '../../components/header';

interface callArrayProps {
  value: string,
  title: string
}
interface callInformation {
  callInformation: Array<callArrayProps>,
  internetInformation: Array<callArrayProps>,
  smsInformation: Array<callArrayProps>
}

export default function Calls() {

  const [data, setData] = React.useState<callInformation>();

  const fetchData = async () => {

    const response : any = await fetch("https://poc-mistica-br-backend.telefonicabigdata.com/mvbff/plandetails/contractual-information");
    const responseData = await response.json();
    setData(responseData.contractualInformation);

  }

  React.useEffect(() => {
    if (!data) {
      fetchData();
    }
  })

  return (
    <>
      <Header />
      {data ? (
        <Box paddingTop={32} paddingX={16}>
          <Text1 medium color="#595959">
            COBRANÇAS
          </Text1>
          <Box paddingY={16}>
            <Stack space={2}>
              <Text2 medium color="#595959">
                Tipo de Cobrança
              </Text2>
              <Text3 medium>{data.callInformation[0].value}</Text3>
            </Stack>
          </Box>
          <Divider />
          <Box paddingY={16}>
            <Stack space={2}>
              <Text2 medium color="#595959">
                Tempo Inicial para tarifação
              </Text2>
              <Text3 medium>{data.callInformation[1].value}</Text3>
            </Stack>
          </Box>
          <Divider />
          <Box paddingTop={16} paddingBottom={24}>
            <Stack space={2}>
              <Text2 medium color="#595959">
                SMS excedentes
              </Text2>
              <Text3 medium>{data.smsInformation[0].value}</Text3>
            </Stack>
          </Box>
          <Text1 medium color="#595959">
            LIGAÇÕES
          </Text1>
          <Box paddingY={16}>
            <Stack space={2}>
              <Text2 medium color="#595959">
                Locais pra Vivo Fixo
              </Text2>
              <Text3 medium>{data.callInformation[2].value}</Text3>
            </Stack>
          </Box>
          <Divider />
          <Box paddingY={16}>
            <Stack space={2}>
              <Text2 medium color="#595959">
                Locais pra outras operadoras
              </Text2>
              <Text3 medium>{data.callInformation[3].value}</Text3>
            </Stack>
          </Box>
          <Divider />
          <Box paddingY={16}>
            <Stack space={2}>
              <Text2 medium color="#595959">
                Longa distância pra Vivo Fixo/Móvel (utilizando o código 15)
              </Text2>
              <Text3 medium>{data.callInformation[4].value}</Text3>
            </Stack>
          </Box>
          <Divider />
          <Box paddingY={16}>
            <Stack space={2}>
              <Text2 medium color="#595959">
                Longa distância pra Vivo Fixo/Móvel de outras operadoras
                (utilizando o código 15)
              </Text2>
              <Text3 medium>{data.callInformation[5].value}</Text3>
            </Stack>
          </Box>
          <Divider />
          <Box paddingY={16}>
            <Stack space={2}>
              <Text2 medium color="#595959">
                Locais excedentes pra móvel de outras operadoras
              </Text2>
              <Text3 medium>{data.callInformation[6].value}</Text3>
            </Stack>
          </Box>
          <Divider />
          <Box paddingY={16}>
            <Stack space={2}>
              <Text2 medium color="#595959">
                Longa distância pra excedente fixo de outras operadoras
              </Text2>
              <Text3 medium>{data.callInformation[7].value}</Text3>
            </Stack>
          </Box>
        </Box>
      ) : (
        <Box paddingTop={32} paddingX={16}>
        <Text1 medium color="#595959">
          COBRANÇAS
        </Text1>
        <Box paddingY={16}>
          <Stack space={2}>
            <Text2 medium color="#595959">
              Tipo de Cobrança
            </Text2>
            <ContentLoader
                height={20}
            >
                <rect x="0" y="7" rx="4" ry="4" width="300" height="20" />
            </ContentLoader>
          </Stack>
        </Box>
        <Divider />
        <Box paddingY={16}>
          <Stack space={2}>
            <Text2 medium color="#595959">
              Tempo Inicial para tarifação
            </Text2>
            <ContentLoader
                height={20}
            >
                <rect x="0" y="7" rx="4" ry="4" width="300" height="20" />
            </ContentLoader>
          </Stack>
        </Box>
        <Divider />
        <Box paddingTop={16} paddingBottom={24}>
          <Stack space={2}>
            <Text2 medium color="#595959">
              SMS excedentes
            </Text2>
            <ContentLoader
                height={20}
            >
                <rect x="0" y="7" rx="4" ry="4" width="300" height="20" />
            </ContentLoader>
          </Stack>
        </Box>
        <Text1 medium color="#595959">
          LIGAÇÕES
        </Text1>
        <Box paddingY={16}>
          <Stack space={2}>
            <Text2 medium color="#595959">
              Locais pra Vivo Fixo
            </Text2>
            <ContentLoader
                height={20}
            >
                <rect x="0" y="7" rx="4" ry="4" width="300" height="20" />
            </ContentLoader>
          </Stack>
        </Box>
        <Divider />
        <Box paddingY={16}>
          <Stack space={2}>
            <Text2 medium color="#595959">
              Locais pra outras operadoras
            </Text2>
            <ContentLoader
                height={20}
            >
                <rect x="0" y="7" rx="4" ry="4" width="300" height="20" />
            </ContentLoader>
          </Stack>
        </Box>
        <Divider />
        <Box paddingY={16}>
          <Stack space={2}>
            <Text2 medium color="#595959">
              Longa distância pra Vivo Fixo/Móvel (utilizando o código 15)
            </Text2>
            <ContentLoader
                height={20}
            >
                <rect x="0" y="7" rx="4" ry="4" width="300" height="20" />
            </ContentLoader>
          </Stack>
        </Box>
        <Divider />
        <Box paddingY={16}>
          <Stack space={2}>
            <Text2 medium color="#595959">
              Longa distância pra Vivo Fixo/Móvel de outras operadoras
              (utilizando o código 15)
            </Text2>
            <ContentLoader
                height={20}
            >
                <rect x="0" y="7" rx="4" ry="4" width="300" height="20" />
            </ContentLoader>
          </Stack>
        </Box>
        <Divider />
        <Box paddingY={16}>
          <Stack space={2}>
            <Text2 medium color="#595959">
              Locais excedentes pra móvel de outras operadoras
            </Text2>
            <Text3 medium>Ilimitado</Text3>
          </Stack>
        </Box>
        <Divider />
        <Box paddingY={16}>
          <Stack space={2}>
            <Text2 medium color="#595959">
              Longa distância pra excedente fixo de outras operadoras
            </Text2>
            <Text3 medium>Ilimitado</Text3>
          </Stack>
        </Box>
      </Box>
      )}
    </>
  );
}
