import React, { SVGProps } from 'react';

type SpriteIconProps = {
    name: string; // можно заменить на union, если есть список иконок
} & SVGProps<SVGSVGElement>;

export const SpriteIcon: React.FC<SpriteIconProps> = ({ name, ...props }) => {
    return (
        <svg {...props}>
            {typeof name === "string" ? (
                <use href={`/img/sprite.svg#icon-${name}`} />
            ) : (
                name
            )}

        </svg>
    );
};
