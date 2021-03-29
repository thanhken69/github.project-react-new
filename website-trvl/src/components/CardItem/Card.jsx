import React from 'react'
import CardItem from './CardItem'
import './Card.css'

function Card() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='images/img-9.jpg'
                            text='Khám phá thác nước ẩn sâu bên trong Rừng rậm Amazon'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Du ngoạn qua Quần đảo Bali bằng Du thuyền riêng'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-3.jpg'
                            text='Đi thuyền trên Đại Tây Dương thăm Vùng biển chưa được khám phá'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Trải nghiệm Bóng đá trên đỉnh Dãy núi Himalaya'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Đi qua Sa mạc Sahara trong chuyến tham quan bằng lạc đà cùng hướng dẫn viên'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
