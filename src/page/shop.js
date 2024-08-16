import React, { useState } from "react";
import Header from '../comp/hearder/hearder';
import Footer from '../comp/footer/footer';
import SubPagesBanner from '../comp/sub_pages_banner'; 
import { productdata } from '../data/CommonData';
import ProductBox from "../comp/product-box";
import ListGridView from "../comp/ListGridBtn"; 
const Shoplist = () => {
    const [listGrids, setListGrids] = useState(false); 
    const [sortedData ] = useState(productdata);  

    const grifView = () => {
        setListGrids(prevState => !prevState);
    }
     
  

 
     
 

    return (
        <>
            <Header></Header>
            <SubPagesBanner pageTitle='Shop'></SubPagesBanner>
            <section className="space-top space-extra-bottom">
                <div className="container">
                    <div className="th-sort-bar">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md">
                                <p className="woocommerce-result-count">Showing {sortedData.length}results</p>
                            </div>

                            <div className="col-md-auto">
                                <form className="woocommerce-ordering" method="get">
                                     
                                    <select name="orderby" className="orderby" aria-label="Shop order"  >
                                        <option value="menu_order">Default Sorting</option>
                                        <option value="low">Sort by price: low to high</option>
                                        <option value="high">Sort by price: high to low</option>
                                    </select>
                                </form>
                            </div>
                            <div className="col-md-auto">
                                <ListGridView grifView={grifView}></ListGridView>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-40">
                        <div className="col-xl-3 col-lg-4">
                            <aside className="sidebar-area sidebar-shop">
                                <div className="widget widget_search">
                                    <form className="search-form"><input type="text" placeholder="Enter Keyword" /> <button type="submit"><i className="far fa-search"></i></button> </form>
                                </div>
                                <div className="widget widget_categories">
                                    <h3 className="widget_title">Categories</h3>
                                    <ul>
                                        <li><a href="">IT Solution</a></li>
                                        <li><a href=" ">SEO Marketing</a></li>
                                        <li><a href="  ">Web Development</a></li>
                                        <li><a href=" ">Cloud Solution</a></li>
                                        <li><a href=" ">Network Marketing</a></li>
                                        <li><a href=" ">UI/UX Design</a></li>
                                    </ul>
                                </div>
                                <div className="widget widget_price_filter">
                                    <h4 className="widget_title">Filter By Price</h4>
                                    <div className="price_slider_wrapper">
                                        <div className="price_label">Price: <span className="from">$10</span>  - <span className="to">$75</span></div>
                                        <div className="price_slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                            <div className="ui-slider-range ui-corner-all ui-widget-header" style={{ left: '0 %', width: '72.2222 %' }}></div>
                                            <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: '0%' }} ></span><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: '72.2222%' }} ></span>
                                        </div>
                                        <button type="submit" className="button">Filter</button>
                                    </div>
                                </div>
                                <div className="widget widget_tag_cloud">
                                    <h3 className="widget_title">Tags</h3>
                                    <div className="tagcloud">
                                        <a href=" ">Bride</a>
                                        <a href=" ">Celebration</a>
                                        <a href=" ">Groom</a>
                                        <a href=" ">Wedding</a>
                                        <a href=" ">Photo</a>
                                        <a href=" ">Dress</a>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <div className="row gy-40">
                                {
                                    sortedData.map((productDatas, index) => (
                                        <div className={`col-xl-${listGrids ? '4' : '6'}  col-sm-6`} key={index}>
                                            <ProductBox viewType={listGrids ? 'grid' : 'list' } productDatas={productDatas}></ProductBox>
                                        </div>
                                    )) 
                                } 
                            </div> 
                        </div>


                    </div>
                    <div className="th-pagination text-center pt-50">
                        <ul>
                            <li><a href="blog.html">1</a></li>
                            <li><a href="blog.html">2</a></li>
                            <li><a href="blog.html">3</a></li>
                            <li><a href="blog.html"><i className="fa-solid fa-angles-right"></i></a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
}
export default Shoplist;