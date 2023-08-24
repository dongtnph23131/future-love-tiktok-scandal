import React from 'react'
import Header from '../components/Header'
import UserOnline from '../components/UserOnline'
import PostHome from '../components/HomePost'
import HomeCart from '../components/HomeCart'

const Profile = () => {
    return (
        <div style={{ backgroundColor: '#F0F2F5' }} className='w-full'>
            <Header />
            <div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 mx-5 my-5'>
                <UserOnline />
                <PostHome />
                <HomeCart />
            </div>
        </div>
    )
}

export default Profile