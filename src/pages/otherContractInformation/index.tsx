import {
  Box,
  Carousel,
  IconBlogRegular,
  IconDocumentOtherRegular,
  Text1,
} from '@telefonica/mistica';
import { CardSmallCarousel } from '../../components/cardSmallCarousel';
import Header from '../../components/header';
import { RowOption } from '../../components/rowOption';

export default function OtherContractInformation() {
  return (
    <>
      <Header title="Outras informações do plano" />
      <Box paddingTop={32} paddingBottom={16} paddingLeft={16}>
        <Text1 medium color="#595959">
          MEUS CONTRATOS
        </Text1>
      </Box>
      <Box paddingLeft={16}>
        <Carousel
          itemsPerPage={2}
          items={[
            <CardSmallCarousel
              key="0"
              title="Resumo do Contrato"
              route="/contractSummary"
              icon={<IconBlogRegular color="#666666" />}
            />,
            <CardSmallCarousel
              key="1"
              title="Regulamento do plano"
              icon={<IconDocumentOtherRegular color="#666666" />}
            />,
            <CardSmallCarousel
              key="2"
              title="Adesão e permanência"
              icon={<IconBlogRegular color="#666666" />}
            />,
          ]}
        ></Carousel>
      </Box>
      <Box paddingTop={32} paddingLeft={16}>
        <Text1 medium color="#595959">
          INFORMAÇÕES GERAIS
        </Text1>
      </Box>
      <RowOption title="Internet" divider route="/internet" />
      <RowOption title="Ligações e SMS" divider route="/calls" />
      <Box paddingTop={24} paddingLeft={16}>
        <Text1 medium color="#595959">
          TERMOS E CONDIÇÕES
        </Text1>
      </Box>
      <RowOption
        title="Utilização e ativação do serviço"
        divider
        route="/activateService"
      />
      <RowOption
        title="Alteração de valores do plano"
        divider
        route="/changePlanValues"
      />
      <RowOption
        title="Cobranças por cancelamento"
        divider
        route="/cancelationCharge"
      />
      <RowOption
        title="Cobertura nacional do plano"
        route="/nationalCoverage"
      />
    </>
  );
}
