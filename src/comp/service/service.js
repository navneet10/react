import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Servicees from './service-details';
import { fetchData } from '../../utils/api';

const Service = () => {
    const [serDetails, setServiceDetails] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);  

    useEffect(() => {
        const fetchServiceDetails = async () => {
            setLoading(true); // Start loading
            try {
                const data = await fetchData('ServiceDetails');  
                console.log('Fetched data:', data);  
                setServiceDetails(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false); // End loading
            }
        };

        fetchServiceDetails();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Loading indicator
    }

    if (error) {
        return <div>Error loading {error.message}</div>;
    }

    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 10,
        autoplay: true,
        dots: false,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    };

    return (
        <section className="overflow-hidden space">
            <div className="container">
                <div className="title-area text-center">
                    <span className="sub-title">Our Best Services</span>
                    <h2 className="sec-title">We solve digital challenges</h2>
                </div>
                <div className="slider-area">
                    <OwlCarousel className="owl-carousel owl-theme" {...options}>
                        {serDetails.length > 0 ? (
                            serDetails.map(service => (
                                <Servicees service={service} key={service.id} />
                            ))
                        ) : (
                            <div>No services available.</div>
                        )}
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
};

export default Service;
