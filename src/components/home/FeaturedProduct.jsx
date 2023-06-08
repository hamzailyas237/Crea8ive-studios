

import React, { useState } from 'react'
import featuredProductOne from '../../images/featuredProductOne.webp'
import featuredProductTwo from '../../images/featuredProductTwo.webp'
import featuredProductThree from '../../images/featuredProductThree.webp'
import featuredProductFour from '../../images/featuredProductFour.webp'
import featuredProductFive from '../../images/featuredProductFive.webp'
import featuredProductSix from '../../images/featuredProductSix.webp'
import featuredProductSeven from '../../images/featuredProductSeven.webp'
import featuredProductEight from '../../images/featuredProductEight.webp'
import PrismaZoom from 'react-prismazoom'

const FeaturedProduct = () => {
    let data = [
        { imgSrc: featuredProductOne },
        { imgSrc: featuredProductTwo },
        { imgSrc: featuredProductThree },
        { imgSrc: featuredProductFour },
        { imgSrc: featuredProductFive },
        { imgSrc: featuredProductSix },
        { imgSrc: featuredProductSeven },
        { imgSrc: featuredProductEight },
    ]

    const [model, setModel] = useState(false)
    const [tempImg, setTempImg] = useState('')
    const getImg = (src) => {
        setTempImg(src)
        setModel(true)
    }

    return (
        <div className="featured-product-container">
            <h1>Featured Products</h1>
            
            <div className={model ? 'model open' : 'model'}>
                <PrismaZoom>
                    <img src={tempImg} /> {/* A text that can be zoomed and dragged */}
                </PrismaZoom>
                <i onClick={() => setModel(false)} className="fa-solid fa-xmark fa-lg"></i>
            </div>

            <div className='gallery'>
                {
                    data.map((item, i) => {
                        return <img className='image' key={i} src={item.imgSrc}
                            onClick={() => getImg(item.imgSrc)}
                        />
                    })
                }
            </div>
        </div>

    )
}

export default FeaturedProduct




