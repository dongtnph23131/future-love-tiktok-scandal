import React, { useState } from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import Cart from '../components/Cart'
import Modal from '../components/Modal'
const HomePgae = () => {
    const [isShow, setIsShow] = useState(false)
    const showModal = () => {
        setIsShow(true)
    }
    const hiddenModal = () => {
        setIsShow(false)
    }
    return (
        <div style={{ backgroundColor: '#F0F2F5' }} className='w-full'>
            <Header />
            <Post showModal={showModal} />
            <Cart />
            {isShow && <Modal hiddenModal={hiddenModal} />}
        </div>
    )
}

export default HomePgae