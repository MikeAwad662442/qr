import React, { ChangeEvent, FC, useRef } from 'react'
//

const InputFiled: FC = () => {
    return (
        <></>
    )
}

const UploadFiled: FC = () => {
    // // === to get Filses Info === //
    // let imageSrc: any; // './assets/icon/favicon.png';
    // let fileType!: string;
    // let file!: File;
    // // === to get Filses Info === //
    // const fileInputRef = useRef<HTMLInputElement | null>(null);
    // // === Get / Images || Videos / From UpLodFile === //
    // const onFileChange = async (event: ChangeEvent<HTMLInputElement | any>) => {

    //     file = event.target.files[0]; // === to get File info in Angular
    //     const reader = new FileReader();
    //     // === it must to be IMAGE === //
    //     if (file) {
    //         reader.readAsDataURL(file);
    //         if (file.type.indexOf('image') > -1) {
    //             fileType = 'image';
    //             reader.onload = (e) => (imageSrc = reader.result);
    //         } else {

    //         }
    //     }
    // }
    // // === Get / Images || Videos / From UpLodFile === //
    // const handleButtonClick = () => {
    //     if (fileInputRef.current) {
    //         fileInputRef.current.click(); // Trigger the file input dialog
    //     }
    // };
    return (
        <div>
            <p>Hi Mike</p>
            {/* <input
                name="image"
                type="file"
                onChange={onFileChange}
                required
                ref={fileInputRef}
                className='hidden'
            />
            <button onClick={handleButtonClick}>Upload Image</button> */}
        </div>
    )
}

export { UploadFiled, InputFiled }


/**********************
 * === Notes ===
 * input Filed
 * Upload Filed
 * 
 * 
 * 
 * 
 **********************/