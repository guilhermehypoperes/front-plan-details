import { Stack, Text1, Divider, Text2, Text3, Box } from '@telefonica/mistica';
import { useRouter } from 'next/router';
import React from 'react';
import ContentLoader from 'react-content-loader';
import Header from '../../components/header';
import { contractualInformation } from "../../mocks/description";

interface callInformationArray {
  title: string,
  value: string
}
interface callInformation {
  call_information: {
    details: Array<callInformationArray>
  },
  sms_information: {
    details: Array<callInformationArray>
  }
}

export default function Calls() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState<callInformation>();

  React.useEffect(() => {
    /*
    fetch("/mvbff/plandetails/contractualinformation").
        then(res => res.json()).
        then((data) =>
            setData(data.contractual_information)
        );
    */
    setData(contractualInformation.contractual_information);
    setIsLoading(false);
  }, [])

  return (
    <>
      <Header title="Ligações e SMS" />
      {!isLoading ? (
        <Box paddingTop={32} paddingX={16}>
          <Text1 medium color="#595959">
            COBRANÇAS
          </Text1>
          <Box paddingY={16}>
            <Stack space={2}>
              <Text2 medium color="#595959">
                Tipo de Cobrança
              </Text2>
              <Text3 medium>{data.call_information.details[0].value}</Text3>
            </Stack>
          </Box>
          <Divider />
          <Box paddingY={16}>
            <Stack space={2}>
              <Text2 medium color="#595959">
                Tempo Inicial para tarifação
              </Text2>
              <Text3 medium>{data.call_information.details[1].value}</Text3>
            </Stack>
          </Box>
          <Divider />
          <Box paddingTop={16} paddingBottom={24}>
            <Stack space={2}>
              <Text2 medium color="#595959">
                SMS excedentes
              </Text2>
              <Text3 medium>{data.sms_information.details[0].value}</Text3>
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
              <Text3 medium>{data.call_information.details[2].value}</Text3>
            </Stack>
          </Box>
          <Divider />
          <Box paddingY={16}>
            <Stack space={2}>
              <Text2 medium color="#595959">
                Locais pra outras operadoras
              </Text2>
              <Text3 medium>{data.call_information.details[3].value}</Text3>
            </Stack>
          </Box>
          <Divider />
          <Box paddingY={16}>
            <Stack space={2}>
              <Text2 medium color="#595959">
                Longa distância pra Vivo Fixo/Móvel (utilizando o código 15)
              </Text2>
              <Text3 medium>{data.call_information.details[4].value}</Text3>
            </Stack>
          </Box>
          <Divider />
          <Box paddingY={16}>
            <Stack space={2}>
              <Text2 medium color="#595959">
                Longa distância pra Vivo Fixo/Móvel de outras operadoras
                (utilizando o código 15)
              </Text2>
              <Text3 medium>{data.call_information.details[5].value}</Text3>
            </Stack>
          </Box>
          <Divider />
          <Box paddingY={16}>
            <Stack space={2}>
              <Text2 medium color="#595959">
                Locais excedentes pra móvel de outras operadoras
              </Text2>
              <Text3 medium>{data.call_information.details[6].value}</Text3>
            </Stack>
          </Box>
          <Divider />
          <Box paddingY={16}>
            <Stack space={2}>
              <Text2 medium color="#595959">
                Longa distância pra excedente fixo de outras operadoras
              </Text2>
              <Text3 medium>{data.call_information.details[7].value}</Text3>
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
