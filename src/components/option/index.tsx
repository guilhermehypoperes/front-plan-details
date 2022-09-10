import React from "react";
import { Inline, IconAppsFilled, Text2, createUseStyles, Divider, Box, ButtonLink, Text1, Image } from "@telefonica/mistica";
import ContentLoader from "react-content-loader";
import { appDescriptionProps } from "../../pages";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

interface OptionProps {
    title: string,
    description: string,
    showApps?: boolean,
    apps?: Array<appDescriptionProps>
}

const useStyles = createUseStyles(() => ({
    box: {
        alignItems: "right",
        transition: "0.2s"
    },
    inline: {
        marginBottom: 10,
        width: 320
    },
    apps: {
        marginTop: 16
    }
}))

export default function Option({title, description, showApps, apps} : OptionProps) {

    const [showAdditionalInfo, setShowAdditionalInfo] = React.useState(false);
    const [appsLoaded, setAppsLoaded] = React.useState(true);

    const classes = useStyles();

    return (
        <Box
            className={classes.box}
        >
            <div
                onClick={() => setShowAdditionalInfo(!showAdditionalInfo)}
            >
                <Inline
                    space={16}
                >
                    <IconAppsFilled color="#666666"/>
                    <Inline
                        space={"between"}
                        className={classes.inline}
                        alignItems="flex-start"
                    >
                        <Box
                            width={200}
                        >
                            <Text2 regular>{title}</Text2>
                        </Box>
                        <ButtonLink onPress={() => setShowAdditionalInfo(!showAdditionalInfo)}>{
                            showAdditionalInfo ? (
                                <IoIosArrowUp color="#666666"/>
                            ) : (
                                <IoIosArrowDown color="#666666"/>
                            )
                        }</ButtonLink>
                    </Inline>
                </Inline>
                {apps ? (
                    <>
                        {showAdditionalInfo ? (
                            <>
                                <Text1
                                    regular
                                    wordBreak
                                    color="#666666"
                                >
                                    {description}
                                </Text1>
                                {showApps && apps && (
                                    <>
                                        {!appsLoaded ? (
                                            <ContentLoader
                                                height={50}
                                            >
                                                <rect x="5" y="5" rx="5" ry="5" width="35" height="35" />
                                                <rect x="45" y="5" rx="5" ry="5" width="35" height="35" />
                                                <rect x="85" y="5" rx="5" ry="5" width="35" height="35" />
                                                <rect x="125" y="5" rx="5" ry="5" width="35" height="35" />
                                                <rect x="165" y="5" rx="5" ry="5" width="35" height="35" />
                                            </ContentLoader>
                                        ) : (
                                            <>
                                                <br/>
                                                <Inline
                                                    className={classes.apps}
                                                    space={16}
                                                >
                                                    {apps.map(item => (
                                                        <>
                                                            {console.log(item.url)}
                                                            <Image width={40} height={40} key={item.url} src={item.url} alt={item.description}/>
                                                        </>
                                                    ))}
                                                </Inline>
                                            </>
                                        )}
                                    </>
                                )}
                            </>
                        ) : (
                            <Divider />
                        )}
                    </>
                ) : (
                    <>
                        {showAdditionalInfo && (
                            <ContentLoader
                                height={70}
                            >
                                <rect x="5" y="5" rx="5" ry="5" width="280" height="15" />
                                <rect x="5" y="25" rx="5" ry="5" width="280" height="15" />
                                <rect x="5" y="45" rx="5" ry="5" width="280" height="15" />
                            </ContentLoader>
                        )}
                    </>
                )}
            </div>
        </Box>
    )
}