import { createUseStyles, NavigationBar, Stack, Text3, Text7 } from "@telefonica/mistica";
import { useRouter } from "next/router";
import ContentLoader from "react-content-loader";

interface HeaderProps {
    showExtraInfo?: boolean,
    extraInfoTitle?: string,
    extraInfoSubtitle?: string,
    isLoading?: boolean
}

const useStyles = createUseStyles(() => ({
    boxHeader: {
        backgroundColor: "#660099",
        width: "100vw",
        margin: -8,
        padding: 20
    }
}))

export default function Header({
        showExtraInfo,
        extraInfoTitle,
        extraInfoSubtitle,
        isLoading} : HeaderProps
    ) {
    const router = useRouter();

    const classes = useStyles();

    return (
        <>
            {showExtraInfo && (
                <Stack
                    space={16}
                    className={classes.boxHeader}
                >
                    {!isLoading ? (
                        <>
                            <Text7 color="white">{extraInfoTitle}</Text7>
                            <br/>
                            <Text3 color="white" light>{extraInfoSubtitle}</Text3>
                        </>
                    ) : (
                        <>
                            <ContentLoader
                                height={60}
                                backgroundColor="#754596"
                            >
                                <rect color="#46295A" x="10" y="0" rx="4" ry="4" width="300" height="23" />
                                <rect color="#46295A" x="10" y="30" rx="3" ry="3" width="250" height="10" />
                            </ContentLoader>
                        </>
                    )}

                </Stack>
            )}
        </>
)}