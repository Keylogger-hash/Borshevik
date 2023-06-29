import React from 'react';
import { useState } from 'react';
import './Modal.css';   
import close from './close.svg';
export  interface ModalProps{
    isShow:boolean;
    setIsShow: ()=>void;
}
export default function Modal({isShow,setIsShow}:ModalProps){
    function closeModal(){
        setIsShow()
        // setIsShow(false)
    }
    return(
        <div className={isShow?'is_active':'is_not_active'}>
            <div className='modal' >
                <div className='modal_container' >
                    <div className='close_button'> 
                        <button onClick={closeModal}>
                            <img src={close} width="40px" height="40px"></img>
                        </button>
                    </div>
                    <div className='modal_content'>
                        <h4>Ваш заказ принят</h4>
                    </div>
                </div>
            </div>
        </div>

    ) 
}