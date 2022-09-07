import React from "react";
import { Inline, Text2, createUseStyles, Divider, Box, ButtonLink } from "@telefonica/mistica";
import { IoIosArrowForward } from "react-icons/io"

interface OptionWithoutIconProps {
    title: string,
}

const useStyles = createUseStyles(() => ({
    box: {
        alignItems: "right",
        transition: "0.2s"
    },
    inline: {
        marginBottom: 10
    }
}))

export default function OptionWithoutIcon({title} : OptionWithoutIconProps) {

    const [showAdditionalInfo, setShowAdditionalInfo] = React.useState(false)

    const classes = useStyles();

    return (
        <Box
            className={classes.box}
        >
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
                <ButtonLink onPress={() => setShowAdditionalInfo(!showAdditionalInfo)}>
                    <IoIosArrowForward color="#666666"/>
                </ButtonLink>
            </Inline>
            <Divider />
        </Box>
    )
}