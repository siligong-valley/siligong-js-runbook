import React, { FC } from "react";
import { styled, gridGutters } from "../theme";
import { IconKeyType, IconSizeType } from "../types";

const SIZE_MAP = {
    [IconSizeType.l]: gridGutters(2),
    [IconSizeType.m]: gridGutters(1.25),
};

interface SvgProps {
    size?: IconSizeType;
    color?: string;
}

// default size values shouldn't have to be set here considering their is a default value set on the React component but TypeScript is still complaining
const Svg = styled.svg<SvgProps>`
    width: ${p => SIZE_MAP[p.size || IconSizeType.m]};
    height: ${p => SIZE_MAP[p.size || IconSizeType.m]};

    fill: ${p => p.color || p.theme.color.icon[1]};
`;

const shapes = {
    [IconKeyType.location]: <path d="M12,11.4a3,3,0,1,1,3-3,3,3,0,0,1-3,3M12,0A8.4,8.4,0,0,0,3.6,8.4C3.6,14.7,12,24,12,24s8.4-9.3,8.4-15.6A8.4,8.4,0,0,0,12,0Z" />,
    [IconKeyType.twitter]: <path d="M24,4.56a9.87,9.87,0,0,1-2.83.77,4.94,4.94,0,0,0,2.17-2.72A10,10,0,0,1,20.21,3.8a4.93,4.93,0,0,0-8.52,3.37,5.12,5.12,0,0,0,.13,1.12A14,14,0,0,1,1.67,3.15,4.92,4.92,0,0,0,3.19,9.72,4.86,4.86,0,0,1,1,9.11v.06a4.94,4.94,0,0,0,4,4.83,5,5,0,0,1-1.29.17,4.73,4.73,0,0,1-.93-.09,4.93,4.93,0,0,0,4.6,3.42,9.9,9.9,0,0,1-6.12,2.11A9.18,9.18,0,0,1,0,19.54a13.92,13.92,0,0,0,7.55,2.21,13.92,13.92,0,0,0,14-14c0-.21,0-.42,0-.63A10.1,10.1,0,0,0,24,4.56Z" />,
    [IconKeyType.keyboard]: <path d="M21.6,3.6H2.4A2.4,2.4,0,0,0,0,6V18a2.41,2.41,0,0,0,2.4,2.4H21.6A2.41,2.41,0,0,0,24,18V6A2.41,2.41,0,0,0,21.6,3.6ZM10.8,7.2h2.4V9.6H10.8Zm0,3.6h2.4v2.4H10.8ZM7.2,7.2H9.6V9.6H7.2Zm0,3.6H9.6v2.4H7.2ZM6,13.2H3.6V10.8H6ZM6,9.6H3.6V7.2H6ZM16.8,18H7.2V15.6h9.6Zm0-4.8H14.4V10.8h2.4Zm0-3.6H14.4V7.2h2.4Zm3.6,3.6H18V10.8h2.4Zm0-3.6H18V7.2h2.4Z" />
};

type ParentProps = SvgProps & {
    iconKey: IconKeyType,
    size?: IconSizeType
};

const Icon: FC<ParentProps> = ({
    iconKey,
    size = IconSizeType.m,
    ...remainingProps
}) => (
        <Svg
            viewBox="0 0 24 24"
            size={size}
            {...remainingProps}>
            <title>
                {iconKey}
            </title>
            {shapes[iconKey]}
        </Svg>
    );

export default Icon;
