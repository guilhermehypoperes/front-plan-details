import { Box, Stack, Text3, Text5 } from '@telefonica/mistica';
import Header from '../../components/header';

export default function NationalCoverage() {
  return (
    <>
      <Header title="Cobertura nacional do plano" />
      <Box paddingTop={32} paddingX={16}>
        <Text5>Cobertura nacional do plano</Text5>
        <Box paddingTop={24}>
          <Stack space={24}>
            <Text3 regular color="#878787">
              Caso você utilize dados e voz em áreas sem cobertura móvel da
              Vivo, é necessário entrar em contato pelo <b>1058</b> e
              informar-se sobre a disponibilidade dos serviços. Caso necessário,
              também entre em contato pelo <b>142</b>, exclusivo para PCD
              Auditiva.
            </Text3>
            <Text3 regular color="#878787">
              Pra mais detalhes, acesse o <b>mapa de cobertura</b>.
            </Text3>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
