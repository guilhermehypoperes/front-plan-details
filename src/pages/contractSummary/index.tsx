import {
  Box,
  ButtonFixedFooterLayout,
  ButtonLink,
  ButtonPrimary,
  ButtonSecondary,
  createUseStyles,
  Divider,
  IconBlogRegular,
  IconDollarSymbolCircleRegular,
  IconInformationUserRegular,
  IconInternetRegular,
  IconMobileDeviceRegular,
  IconMobileQuestionRegular,
  IconWarningLight,
  Popover,
  Row,
  Stack,
  Text1,
  Text2,
  Text3,
  Text6,
  Touchable,
} from '@telefonica/mistica';
import { useRouter } from 'next/router';
import React from 'react';
import ContentLoader from 'react-content-loader';
import Header from '../../components/header';

const useStyles = createUseStyles(() => ({
  icon: {
    marginTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
}));

interface contractSummaryProps {
  title: string,
  dateCycleRenewal: string,
  planValue: string,
  dataAllowance: string,
  callSmsTariffs: string,
  loyaltyTime: string,
  validity: string,
  cancelInvoice: string,
}

export default function ContractSummary() {
  const router = useRouter();

  const [data, setData] = React.useState<contractSummaryProps>();
  const [loyalty, setLoyalty] = React.useState(true);
  const [showPopover, setShowPopover] = React.useState(false);
  const classes = useStyles();

  const fetchData = async () => {

    const response : any = await fetch("https://poc-mistica-br-backend.telefonicabigdata.com/mvbff/plandetails/basic-information");
    const responseData = await response.json();
    setData(responseData.productBasicInformation);

  }

  React.useEffect(() => {
    if (!data) {
      fetchData();
    }
  })

  return (
    <>
      <Header />
      <Box paddingTop={24}>
        <Box paddingX={16}>
          <Text6>Informações simplificadas, na palma da mão</Text6>
        </Box>
        <Box paddingTop={16}>
          {data ? (
            <>
              <Row
                title="Valor do plano"
                extra={
                  <Text2 color="#666666" regular>
                    {data.planValue}
                  </Text2>
                }
                asset={
                  <IconDollarSymbolCircleRegular
                    className={classes.icon}
                    color="#666666"
                  />
                }
              />
              <Box paddingX={16}>
                <Divider />
              </Box>
              <Row
                title="Internet"
                extra={
                  <Text2 color="#666666" regular>
                    {data.dataAllowance}
                  </Text2>
                }
                asset={
                  <IconInternetRegular
                    className={classes.icon}
                    color="#666666"
                  />
                }
              />
              <Box paddingX={16}>
                <Divider />
              </Box>
              <Row
                title="Ligações e SMS"
                extra={
                  <Text2 color="#666666" regular>
                    {data.callSmsTariffs}
                  </Text2>
                }
                asset={
                  <IconMobileDeviceRegular
                    className={classes.icon}
                    color="#666666"
                  />
                }
              />
              <Box paddingX={16}>
                <Divider />
              </Box>
              {loyalty && (
                <>
                  <Row
                    title="Vigência do contrato"
                    extra={
                      <Text2 color="#666666" regular>
                        {data.validity}
                      </Text2>
                    }
                    asset={
                      <IconBlogRegular
                        className={classes.icon}
                        color="#666666"
                      />
                    }
                  />
                  <Box paddingX={16}>
                    <Divider />
                  </Box>
                  <Row
                    title="Cobranças por cancelamento"
                    right={
                      <Touchable onPress={() => setShowPopover(!showPopover)}>
                        <IconInformationUserRegular
                          color="#666666"
                          style={{ marginTop: 10 }}
                        />{' '}
                        {showPopover && (
                          <Popover
                            target=""
                            description={`Esse valor é calculado com base nos meses restantes do seu contrato`}
                            onClose={() => setShowPopover(!showPopover)}
                          />
                        )}
                      </Touchable>
                    }
                    extra={
                      <Text2 color="#666666" regular>
                        {data.cancelInvoice}
                      </Text2>
                    }
                    asset={
                      <IconMobileQuestionRegular
                        className={classes.icon}
                        color="#666666"
                      />
                    }
                  />
                </>
              )}
            </>
          ) : (
          <>
            <Row
              title="Valor do plano"
              extra={
                <ContentLoader
                    height={20}
                >
                  <rect x="0" y="7" rx="4" ry="4" width="300" height="20" />
                </ContentLoader>
              }
              asset={
                <IconDollarSymbolCircleRegular
                  className={classes.icon}
                  color="#666666"
                />
              }
            />
            <Box paddingX={16}>
              <Divider />
            </Box>
            <Row
              title="Internet"
              extra={
                <ContentLoader
                  height={20}
                >
                    <rect x="0" y="7" rx="4" ry="4" width="300" height="20" />
                </ContentLoader>
              }
              asset={
                <IconInternetRegular
                  className={classes.icon}
                  color="#666666"
                />
              }
            />
            <Box paddingX={16}>
              <Divider />
            </Box>
            <Row
              title="Ligações e SMS"
              extra={
                <ContentLoader
                  height={20}
                >
                    <rect x="0" y="7" rx="4" ry="4" width="300" height="20" />
                </ContentLoader>
              }
              asset={
                <IconMobileDeviceRegular
                  className={classes.icon}
                  color="#666666"
                />
              }
            />
            <Box paddingX={16}>
              <Divider />
            </Box>
            {loyalty && (
              <>
                <Row
                  title="Vigência do contrato"
                  extra={
                    <ContentLoader
                      height={20}
                    >
                        <rect x="0" y="7" rx="4" ry="4" width="300" height="20" />
                    </ContentLoader>
                  }
                  asset={
                    <IconBlogRegular
                      className={classes.icon}
                      color="#666666"
                    />
                  }
                />
                <Box paddingX={16}>
                  <Divider />
                </Box>
                {showPopover && (
                  <Popover
                    target=""
                    description={`Esse valor é calculado com base nos meses restantes do seu contrato`}
                    onClose={() => setShowPopover(!showPopover)}
                  />
                )}
                <Row
                  title="Cobranças por cancelamento"
                  right={
                    <ButtonLink onPress={() => setShowPopover(!showPopover)}>
                      <IconWarningLight
                        color="#666666"
                        style={{ marginTop: 10 }}
                      />
                    </ButtonLink>
                  }
                  extra={
                    <ContentLoader
                      height={20}
                    >
                        <rect x="0" y="7" rx="4" ry="4" width="300" height="20" />
                    </ContentLoader>
                  }
                  asset={
                    <IconMobileQuestionRegular
                      className={classes.icon}
                      color="#666666"
                    />
                  }
                />
              </>
            )}
          </>
          )}
        </Box>
        <Box paddingTop={16} paddingX={16} paddingBottom={32}>
          <Stack space={8}>
            <Text1 medium color="#86888C">
              MAIS SOBRE O CONTRATO
            </Text1>
            <Text3 regular color="#666666">
              Esse foi um resumo com os principais pontos importantes. Você pode
              ver o contrato único agora ou enviar por e-mail.
            </Text3>
          </Stack>
        </Box>
        <ButtonFixedFooterLayout
          button={
            <ButtonPrimary onPress={() => {}}>Baixar contrato</ButtonPrimary>
          }
          secondaryButton={
            <ButtonSecondary style={{ border: 'none' }} onPress={() => {}}>
              Enviar por e-mail
            </ButtonSecondary>
          }
        >
          <></>
        </ButtonFixedFooterLayout>
      </Box>
    </>
  );
}
