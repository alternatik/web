import React from 'react';

const BrandList = [
    {
        image: './images/iscozumleri/google.png'
    },
    {
        image: './images/iscozumleri/litespeed.png'
    },
    {
        image: './images/iscozumleri/atlassian.png'
    },
    {
        image: './images/iscozumleri/woocommerce.png'
    },
    {
        image: './images/iscozumleri/tawkto.png'
    },
    {
        image: './images/iscozumleri/mattermost.png'
    },
    {
        image: './images/iscozumleri/react.png'
    },
    {
        image: './images/iscozumleri/bizimhesap.png'
    },
]

const BrandTwo = ({brandStyle}) => {
    return (
        <ul className={`brand-list ${brandStyle}`}>
            {BrandList.map((data, index) => (
                <li key={index}>
                    <a href="#"><img src={`${data.image}`} alt="Brand Image" /></a>
                </li>
            ))}
        </ul>
    )
}

export default BrandTwo;
