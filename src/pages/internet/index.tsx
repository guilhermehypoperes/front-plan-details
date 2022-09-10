import { Stack, createUseStyles, Text10, Text2 } from "@telefonica/mistica";
import React from "react";
import ContentLoader from "react-content-loader";
import Header from "../../components/header";

interface internetArrayProps {
    value: string,
    title: string
}
interface internetProps {
    callInformation: Array<internetArrayProps>,
    internetInformation: Array<internetArrayProps>,
    smsInformation: Array<internetArrayProps>
}

const useStyles = createUseStyles(() => ({
    primeiraStack: {
        marginTop: 15,
        marginLeft: 15
    },
    segundaStack: {
        marginTop: 45,
        marginLeft: 15
    },
    stackPrincipal: {
        width: 150,
        borderRadius: 8,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#DDDDDD",
        padding: 14
    }
}))

export default function Internet() {

    const [data, setData] = React.useState<internetProps>();

    const fetchData = async () => {

        const response : any = await fetch("https://poc-mistica-br-backend.telefonicabigdata.com/mvbff/plandetails/contractual-information");
        const responseData = await response.json();
        setData(responseData.contractualInformation);

    }

    React.useEffect(() => {
        fetchData();
    }, [])

    const classes = useStyles();

    return (
        <>
            {data ? (
                <>
                    <Header/>
                    <Stack
                        space={24}
                        className={classes.primeiraStack}
                    >
                        <Text2 medium color="#595959">{data.internetInformation[0].title.toUpperCase()}</Text2>
                        <Stack
                            space={8}
                            className={classes.stackPrincipal}
                        >
                            <Text10>{data.internetInformation[0].value}</Text10>
                            <Text2 regular color="#86888C">Em velocidade normal</Text2>
                        </Stack>
                    </Stack>
                    <Stack
                        space={24}
                        className={classes.segundaStack}
                    >
                        <Text2 medium color="#595959">{data.internetInformation[1].title.toUpperCase()}</Text2>
                        <Stack
                            space={8}
                            className={classes.stackPrincipal}
                        >
                            <Text10>{data.internetInformation[1].value}</Text10>
                            <Text2 regular color="#86888C">Em velocidade normal</Text2>
                        </Stack>
                    </Stack>
                </>
            ) : (
                <>
                    <Header/>
                    <Stack
                        space={24}
                        className={classes.primeiraStack}
                    >
                        <ContentLoader
                            height={40}
                        >
                            <rect x="5" y="15" rx="5" ry="5" width="400" height="40" />
                        </ContentLoader>
                        <Stack
                            space={8}
                            className={classes.stackPrincipal}
                        >
                            <ContentLoader
                                height={60}
                            >
                                <rect x="5" y="15" rx="5" ry="5" width="100" height="60" />
                            </ContentLoader>
                            <Text2 regular color="#86888C">Em velocidade normal</Text2>
                        </Stack>
                    </Stack>
                    <Stack
                        space={24}
                        className={classes.segundaStack}
                    >
                        <ContentLoader
                            height={40}
                        >
                            <rect x="5" y="15" rx="5" ry="5" width="400" height="40" />
                        </ContentLoader>
                        <Stack
                            space={8}
                            className={classes.stackPrincipal}
                        >
                            <ContentLoader
                                height={60}
                            >
                                <rect x="5" y="15" rx="5" ry="5" width="100" height="60" />
                            </ContentLoader>
                            <Text2 regular color="#86888C">Em velocidade normal</Text2>
                        </Stack>
                    </Stack>
                </>
            )}
        </>
    )
}