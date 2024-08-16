import React from "react";
import Header from '../comp/hearder/hearder';
import Footer from '../comp/footer/footer';
import SubPagesBanner from '../comp/sub_pages_banner'; 
import { ProjectData } from '../data/CommonData'; 
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <>
            <Header></Header>
            <SubPagesBanner pageTitle='Our Project'></SubPagesBanner>
            <section className="space">
                <div className="container">
                    <div className="row gy-30" >
                        {
                            ProjectData.map((projectlist, index) => (
                                <div className="col-md-6" key={index }>
                                    <div className="course-card">
                                        <div className="course-card_img">
                                            <img src={projectlist.img} alt="Imaged" />
                                        </div>
                                        <div className="course-card_content">
                                            <h3 className="box-title">
                                                <Link to={'/projectdetels'}>{projectlist.title}</Link>
                                            </h3>
                                            <Link to={'/projectdetels'}  className="line-btn"> {projectlist.btn} <i class="fas fa-arrow-right ms-2"></i> </Link> 
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                         

                    </div>
                    <div class="th-pagination text-center mt-80 mb-0">
                        <ul>
                            <li><a href="blog.html">1</a></li>
                            <li><a href="blog.html">2</a></li>
                            <li><a href="blog.html">3</a></li>
                            <li><a href="blog.html"><i class="fa-solid fa-angles-right"></i></a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
}
export default Projects;