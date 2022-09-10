import {
    createUseStyles,
    IconDollarSymbolCircleRegular,
    IconInternetLight,
    IconMobileDeviceRegular,
    IconMobileQuestionRegular,
    IconWarningLight,
    Popover,
    Row,
    RowList,
    Stack,
    Text1,
    Text2,
    Touchable,
    Carousel
} from "@telefonica/mistica";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";
import ContentLoader from "react-content-loader";
import CardCarousel from "../components/cardCarousel";
import Header from "../components/header";
import Option from "../components/option";
import { RowOption } from "../components/rowOption";
import {description } from "../mocks/description";

const useStyles = createUseStyles(() => ({
  stackHeader: {
    marginTop: -10,
    backgroundColor: '#FFFFFF',
    marginLeft: 8,
    marginRight: 6,
    zIndex: 1,
    borderRadius: 4,
  },
  icon: {
    marginTop: 10,
  },
  reactIcon: {
    marginTop: 10,
    height: 20,
    width: 24
  },
  secondStack: {
    marginTop: 20,
    marginLeft: 8,
  },
  warningButton: {
    marginTop: -1,
  }
}));

interface planDetailsProps {
    title: string,
    dateCycleRenewal: string,
    planValue: string,
    dataAllowance: string,
    callSmsTariffs: string,
    loyaltyTime: string
}

export interface appDescriptionProps {
    description: string,
    icon: string,
    name: string,
    url: string
}

interface relatedAppsProps {
    included: {
        appList: Array<appDescriptionProps>
    },
    unlimited: {
        appList: Array<appDescriptionProps>
    }
}

export default function PlanDetails() {

  const [loyalty, setLoyalty] = React.useState(true);
  const [showPopover, setShowPopover] = React.useState(true);
  const [data, setData] = React.useState<planDetailsProps>();
  const [apps, setApps] = React.useState<relatedAppsProps>();

  const classes = useStyles();

  const fetchData = async () => {
    const response : any = await fetch(`https://poc-mistica-br-backend.telefonicabigdata.com/mvbff/plandetails/basic-information`);
    const responseData = await response.json();
    setData(responseData.productBasicInformation);

  }

  const fetchApps = async () => {
    const responseApps : any = await fetch('https://poc-mistica-br-backend.telefonicabigdata.com/mvbff/plandetails/related-apps');
    const responseData = await responseApps.json();
    setApps(responseData.relatedApps);
  }

   React.useEffect(() => {
    if (!data) {
        fetchData();
    }
   })

   React.useEffect(() =>{
    if (!apps) {
        fetchApps();
    }
   })


    return (
        <>
            {data ? (
                <>
                    <Header
                        showExtraInfo
                        extraInfoTitle={data.title}
                        extraInfoSubtitle={`Minha internet renova em ${data.dateCycleRenewal}`}
                    />
                    <Stack
                        space={0}
                        className={classes.stackHeader}
                    >
                        <RowList>
                            <Row
                                title="Valor do plano"
                                extra={<Text2 color="#666666" regular >{data.planValue}</Text2>}
                                asset={<IconDollarSymbolCircleRegular className={classes.icon} />}
                            />
                            <Row
                                title="Internet"
                                extra={<Text2 color="#666666" regular >{data.dataAllowance}</Text2>}
                                asset={<IconInternetLight className={classes.icon} />}
                            />
                            <Row
                                title="Ligações e SMS"
                                extra={<Text2 color="#666666" regular >{data.callSmsTariffs}</Text2>}
                                asset={<IconMobileDeviceRegular
                                    className={classes.icon}
                                    color="#666666"
                                  />}
                            />
                            <Row
                                title={"Permanência Mínima"}
                                right={<Touchable onPress={() => setShowPopover(!showPopover)}>
                                        <IconWarningLight className={classes.warningButton}/>
                                        {loyalty && (
                                            <Popover
                                                target=""
                                                isVisible={!showPopover}
                                                description={`Seu plano possui permanência mínima de ${data.loyaltyTime}. Caso você cancele/altere seu serviço, você vai pagar pelos meses restantes. Confira o valor da cobrança em "Outras informações do plano"`}
                                                onClose={() => setShowPopover(!showPopover)}

                                            />
                                        )}
                                    </Touchable>}
                                extra={<Text2 color="#666666" regular >{data.loyaltyTime}</Text2>}
                                asset={<IconMobileQuestionRegular
                                    className={classes.icon}
                                    color="#666666"
                                  />}
                            />
                        </RowList>
                    </Stack>
                    <Stack
                        space={24}
                        className={classes.secondStack}
                    >
                        <Text1 medium color="#666666">MEUS BENEFÍCIOS</Text1>
                        <Carousel
                            items={[<CardCarousel key="1" title="Cinemark" description="Resgate Ingressos meia entrada, todos os dias nas salas padrão" extra="Confira regulamento"/>,
                                <CardCarousel key="2" title="Descontos" description="Em viagens e ofertas especiais em diversos parceiros" extra="Confira as ofertas"/>,
                                <CardCarousel key="3" title="Ingressos" description="Resgate ingressos pra pré-estreias, shows, eventos e mais" extra="Confira regulamento"/>
                            ]}
                        ></Carousel>
                        <Text1 medium color="#666666">SERVIÇOS DIGITAIS</Text1>
                        <Option title="Não gastam sua franquia" description={description[0]} apps={apps && apps.unlimited.appList} showApps/>
                        <Option title="Inclusos no plano" description={description[1]} apps={apps && apps.included.appList} showApps/>
                        <Text1 medium color="#666666">VEJA MAIS</Text1>
                        <RowOption title="Outras informações do plano" divider route="/otherContractInformation"/>
                        <RowOption title="Troca de plano" divider route="https://web.vivo.com.br/link/change-tariff"/>
                    </Stack>
                </>
            ) : (
                <>
                    <Header
                        showExtraInfo
                        extraInfoTitle="Vivo Controle"
                        extraInfoSubtitle=""
                        isLoading
                    />
                    <Stack
                        space={0}
                        className={classes.stackHeader}
                    >
                        <RowList>
                            {[0,1,2].map(item => (
                                <ContentLoader
                                    height={90}
                                    key={item}
                                >
                                    <rect x="10" y="15" rx="5" ry="5" width="70" height="60" />
                                    <rect x="85" y="17" rx="4" ry="4" width="300" height="13" />
                                    <rect x="85" y="40" rx="3" ry="3" width="250" height="10" />
                                </ContentLoader>
                            ))}
                        </RowList>
                    </Stack>
                    <Stack
                        space={24}
                        className={classes.secondStack}
                    >
                        <Text1 medium color="#666666">MEUS BENEFÍCIOS</Text1>
                        <ContentLoader
                            height={90}
                        >
                            <rect x="15" y="17" rx="4" ry="4" width="300" height="13" />
                            <rect x="15" y="40" rx="3" ry="3" width="250" height="10" />
                            <rect x="15" y="60" rx="3" ry="3" width="250" height="10" />
                        </ContentLoader>
                        <Text1 medium color="#666666">SERVIÇOS DIGITAIS</Text1>
                        <Option title="Não gastam sua franquia" description={description[0]} apps={apps && apps.unlimited.appList} showApps />
                        <Option title="Inclusos no plano" description={description[1]} apps={apps && apps.included.appList} showApps/>
                        <Text1 medium color="#666666">VEJA MAIS</Text1>
                        <RowOption title="Outras informações do plano" divider route="otherContractInformation"/>
                        <RowOption title="Troca de plano" divider route="https://web.vivo.com.br/link/change-tariff"/>
                    </Stack>
                </>
            )}
        </>
    )
}

export const getServerSideProps : GetServerSideProps = async (context : GetServerSidePropsContext) => {

    const { jwk } = context.query;

    const response = await fetch("https://poc-mistica-br-backend.telefonicabigdata.com/mvbff/plandetails/login", {
        method: "POST",
        body:JSON.stringify(jwk),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
    
    return { props: { data } };
    
  }