import React from 'react';
interface Props {
    style: string;
    children: any
}

const Button = ({ style, children }: Props) => {
    return <button className={style}>{children}</button>

}

export default Button;
