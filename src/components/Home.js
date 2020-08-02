import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className='home'>
            <img
                className='home__image'
                src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/NGM5MWNlNTgt/NGM5MWNlNTgt-ZTVkNjA2ZDct-w1500._CB409489946_.jpg"
                alt="amazon cover photo"
            />
            {/* product: props: id, title, rating, price, image */}
            <div className="home__row">
                <Product
                    id='7398127398'
                    title='Test Title'
                    price={11.96}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Consumer_Electronics/XCM_CUTTLE_1229668_1209423_CA_3144566_379x304_1X_en_CA._SY304_CB427943803_.jpg'
                />
                <Product
                    id='7398127398'
                    title='Test Title'
                    price={11.96}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Consumer_Electronics/XCM_CUTTLE_1229668_1209423_CA_3144566_379x304_1X_en_CA._SY304_CB427943803_.jpg'
                />
            </div>
            <div className="home__row">
                <Product
                    id='7398127398'
                    title='Test Title'
                    price={11.96}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Consumer_Electronics/XCM_CUTTLE_1229668_1209423_CA_3144566_379x304_1X_en_CA._SY304_CB427943803_.jpg'
                />
                <Product
                    id='7398127398'
                    title='Test Title'
                    price={11.96}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Consumer_Electronics/XCM_CUTTLE_1229668_1209423_CA_3144566_379x304_1X_en_CA._SY304_CB427943803_.jpg'
                />
                <Product
                    id='7398127398'
                    title='Test Title'
                    price={11.96}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Consumer_Electronics/XCM_CUTTLE_1229668_1209423_CA_3144566_379x304_1X_en_CA._SY304_CB427943803_.jpg'
                />

            </div>
        </div>
    )
}

export default Home
