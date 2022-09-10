import { Box, Stack, Text3, Text5 } from '@telefonica/mistica';
import Header from '../../components/header';

export default function ActivateService() {
  return (
    <>
      <Header />
      <Box paddingY={32} paddingX={16}>
        <Text5>Utilização e ativação do serviço</Text5>
        <Box paddingTop={24}>
          <Stack space={24}>
            <Text3 regular color="#878787">
              Os benefícios do serviço contratato, vão estar disponíveis em até
              24h (vinte e quatro horas) após a solicitação.
            </Text3>
            <Text3 regular color="#878787">
              É responsabilidade do Usuário o correto uso dos beneficios desta
              Promoção, podendo ser responsabilizado pelo uso do servico e
              equipamentos de forma ilegal, inadequada e/ou fora dos moldes e da
              finalidade especifica prevista contratualmente, respondendo por
              prejuizos causados à outros usuários, à Vivo, ou ainda à outras
              operadoras.
            </Text3>
            <Text3 regular color="#878787">
              A Vivo, dentro das determinações legais e normativas aplicáveis,
              poderá monitorar e suspender ou cancelar, imediatamente os
              beneficios desta Promoção bem como o Plano de Serviço ao qual o
              Usuário participante estiver vinculado, caso constate consumo ou
              utilização inadequada.
            </Text3>
            <Text3 regular color="#878787">
              Dentre outros aspectos, poderá ser considerado us inadequado:
            </Text3>
            <Stack space={2}>
              <Text3 regular color="#878787">
                1. Comercialização de minutos serviços;
              </Text3>
              <Text3 regular color="#878787">
                2. Utilização do Chip em equipamentos como GSM Box, Black Box,
                PABX e equipamentos similars potencializando o uso de minutos e
                servicos;
              </Text3>
              <Text3 regular color="#878787">
                3. Limite de 40 números diferentes de destino por dia;{' '}
              </Text3>
              <Text3 regular color="#878787">
                4. Uso continuo por mais de 2 horas ininterruptas;{' '}
              </Text3>
              <Text3 regular color="#878787">
                5. Recebimento de chamadas em volume inferior a 33% do volume
                originado.
              </Text3>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
