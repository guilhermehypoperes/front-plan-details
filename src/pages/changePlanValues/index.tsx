import { Box, Stack, Text3, Text5 } from '@telefonica/mistica';
import Header from '../../components/header';

export default function ChangePlanValues() {
  return (
    <>
      <Header title="Alteração de valores do plano" />
      <Box paddingTop={32} paddingX={16}>
        <Text5>Alteração de valores do plano</Text5>
        <Box paddingTop={24}>
          <Stack space={24}>
            <Text3 regular color="#878787">
              Os planos de serviços vão ser reajustados de acordo com o índoce e
              data base previstos no Contrato de Prestação de Serviço.
            </Text3>
            <Text3 regular color="#878787">
              Os valores dos serviços contratados são promocionais com vigência
              disposta em regulamento próprio. Ao final da vigência do período
              promocional, a Vivo poderá renová-lo ou, mediante comunicação
              prévia de 30 dias de antecedência, apresentar uma nova condição
              comercial promocional com novos valores e prazo de vigência.
            </Text3>
            <Text3 regular color="#878787">
              Na ocorrência do término do período promocional sem renovação ou
              apresentação de nova condição comercial promocional, os valores
              praticados serão os vigentes nos respectivos planos de serviços.
            </Text3>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
