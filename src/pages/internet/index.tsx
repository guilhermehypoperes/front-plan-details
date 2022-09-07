import { Stack, createUseStyles, Text10, Text2 } from "@telefonica/mistica";
import { useRouter } from "next/router";
import React from "react";
import ContentLoader from "react-content-loader";
import Header from "../../components/header";
import { contractualInformation } from "../../mocks/description";

interface internetArrayProps {
    value: string,
    title: string
}
interface internetProps {
    details: Array<internetArrayProps>,
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

    const router = useRouter();

    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState<internetProps>();

    React.useEffect(() => {
        /*
        fetch("/mvbff/plandetails/contractualinformation").
            then(res => res.json()).
            then((data) =>
                setData(data.contractual_information.internet_information)
            );
        */
        setData(contractualInformation.contractual_information.internet_information);
        setIsLoading(false);
    }, [])

    const classes = useStyles();

    return (
        <>
            {!isLoading ? (
                <>
                    <Header
                        title="Internet"
                    />
                    <Stack
                        space={24}
                        className={classes.primeiraStack}
                    >
                        <Text2 medium color="#595959">{data.details[0].title.toUpperCase()}</Text2>
                        <Stack
                            space={8}
                            className={classes.stackPrincipal}
                        >
                            <Text10>{data.details[0].value}</Text10>
                            <Text2 regular color="#86888C">Em velocidade normal</Text2>
                        </Stack>
                    </Stack>
                    <Stack
                        space={24}
                        className={classes.segundaStack}
                    >
                        <Text2 medium color="#595959">{data.details[1].title.toUpperCase()}</Text2>
                        <Stack
                            space={8}
                            className={classes.stackPrincipal}
                        >
                            <Text10>{data.details[1].value}</Text10>
                            <Text2 regular color="#86888C">Em velocidade normal</Text2>
                        </Stack>
                    </Stack>
                </>
            ) : (
                <>
                    <Header
                        title="Internet"
                    />
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