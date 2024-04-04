// Generate QR for url
"use client";
import { CanvasUrl } from '@/components';
import * as Yup from 'yup';
import { MdFileUpload } from "react-icons/md";
import { useRef } from 'react';
const UrlPage = () => {
    const url = "https://www.google.com";
    const image: any = '/assets/logo-80x80.png';
    const fileRef = useRef<HTMLInputElement | null>(null)
    return (
        <section className='flex justify-center gap-x-8 mt-6'>

        </section>
    );
}

export default UrlPage

