"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Modal = () => {
    const [modalVisible, setModalVisible] = useState(true);
    function closeModal() {
        setModalVisible(false);
    }
    return (
        <div className={`modal ${modalVisible ? 'visible' : 'hidden'}`}>
            <ul>
                <li>Clayton</li>
                <Icons icon={<BsFillBellFill color='#D3D3D3' size="18px" />} />                           
                <Icons icon={<MdCancel color='#D3D3D3' size="18px" />} />
            </ul>
        </div>

    )
}

export default Modal