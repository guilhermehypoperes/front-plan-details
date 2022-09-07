import {
    Carousel,
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
} from "@telefonica/mistica";
import React from "react";
import ContentLoader from "react-content-loader";
import CardCarousel from "../components/cardCarousel";
import Header from "../components/header";
import Option from "../components/option";
import OptionWithoutIcon from "../components/optionWithoutIcon";
import {description, basicInformation} from "../mocks/description";

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
    date_cycle_renewal: string,
    plan_value: string,
    data_allowance: string,
    call_sms_tariffs: string,
    loyalty_time: string
}

export default function PlanDetails() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [loyalty, setLoyalty] = React.useState(true);
  const [showPopover, setShowPopover] = React.useState(true);
  const [data, setData] = React.useState<planDetailsProps>();

  const classes = useStyles();

  React.useEffect(() => {
    /*
    fetch("/mvbff/plandetails/basicinformation").
        then(res => res.json()).
        then((data) =>
            setData(data.product_basic_information)
        );
    */
    setData(basicInformation.product_basic_information);
    setIsLoading(false);
  }, [])

    return (
        <>
            {!isLoading ? (
                <>
                    <Header
                        title="Detalhes do plano"
                        showExtraInfo
                        extraInfoTitle={data.title}
                        extraInfoSubtitle={`Minha internet renova em ${data.date_cycle_renewal}`}
                    />
                    <Stack
                        space={0}
                        className={classes.stackHeader}
                    >
                        <RowList>
                            <Row
                                title="Valor do plano"
                                extra={<Text2 color="#666666" regular >{data.plan_value}</Text2>}
                                asset={<IconDollarSymbolCircleRegular className={classes.icon} />}
                            />
                            <Row
                                title="Internet"
                                extra={<Text2 color="#666666" regular >{data.data_allowance}</Text2>}
                                asset={<IconInternetLight className={classes.icon} />}
                            />
                            <Row
                                title="Ligações e SMS"
                                extra={<Text2 color="#666666" regular >{data.call_sms_tariffs}</Text2>}
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
                                                description={`Seu plano possui permanência mínima de ${data.loyalty_time}. Caso você cancele/altere seu serviço, você vai pagar pelos meses restantes. Confira o valor da cobrança em "Outras informações do plano"`}
                                                onClose={() => setShowPopover(!showPopover)}

                                            />
                                        )}
                                    </Touchable>}
                                extra={<Text2 color="#666666" regular >{data.loyalty_time}</Text2>}
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
                        <Option title="Não gastam sua franquia" description={description[0]}/>
                        <Option title="Inclusos no plano" description={description[1]}/>
                        <Text1 medium color="#666666">VEJA MAIS</Text1>
                        <OptionWithoutIcon title="Outras informações do plano"/>
                        <OptionWithoutIcon title="Troca de plano"/>
                    </Stack>
                </>
            ) : (
                <>
                    <Header
                        title="Detalhes do plano"
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
                            <ContentLoader
                                height={90}
                            >
                                <rect x="10" y="15" rx="5" ry="5" width="70" height="60" />
                                <rect x="85" y="17" rx="4" ry="4" width="300" height="13" />
                                <rect x="85" y="40" rx="3" ry="3" width="250" height="10" />
                            </ContentLoader>
                            <ContentLoader
                                height={90}
                            >
                                <rect x="10" y="15" rx="5" ry="5" width="70" height="60" />
                                <rect x="85" y="17" rx="4" ry="4" width="300" height="13" />
                                <rect x="85" y="40" rx="3" ry="3" width="250" height="10" />
                            </ContentLoader>
                            <ContentLoader
                                height={90}
                            >
                                <rect x="10" y="15" rx="5" ry="5" width="70" height="60" />
                                <rect x="85" y="17" rx="4" ry="4" width="300" height="13" />
                                <rect x="85" y="40" rx="3" ry="3" width="250" height="10" />
                            </ContentLoader>
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
                        <Option title="Não gastam sua franquia" description={description[0]} showApps/>
                        <Option title="Inclusos no plano" description={description[1]} />
                        <Text1 medium color="#666666">VEJA MAIS</Text1>
                        <OptionWithoutIcon title="Outras informações do plano"/>
                        <OptionWithoutIcon title="Troca de plano"/>
                    </Stack>
                </>
            )}
        </>
    )
}