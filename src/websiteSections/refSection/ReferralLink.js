import React from 'react';

export const ReferralLink = (props) => {
    const refUrl = props.refUrl;
    const alt = props.alt;
    const descr = props.descr;
    const imgUrl = props.imgUrl;

    return (
        <div>
            <a href={refUrl}>
                <img border="0" alt={alt} src={imgUrl} height="140" />
            </a>
            <h5>{descr}</h5>
        </div>
    );
};
