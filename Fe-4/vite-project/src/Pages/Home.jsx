import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Maincontext } from '../context/Mainprovider';
import "./Home.scss"
function Home() {
    const { AddBasket, AddWishlist, Isexsisted } = useContext(Maincontext)
    const [Category, setCategory] = useState([])
    useEffect(() => {
        GetProduct()
    }, [])
    async function GetProduct() {
        const res = await fetch('http://localhost:3000/news')
        const data = await res.json()
        setCategory(data)
    }
    return (
        <><Helmet>
            <title>Home</title>
            <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
            <main>
                <section className='Home_hero'>
                    <div className='Home_hero_div'>
                        <h1>Special Dish </h1>
                        <span className='Home_hero_div_span_2'> By Chef Francis Smith</span>
                    </div>
                </section>
                <section className='Home_middle'>
                    <div className='Home_middle_div'>
                        <i class="fa-brands fa-stack-overflow"></i>
                        <div className='Home_middle_div_text' style={{ display: "flex", paddingTop: '60px' }}>
                            <div className='divtext'></div>
                            <div className='Welcome'>Welcome</div>
                            <div className='divtext'></div>
                        </div>
                        <div className='Home_middle_div2'>
                            <div className='Home_middle_div2_box'>
                                <h3 className='Home_middle_div2_h3'>2002</h3>
                                <p className='Home_middle_div_p'>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                            </div>
                            <div className='Home_middle_div2_box'>
                                <h3 className='Home_middle_div2_h3'>2010</h3>
                                <p className='Home_middle_div_p'>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium</p>
                            </div>
                            <div className='Home_middle_div2_box'>
                                <h3 className='Home_middle_div2_h3'>2018</h3>
                                <p className='Home_middle_div_p'>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                            </div>
                        </div>
                    </div>
                    <div className='Home_middle_image'>
                        <img src="https://preview.colorlib.com/theme/pulse/img/sign.png.webp" />
                    </div>
                </section>
                <section className='Home_third'>
                    <div className='Home_third_div'>
                        <i class="fa-solid fa-ice-cream"></i>
                        <div className='Home_third_div_text' style={{ display: "flex", paddingTop: '60px' }}>
                            <div className='divtext'></div>
                            <div className='Welcome'>Testominials</div>
                            <div className='divtext'></div>
                        </div>
                        <div className='Home_third_div2'>
                            <p> "</p>
                            <p>Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. 
                            Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet.
                             Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. </p>
                             <h6>Ted Chapman <span>Client</span></h6>
                        </div>
                    </div>
                </section>
                <section className='Home_fourth'>
                <div className='Home_fourth_div'>
                        <i class="fa-brands fa-stack-overflow"></i>
                        <div className='Home_fourth_div_text' style={{ display: "flex", paddingTop: '60px' }}>
                            <div className='divtext'></div>
                            <div className='Welcome'>Our Services</div>
                            <div className='divtext'></div>
                        </div>
                        <div className='Home_fourth_div2'>
                            <div className='Home_fourth_div2_box'>
                                <h3 className='Home_fourth_div2_h3'>Breakfast</h3>
                                <p className='Home_fourth_div_p'>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum</p>
                            </div>
                            <div className='Home_fourth_div2_box'>
                                <h3 className='Home_fourth_div2_h3'>Brunch</h3>
                                <p className='Home_fourth_div_p'>Scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis.</p>
                            </div>
                            <div className='Home_fourth_div2_box'>
                                <h3 className='Home_fourth_div2_h3'>Lunch</h3>
                                <p className='Home_fourth_div_p'>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum</p>
                            </div>
                            <div className='Home_fourth_div2_box'>
                                <h3 className='Home_fourth_div2_h3'>Dinner</h3>
                                <p className='Home_fourth_div_p'>Aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendreri.</p>
                            </div>
                        </div>
                        </div>
                </section>
            </main>

            <>{Category.map((x) => <>
                <div>
                    <div onClick={() => AddWishlist(x)}>{Isexsisted(x) ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}</div>
                    <div>{x.name}</div>
                    <div><div>{x.des}</div> <div>{x.price}</div>
                        <button onClick={() => AddBasket(x)}>Add Basket</button>
                        <Link to={'/detail/' + x._id}>Go detail</Link>
                    </div>
                </div>
            </>)} </>
        </>
    )
}

export default Home