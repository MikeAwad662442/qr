"use client";
import { QRcodeType } from '@/types';
import { useQRCode } from 'next-qrcode';
import { useState } from 'react';
const CanvasUrl = (props: QRcodeType) => {
    // 
    // const [data, setData] = useState("https://www.google.com");
    let NewText = (!props.setData ? props.data : props.setData)

    console.log('the Url :', NewText)
    // 
    const { Canvas } = useQRCode();
    return (
        <>
            <p>{NewText}</p>
            <Canvas
                text={NewText}
                options={{
                    errorCorrectionLevel: 'M',
                    margin: 3,
                    scale: 4,
                    width: 200,
                    color: {
                        dark: 'red',
                        light: '#fff',
                    },
                }}
            />

        </>


    )
}

export default CanvasUrl
