// import React from 'react'; 

// Header Nav Menu

import Service1 from '../assets/img/service/service_card_1.svg';
import Service2 from '../assets/img/service/service_card_2.svg';
import Service3 from '../assets/img/service/service_card_3.svg';
import Service4 from '../assets/img/service/service_card_4.svg';
import Service5 from '../assets/img/service/service_card_5.svg';
import Service6 from '../assets/img/service/service_card_6.svg';
import Service7 from '../assets/img/service/service_card_7.svg';
import Service8 from '../assets/img/service/service_card_8.svg';
import Service9 from '../assets/img/service/service_card_9.svg';
import chooseic1 from '../assets/img/icon/choose_1_1.svg';
import chooseic2 from '../assets/img/icon/choose_1_2.svg';
import chooseic3 from '../assets/img/icon/choose_1_3.svg'; 
import feature1 from '../assets/img/icon/feature_1_1.svg'; 
import feature2 from '../assets/img/icon/feature_1_2.svg'; 
import feature3 from '../assets/img/icon/feature_1_3.svg'; 
import feature4 from '../assets/img/icon/feature_1_4.svg'; 
import process1 from '../assets/img/icon/process_box_1.png'; 
import process2 from '../assets/img/icon/process_box_2.png'; 
import process3 from '../assets/img/icon/process_box_3.png'; 
import process4 from '../assets/img/icon/process_box_4.png'; 
import blogth1 from '../assets/img/blog/blog_1_1.jpg'; 
import blogth2 from '../assets/img/blog/blog_1_2.jpg'; 
import blogth3 from '../assets/img/blog/blog_1_3.jpg'; 
import blogth4 from '../assets/img/blog/blog_1_4.jpg'; 
import blogth5 from '../assets/img/blog/blog_1_5.jpg'; 
import blogth6 from '../assets/img/blog/blog_1_6.jpg'; 
import barnd1 from '../assets/img/brand/brand_1_1.png'; 
import barnd2 from '../assets/img/brand/brand_1_2.png'; 
import barnd3 from '../assets/img/brand/brand_1_3.png'; 
import barnd4 from '../assets/img/brand/brand_1_4.png'; 
import barnd5 from '../assets/img/brand/brand_1_5.png'; 
import barnd6 from '../assets/img/brand/brand_1_6.png'; 
import team1 from '../assets/img/team/team_1_1.jpg'; 
import team2 from '../assets/img/team/team_1_2.jpg'; 
import team3 from '../assets/img/team/team_1_3.jpg'; 
import team4 from '../assets/img/team/team_1_4.jpg'; 
import team5 from '../assets/img/team/team_1_5.jpg'; 
import team6 from '../assets/img/team/team_1_6.jpg'; 
import team7 from '../assets/img/team/team_1_7.jpg'; 
import team8 from '../assets/img/team/team_1_8.jpg'; 
import testimonial1 from '../assets/img/testimonial/testi_3_1.jpg'; 
import testimonial2 from '../assets/img/testimonial/testi_3_2.jpg'; 
import testimonial3 from '../assets/img/testimonial/testi_3_3.jpg'; 
import testimonial4 from '../assets/img/testimonial/testi_3_4.jpg'; 
import project1 from '../assets/img/course/course_1_1.jpg'; 
import project2 from '../assets/img/course/course_1_2.jpg'; 
import project3 from '../assets/img/course/course_1_3.jpg'; 
import project4 from '../assets/img/course/course_1_4.jpg'; 
import project5 from '../assets/img/course/course_1_5.jpg'; 
import project6 from '../assets/img/course/course_1_6.jpg'; 
import project7 from '../assets/img/course/project_1_7.jpg'; 
import project8 from '../assets/img/course/project_1_8.jpg'; 
import project9 from '../assets/img/course/project_1_9.jpg'; 
import product1 from '../assets/img/project/product_1_1.jpg'; 
import product2 from '../assets/img/project/product_1_2.jpg'; 
import product3 from '../assets/img/project/product_1_3.jpg'; 
import product4 from '../assets/img/project/product_1_4.jpg'; 
import product5 from '../assets/img/project/product_1_5.jpg'; 
import product6 from '../assets/img/project/product_1_6.jpg'; 
import product7 from '../assets/img/project/product_1_7.jpg'; 
import product8 from '../assets/img/project/product_1_8.jpg'; 
import product9 from '../assets/img/project/product_1_9.jpg'; 



export const navMenu = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Pages",
      path: "/",
      submenus: [
        {
            text: "Shop",
            path: "/shop",
			submenus: [
				{
					text: "Shop Details",
					path: "/shop-details",
				},
				{
					text: "Cart Page",
					path: "/cart-page",
				},
				{
					text: "Checkout",
					path: "/checkout",
				},
				{
					text: "Wishlist",
					path: "/wishlist",
				} 
			],
        },
		{
            text: "Career",
            path: "/",
			submenus: [
				{
					text: "Career",
					path: "/career",
				},
				{
					text: "Career Details",
					path: "/career-details",
				}
			],
        },
        {
            text: "About Us",
            path: "/about-us",
        },
        {
            text: "Appointment",
            path: "/appointment",
        },
        {
            text: "Team",
            path: "/team",
        },
		{
            text: "Project",
            path: "/project",
        }, 
		{
            text: "Faq",
            path: "/faq",
        },         
      ],
    },
    {
      text: "Service",
      path: "/",
	  submenus:[
		{
			text: "Service",
			path: "/service",
		},
		{
			text: "Service Details",
			path: "/service-details",
		}
	  ]
    },
    {
      text: "Blog",
      path: "/",
	  submenus:[
		{
			text: "Blog Grid",
			path: "/blog-grid",
		},
		{
			text: "Blog Lists",
			path: "/blog-lists",
		},
		{
			text: "Blog Details",
			path: "/blog-details",
		}
	  ]
    },
    {
      text: "Contact",
      path: "/contact",
    },
]
 
export const contactNumber = {
    text: '+258 623 2325',
} 

export const homeSlider =
{
    title: 'Simplify with',
    subtitle: "Webteck's SaaS Solutions",
    text: 'Take charge of your business continuity with innovative IT solutions',
    btnlinks: 'View Services',
    btnlinkspath: '/services',
    btnlinkc: 'Make a Reservation',
    btnlinkcpath: '/contact',
}

export const ServiceDetails = [ 
    {
        img: Service1,
        title: 'Web Development',
        text: 'Open the banner maker, template and start customizing.',
        path: '/blog',
        btn: 'Read Details'
    }, 
    {
        img: Service2,
        title: 'UI/UX Design',
        text: 'Open the banner maker, template and start customizing.',
        path: '/blog',
        btn: 'Read Details'
    },
    {
        img: Service3,
        title: 'Digital Marketing',
        text: 'Open the banner maker, template and start customizing.',
        path: '/blog',
        btn: 'Read Details'
    },
    {
        img: Service4,
        title: 'Business Analysis',
        text: 'Open the banner maker, template and start customizing.',
        path: '/blog',
        btn: 'Read Details'
    },
    {
        img: Service5,
        title: 'Software Services',
        text: 'Open the banner maker, template and start customizing.',
        path: '/blog',
        btn: 'Read Details'
    },
    {
        img: Service6,
        title: 'Machine Learning',
        text: 'Open the banner maker, template and start customizing.',
        path: '/blog',
        btn: 'Read Details'
    },
    {
        img: Service7,
        title: 'IT Management',
        text: 'Open the banner maker, template and start customizing.',
        path: '/blog',
        btn: 'Read Details'
    },
    {
        img: Service8,
        title: 'Cloud Computing',
        text: 'Open the banner maker, template and start customizing.',
        path: '/blog',
        btn: 'Read Details'
    },
    {
        img: Service9,
        title: 'Backup & Recovery',
        text: 'Open the banner maker, template and start customizing.',
        path: '/blog',
        btn: 'Read Details'
    },
]

export const whyChoose = [
    {
        img: chooseic1,
        title:'Efficiency & Management',
        text: `Efficiency and management are key aspects of any successful organization, whether it's a business.`
    },
    {
        img: chooseic2,
        title: 'Effective Team Work',
        text: `Effective teamwork requires clear communication, mutual trust, and a shared commitment to common goals`
    },
    {
        img: chooseic3,
        title: 'Amazing Growth Flow',
        text: `An amazing growth flow involves a dynamic combination of strategic innovation and adaptable leadership`
    },
]

export const Feature = [
    {
        img: feature1,
        title: 'Cost-effectiveness',
        text: `Cost-effectiveness is achieved through strategic planning`
    },
    {
        img: feature2,
        title: 'Innovative Technology',
        text: `Innovative technology drives progress by seamlessly`
    },
    {
        img: feature3,
        title: 'Industry Expertise',
        text: `Industry expertise is the cornerstone of informed decision-making`
    },
    {
        img: feature4,
        title: 'Scalability',
        text: `Scalability empowers businesses to grow seamlessly, adapting`
    },
]

export const aboutHome =   {
    title: `A preferred Web development company of world's pioneering brands.`,
    subtitle:'About Us',
    text: `Their team's technical expertise is truly outstanding.They took the time to thoroughly understand our goals and requirements and then designed and implemented solutions that not only addressed our immediate challenges but also positioned us for future growth`,
    btn: '/about-us',
    listing: [
        {
            text:`Turn your data into insights that drive business growth.`
        },
        {
            text: `Identify trends and patterns in your data.`
        }
    ]
}

export const processList = [
    {
        img: process1,
        title: 'Project Planning',
        count:'01',
        text: `Internal or 'organic' sources without turnkey growth strategies. Seamlessly promote client-centered`
    },
    {
        img: process2,
        title: 'Request A Meeting',
        count: '02',
        text: `Vulnerable for web iterate process before meta services impact with olisticly enable geting.`
    },
    {
        img: process3,
        title: 'Start Planning',
        count: '03',
        text: `Of setting for web iterate process before meta services impact with olisticly enable power.`
    },
    {
        img: process4,
        title: 'Request A Meeting',
        count: '04',
        text: `Getting on for web iterate process before meta services impact with olisticly enable silent.`
    },
]

export const bloglistData = [
    {
        img: blogth1,
        date: '25 Feb , 2024',
        other: 'By Webtek',
        title: 'Developers within IT teams are responsible for creating and deploying software',
        btn:'/blog'
    },
    {
        img: blogth2,
        date: '25 Feb , 2024',
        other: 'By Webtek',
        title: 'Implementing Strategic IT Solutions for the Seamless Integration enhanced Security',
        btn: '/blog'
    },
    {
        img: blogth3,
        date: '25 Feb , 2024',
        other: 'By Webtek',
        title: 'Developers within IT teams are responsible for creating and deploying software',
        btn: '/blog'
    },
    {
        img: blogth4,
        date: '25 Feb , 2024',
        other: 'By Webtek',
        title: 'Embracing Next-Generation IT Solutions to Propel Businesses into a New Era of Efficiency.',
        btn: '/blog'
    },
    {
        img: blogth5,
        date: '25 Feb , 2024',
        other: 'By Webtek',
        title: 'Implementing Strategic IT Solutions for the Seamless Integration enhanced Security',
        btn: '/blog'
    },
    {
        img: blogth6,
        date: '25 Feb , 2024',
        other: 'By Webtek',
        title: 'Developers within IT teams are responsible for creating and deploying software',
        btn: '/blog'
    }

]

export const brankLogos = [
    {img: barnd1},
    {img: barnd2},
    {img: barnd3},
    {img: barnd4},
    {img: barnd5},
    {img: barnd6},
]

export const footerConted = {
    text: `Their team's technical expertise is truly outstanding. They took the time to thoroughly understand our goals and requirements and then designed and implemented solutions that not only addressed our immediate challenges but also positioned us for future growth.`,
    link: [
        {text: 'Home', links:'/'},
        { text: 'Pages', links:'/'},
        { text: 'Services', links:'/services'},
        { text: 'blog', links:'/blog'},
        { text: 'contact', links:'/contact'},
    ],
    social: [
        { link: 'https://www.facebook.com/', icon: 'fab fa-facebook-f' },
        { link: 'https://www.twitter.com/', icon: 'fab fa-twitter' },
        { link: 'https://www.linkedin.com', icon: 'fab fa-linkedin-in' },
        { link: 'https://www.whatsapp.com/', icon: 'fab fa-whatsapp' },
    ],
    continfo: [
        { icon: 'fa-solid fa-location-dot',title:'Address', text:'12 Division Park, SKY  12546. Berlin '},
        { icon: 'fa-solid fa-envelope', title: 'Email', email: [{ text: 'help@webteck-mail.com' }, { text:'24/7@webteck-online.com'}]},
        { icon: 'fa-solid fa-phone', title: 'Call', cont: [{ text: '+215 2536 32156' }, { text:'+452 3694 21587'}]},
    ]
}

export const teamData = [
    { img: team1, name: 'Rayan Athels', dg: 'Founder & CEO', social: [{ icon: 'fab fa-facebook-f', link: 'https://facebook.com/' }, { icon: 'fab fa-twitter', link: 'https://twitter.com/' }, { icon: 'fab fa-instagram', link: 'https://instagram.com/' }, { icon: 'fab fa-linkedin-in', link: 'https://linkedin.com/' }] },
    { img: team2, name: 'Alex Furnandes', dg: 'Project Manager', social: [{ icon: 'fab fa-facebook-f', link: 'https://facebook.com/' }, { icon: 'fab fa-twitter', link: 'https://twitter.com/' }, { icon: 'fab fa-instagram', link: 'https://instagram.com/' }, { icon: 'fab fa-linkedin-in', link: 'https://linkedin.com/' }] },
    { img: team3, name: 'Mary Crispy', dg: 'Cheif Expert', social: [{ icon: 'fab fa-facebook-f', link: 'https://facebook.com/' }, { icon: 'fab fa-twitter', link: 'https://twitter.com/' }, { icon: 'fab fa-instagram', link: 'https://instagram.com/' }, { icon: 'fab fa-linkedin-in', link: 'https://linkedin.com/' }] },
    { img: team4, name: 'Cheif Expert', dg: 'Project Manager', social: [{ icon: 'fab fa-facebook-f', link: 'https://facebook.com/' }, { icon: 'fab fa-twitter', link: 'https://twitter.com/' }, { icon: 'fab fa-instagram', link: 'https://instagram.com/' }, { icon: 'fab fa-linkedin-in', link: 'https://linkedin.com/' }] },
    { img: team5, name: 'Sanjida Carlose', dg: 'IT Consultant', social: [{ icon: 'fab fa-facebook-f', link: 'https://facebook.com/' }, { icon: 'fab fa-twitter', link: 'https://twitter.com/' }, { icon: 'fab fa-instagram', link: 'https://instagram.com/' }, { icon: 'fab fa-linkedin-in', link: 'https://linkedin.com/' }] },
    { img: team6, name: 'Marian Widjya', dg: 'Head Manager', social: [{ icon: 'fab fa-facebook-f', link: 'https://facebook.com/' }, { icon: 'fab fa-twitter', link: 'https://twitter.com/' }, { icon: 'fab fa-instagram', link: 'https://instagram.com/' }, { icon: 'fab fa-linkedin-in', link: 'https://linkedin.com/' }] },
    { img: team7, name: 'Peter Parker', dg: 'Web Developer', social: [{ icon: 'fab fa-facebook-f', link: 'https://facebook.com/' }, { icon: 'fab fa-twitter', link: 'https://twitter.com/' }, { icon: 'fab fa-instagram', link: 'https://instagram.com/' }, { icon: 'fab fa-linkedin-in', link: 'https://linkedin.com/' }] },
    { img: team8, name: 'Grayson Gabriel', dg: 'UI/UX Designer', social: [{ icon: 'fab fa-facebook-f', link: 'https://facebook.com/' }, { icon: 'fab fa-twitter', link: 'https://twitter.com/' }, { icon: 'fab fa-instagram', link: 'https://instagram.com/' }, { icon: 'fab fa-linkedin-in', link: 'https://linkedin.com/' }] },
]

export const TestimonialData = [
    { img: testimonial1, text: '“Lectus volpat faucibus placerat eget nulla sodales aliquam molestie ante, himenaeos fames suscipit arcu cras cenas penatibus vivamus, aenean primis enim”', title: 'Andrew D. Smith', desig:'Manager'},
    { img: testimonial2, text: '“Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration in the success.”', title: 'Brooklyn Simmons', desig:'CTO of Portfolio'},
    { img: testimonial3, text: '“Completely drive innovative value whereas out-of-the-box paradigms. Interactively pursue stand-alone markets after global say that they results..”', title: 'Savannah Nguyen', desig:'CEO at Rimasu'},
    { img: testimonial4, text: '“The best service reinvent prospective metrics before granular schema. Professionally metrics before expedite client-centric or analyzing before expedite methods ”', title: 'Cameron Williamson', desig:'Founder CEO'},
]

export const ProjectData = [
    {img: project1, title: 'STRATEGIES FOR SEAMLESS IMPLEMENTATION AND SUCCESS', btn:'View Projects'},
    { img: project2, title: 'The Art of Executing Project Based IT Solutions', btn:'View Projects'},
    { img: project3, title: 'Optimizing Project-Based IT Services for Enhanced', btn:'View Projects'},
    { img: project4, title: 'Strategies for Seamless Implementation and Success', btn: 'View Projects' },
    { img: project5, title: 'STRATEGIES FOR SEAMLESS IMPLEMENTATION ', btn: 'View Projects' },
    { img: project6, title: 'The Art of Executing Project Based IT Solutions', btn:'View Projects'},
    { img: project7, title: 'Optimizing Project-Based IT Services for Enhanced', btn:'View Projects'},
    { img: project8, title: 'Strategies for Seamless Implementation and Success', btn: 'View Projects' }, 
    { img: project9, title: 'The Art of Executing Project Based IT Solutions', btn: 'View Projects' },
]

export const faqdata = [
    { id: 1, title: 'What types of IT services does your company offer?', text:'represent a specific company, as I am a product of OpenAI, and OpenAI is not an IT services company. However, I can provide information about various types of IT services that companies in the industry commonly offer Outsourcing IT operations to a service provider for proactive management'},
    { id: 2, title: 'What is the typical process for engaging your IT services?', text: 'I don`t provide IT services myself, but I can outline a typical process that businesses might follow when engaging the services of an IT service provider.The exact steps can vary depending on the nature of the services'},
    { id: 3, title: 'How do you ensure the security of sensitive data while providing IT services?', text: 'As an AI language model created by OpenAI, I don`t provide IT services or handle sensitive data.However, I can offer general recommendations that IT service providers typically follow to ensure the security.'},
    { id: 4, title: 'Can your IT services help with technology upgrades and system migrations?', text: 'I don`t provide IT services myself, but I can certainly provide information on how IT service providers typically assist with many IT service providers offer services related to technology upgrades and system migrations.'},
    { id:5, title: 'How quickly can your team respond to IT-related issues or emergencies?', text: '  I don`t have a team, and I` not associated with a specific company. However, the response time to IT-related issues or emergencies can vary depending on the IT service provider, the level of support agreed'},
]

export const productdata = [
    {
        img: product1,
        title: 'Gaming Computer',
        price: '$370.85',
        rating: '★ ★ ★ ★ ★ ★ ',
        tag: 'Sale',
        text: 'Syndicate customized growth strategies prospective human capital leverage other`s optimal e- markets without transparent catalysts for change.Credibly coordinate highly efficient methods of empowerment cross unit solutions.',
        sku: 'wheel-fits-chevy-camaro',
        category: 'Tires & Wheels',
        tags: 'automotive parts wheels',
        description: 'Conveniently build adaptive users with front-end human capital. Appropriately unleash team building technology for goal-oriented paradigms. Dynamically generate interoperable e-business vis-a-visgoal-oriented value. Completely pursue fully tested content whereas multifunctional core competencies. Progressively scale team driven process improvements before premier functionalities. Holisticly cultivate intermandated methodologies rather than virtual technology. Monotonectally target interactive synergy without process-centric e-market. Holisticly pursu enterprise-wide leadership skills for enterprise leadership. Collaboratively underwhelm standardized expertise after effective bandwidth. Conveniently productivate holistic collaboration and idea-sharing rather than granular strategic theme areas. <br> <br> Enthusiastically aggregate ethical systems for standardized mindshare.Energistically target resource maximizing leadership skills without backward- compatible action items.Credibly impact alternative expertise vis - a - vis economically sound results.Dynamically synergize empowered benefits through functional partnerships.Authoritatively empower prospective infomediaries for interactive content.Synergistically embrace 2.0 paradigms through professional intellectual capital.Interactively strategize parallel growth strategies without out - of - the - box web services.Assertively reinvent installed base.',
        AdditionalInformation:'Conveniently build adaptive users with front-end human capital. Appropriately unleash team building technology for goal-oriented paradigms. Dynamically generate interoperable e-business vis-a-visgoal-oriented value. Completely pursue fully tested content whereas multifunctional core competencies. Progressively scale team driven process improvements before premier functionalities. Holisticly cultivate intermandated methodologies rather than virtual technology. Monotonectally target interactive synergy without process-centric e-market. Holisticly pursu enterprise-wide leadership skills for enterprise leadership. Collaboratively underwhelm standardized expertise after effective bandwidth. Conveniently productivate holistic collaboration and idea-sharing rather than granular strategic theme areas. Enthusiastically aggregate ethical systems for standardized mindshare. Energistically target resource maximizing leadership skills without backward-compatible action items. Credibly impact alternative expertise vis-a-vis economically sound results. Dynamically synergize empowered benefits through functional partnerships. Authoritatively empower prospective infomediaries for interactive content. Synergistically embrace 2.0 paradigms through professional intellectual capital. Interactively strategize parallel growth strategies without out-of-the-box web services. Assertively reinvent installed base.',
        customerreviews: [
            { img: testimonial1, name: 'Adam Jhon ', date: '22 April, 2024', rating: '5', text: 'This product is very much qualityful and I love this working system and speed.'},
            { img: testimonial2, name: 'Jusctin Dacon ', date: '23 April, 2024', rating: '5', text: 'They delivered the product in a few time. Product quality is also very good.'},
            { img: testimonial3, name: 'Jacklin July', date: '25 April, 2024', rating: '4', text: 'Their product and service is very satisfying. I highly recommend their services.'},
            { img: testimonial4, name: 'Adison Smith', date: '28 April, 2024', rating: '5', text: 'I am just in love with this product. Their service is also very good you can also try.'}
        ]
    },
    {
        img: product2,
        title: 'Smartphone Vivo V9',
        price: '$37.85',
        rating: '★ ★ ★',
        tag: 'Sale',
        text: 'Syndicate customized growth strategies prospective human capital leverage other`s optimal e- markets without transparent catalysts for change.Credibly coordinate highly efficient methods of empowerment cross unit solutions.',
        sku: 'wheel-fits-chevy-camaro',
        category: 'Tires & Wheels',
        tags: 'automotive parts wheels',
        description: 'Conveniently build adaptive users with front-end human capital. Appropriately unleash team building technology for goal-oriented paradigms. Dynamically generate interoperable e-business vis-a-visgoal-oriented value. Completely pursue fully tested content whereas multifunctional core competencies. Progressively scale team driven process improvements before premier functionalities. Holisticly cultivate intermandated methodologies rather than virtual technology. Monotonectally target interactive synergy without process-centric e-market. Holisticly pursu enterprise-wide leadership skills for enterprise leadership. Collaboratively underwhelm standardized expertise after effective bandwidth. Conveniently productivate holistic collaboration and idea-sharing rather than granular strategic theme areas. <br> <br> Enthusiastically aggregate ethical systems for standardized mindshare.Energistically target resource maximizing leadership skills without backward- compatible action items.Credibly impact alternative expertise vis - a - vis economically sound results.Dynamically synergize empowered benefits through functional partnerships.Authoritatively empower prospective infomediaries for interactive content.Synergistically embrace 2.0 paradigms through professional intellectual capital.Interactively strategize parallel growth strategies without out - of - the - box web services.Assertively reinvent installed base.',
        AdditionalInformation: 'Conveniently build adaptive users with front-end human capital. Appropriately unleash team building technology for goal-oriented paradigms. Dynamically generate interoperable e-business vis-a-visgoal-oriented value. Completely pursue fully tested content whereas multifunctional core competencies. Progressively scale team driven process improvements before premier functionalities. Holisticly cultivate intermandated methodologies rather than virtual technology. Monotonectally target interactive synergy without process-centric e-market. Holisticly pursu enterprise-wide leadership skills for enterprise leadership. Collaboratively underwhelm standardized expertise after effective bandwidth. Conveniently productivate holistic collaboration and idea-sharing rather than granular strategic theme areas. Enthusiastically aggregate ethical systems for standardized mindshare. Energistically target resource maximizing leadership skills without backward-compatible action items. Credibly impact alternative expertise vis-a-vis economically sound results. Dynamically synergize empowered benefits through functional partnerships. Authoritatively empower prospective infomediaries for interactive content. Synergistically embrace 2.0 paradigms through professional intellectual capital. Interactively strategize parallel growth strategies without out-of-the-box web services. Assertively reinvent installed base.',
        customerreviews: [
            { img: testimonial1, name: 'Adam Jhon ', date: '22 April, 2024', rating: '5', text: 'This product is very much qualityful and I love this working system and speed.'},
            { img: testimonial2, name: 'Jusctin Dacon ', date: '23 April, 2024', rating: '5', text: 'They delivered the product in a few time. Product quality is also very good.'},
            { img: testimonial3, name: 'Jacklin July', date: '25 April, 2024', rating: '4', text: 'Their product and service is very satisfying. I highly recommend their services.'},
            { img: testimonial4, name: 'Adison Smith', date: '28 April, 2024', rating: '5', text: 'I am just in love with this product. Their service is also very good you can also try.'}
        ]
    },
    {
        img: product3,
        title: 'SanDisk Flash Drive',
        price: '$3.85',
        rating: '★ ★ ★ ★',
        tag: 'Sale',
        text: 'Syndicate customized growth strategies prospective human capital leverage other`s optimal e- markets without transparent catalysts for change.Credibly coordinate highly efficient methods of empowerment cross unit solutions.',
        sku: 'wheel-fits-chevy-camaro',
        category: 'Tires & Wheels',
        tags: 'automotive parts wheels',
        description: 'Conveniently build adaptive users with front-end human capital. Appropriately unleash team building technology for goal-oriented paradigms. Dynamically generate interoperable e-business vis-a-visgoal-oriented value. Completely pursue fully tested content whereas multifunctional core competencies. Progressively scale team driven process improvements before premier functionalities. Holisticly cultivate intermandated methodologies rather than virtual technology. Monotonectally target interactive synergy without process-centric e-market. Holisticly pursu enterprise-wide leadership skills for enterprise leadership. Collaboratively underwhelm standardized expertise after effective bandwidth. Conveniently productivate holistic collaboration and idea-sharing rather than granular strategic theme areas. <br> <br> Enthusiastically aggregate ethical systems for standardized mindshare.Energistically target resource maximizing leadership skills without backward- compatible action items.Credibly impact alternative expertise vis - a - vis economically sound results.Dynamically synergize empowered benefits through functional partnerships.Authoritatively empower prospective infomediaries for interactive content.Synergistically embrace 2.0 paradigms through professional intellectual capital.Interactively strategize parallel growth strategies without out - of - the - box web services.Assertively reinvent installed base.',
        AdditionalInformation: 'Conveniently build adaptive users with front-end human capital. Appropriately unleash team building technology for goal-oriented paradigms. Dynamically generate interoperable e-business vis-a-visgoal-oriented value. Completely pursue fully tested content whereas multifunctional core competencies. Progressively scale team driven process improvements before premier functionalities. Holisticly cultivate intermandated methodologies rather than virtual technology. Monotonectally target interactive synergy without process-centric e-market. Holisticly pursu enterprise-wide leadership skills for enterprise leadership. Collaboratively underwhelm standardized expertise after effective bandwidth. Conveniently productivate holistic collaboration and idea-sharing rather than granular strategic theme areas. Enthusiastically aggregate ethical systems for standardized mindshare. Energistically target resource maximizing leadership skills without backward-compatible action items. Credibly impact alternative expertise vis-a-vis economically sound results. Dynamically synergize empowered benefits through functional partnerships. Authoritatively empower prospective infomediaries for interactive content. Synergistically embrace 2.0 paradigms through professional intellectual capital. Interactively strategize parallel growth strategies without out-of-the-box web services. Assertively reinvent installed base.',
        customerreviews: [
            { img: testimonial1, name: 'Adam Jhon ', date: '22 April, 2024', rating: '5', text: 'This product is very much qualityful and I love this working system and speed.' },
            { img: testimonial2, name: 'Jusctin Dacon ', date: '23 April, 2024', rating: '5', text: 'They delivered the product in a few time. Product quality is also very good.' },
            { img: testimonial3, name: 'Jacklin July', date: '25 April, 2024', rating: '4', text: 'Their product and service is very satisfying. I highly recommend their services.' },
            { img: testimonial4, name: 'Adison Smith', date: '28 April, 2024', rating: '5', text: 'I am just in love with this product. Their service is also very good you can also try.' }
        ]
    },
    {
        img: product4,
        title: 'Smart Power Bank',
        price: '$23.85',
        rating: '★ ★ ★ ★ ',
        tag: 'new',
        text: 'Syndicate customized growth strategies prospective human capital leverage other`s optimal e- markets without transparent catalysts for change.Credibly coordinate highly efficient methods of empowerment cross unit solutions.',
        sku: 'wheel-fits-chevy-camaro',
        category: 'Tires & Wheels',
        tags: 'automotive parts wheels',
        description: 'Conveniently build adaptive users with front-end human capital. Appropriately unleash team building technology for goal-oriented paradigms. Dynamically generate interoperable e-business vis-a-visgoal-oriented value. Completely pursue fully tested content whereas multifunctional core competencies. Progressively scale team driven process improvements before premier functionalities. Holisticly cultivate intermandated methodologies rather than virtual technology. Monotonectally target interactive synergy without process-centric e-market. Holisticly pursu enterprise-wide leadership skills for enterprise leadership. Collaboratively underwhelm standardized expertise after effective bandwidth. Conveniently productivate holistic collaboration and idea-sharing rather than granular strategic theme areas. <br> <br> Enthusiastically aggregate ethical systems for standardized mindshare.Energistically target resource maximizing leadership skills without backward- compatible action items.Credibly impact alternative expertise vis - a - vis economically sound results.Dynamically synergize empowered benefits through functional partnerships.Authoritatively empower prospective infomediaries for interactive content.Synergistically embrace 2.0 paradigms through professional intellectual capital.Interactively strategize parallel growth strategies without out - of - the - box web services.Assertively reinvent installed base.',
        AdditionalInformation: 'Conveniently build adaptive users with front-end human capital. Appropriately unleash team building technology for goal-oriented paradigms. Dynamically generate interoperable e-business vis-a-visgoal-oriented value. Completely pursue fully tested content whereas multifunctional core competencies. Progressively scale team driven process improvements before premier functionalities. Holisticly cultivate intermandated methodologies rather than virtual technology. Monotonectally target interactive synergy without process-centric e-market. Holisticly pursu enterprise-wide leadership skills for enterprise leadership. Collaboratively underwhelm standardized expertise after effective bandwidth. Conveniently productivate holistic collaboration and idea-sharing rather than granular strategic theme areas. Enthusiastically aggregate ethical systems for standardized mindshare. Energistically target resource maximizing leadership skills without backward-compatible action items. Credibly impact alternative expertise vis-a-vis economically sound results. Dynamically synergize empowered benefits through functional partnerships. Authoritatively empower prospective infomediaries for interactive content. Synergistically embrace 2.0 paradigms through professional intellectual capital. Interactively strategize parallel growth strategies without out-of-the-box web services. Assertively reinvent installed base.',
        customerreviews: [
            { img: testimonial1, name: 'Adam Jhon ', date: '22 April, 2024', rating: '5', text: 'This product is very much qualityful and I love this working system and speed.' },
            { img: testimonial2, name: 'Jusctin Dacon ', date: '23 April, 2024', rating: '5', text: 'They delivered the product in a few time. Product quality is also very good.' },
            { img: testimonial3, name: 'Jacklin July', date: '25 April, 2024', rating: '4', text: 'Their product and service is very satisfying. I highly recommend their services.' },
            { img: testimonial4, name: 'Adison Smith', date: '28 April, 2024', rating: '5', text: 'I am just in love with this product. Their service is also very good you can also try.' }
        ]
    },
    {
        img: product5,
        title: 'Apple Smartwatch',
        price: '$213.85',
        rating: '★ ★ ★ ',
        tag: 'new',
        text: 'Syndicate customized growth strategies prospective human capital leverage other`s optimal e- markets without transparent catalysts for change.Credibly coordinate highly efficient methods of empowerment cross unit solutions.',
        sku: 'wheel-fits-chevy-camaro',
        category: 'Tires & Wheels',
        tags: 'automotive parts wheels',
        description: 'Conveniently build adaptive users with front-end human capital. Appropriately unleash team building technology for goal-oriented paradigms. Dynamically generate interoperable e-business vis-a-visgoal-oriented value. Completely pursue fully tested content whereas multifunctional core competencies. Progressively scale team driven process improvements before premier functionalities. Holisticly cultivate intermandated methodologies rather than virtual technology. Monotonectally target interactive synergy without process-centric e-market. Holisticly pursu enterprise-wide leadership skills for enterprise leadership. Collaboratively underwhelm standardized expertise after effective bandwidth. Conveniently productivate holistic collaboration and idea-sharing rather than granular strategic theme areas. <br> <br> Enthusiastically aggregate ethical systems for standardized mindshare.Energistically target resource maximizing leadership skills without backward- compatible action items.Credibly impact alternative expertise vis - a - vis economically sound results.Dynamically synergize empowered benefits through functional partnerships.Authoritatively empower prospective infomediaries for interactive content.Synergistically embrace 2.0 paradigms through professional intellectual capital.Interactively strategize parallel growth strategies without out - of - the - box web services.Assertively reinvent installed base.',
        AdditionalInformation: 'Conveniently build adaptive users with front-end human capital. Appropriately unleash team building technology for goal-oriented paradigms. Dynamically generate interoperable e-business vis-a-visgoal-oriented value. Completely pursue fully tested content whereas multifunctional core competencies. Progressively scale team driven process improvements before premier functionalities. Holisticly cultivate intermandated methodologies rather than virtual technology. Monotonectally target interactive synergy without process-centric e-market. Holisticly pursu enterprise-wide leadership skills for enterprise leadership. Collaboratively underwhelm standardized expertise after effective bandwidth. Conveniently productivate holistic collaboration and idea-sharing rather than granular strategic theme areas. Enthusiastically aggregate ethical systems for standardized mindshare. Energistically target resource maximizing leadership skills without backward-compatible action items. Credibly impact alternative expertise vis-a-vis economically sound results. Dynamically synergize empowered benefits through functional partnerships. Authoritatively empower prospective infomediaries for interactive content. Synergistically embrace 2.0 paradigms through professional intellectual capital. Interactively strategize parallel growth strategies without out-of-the-box web services. Assertively reinvent installed base.',
        customerreviews: [
            { img: testimonial1, name: 'Adam Jhon ', date: '22 April, 2024', rating: '5', text: 'This product is very much qualityful and I love this working system and speed.' },
            { img: testimonial2, name: 'Jusctin Dacon ', date: '23 April, 2024', rating: '5', text: 'They delivered the product in a few time. Product quality is also very good.' },
            { img: testimonial3, name: 'Jacklin July', date: '25 April, 2024', rating: '4', text: 'Their product and service is very satisfying. I highly recommend their services.' },
            { img: testimonial4, name: 'Adison Smith', date: '28 April, 2024', rating: '5', text: 'I am just in love with this product. Their service is also very good you can also try.' }
        ]
    },
    {
        img: product6,
        title: 'Computer Gamer Mouse',
        price: '$23.85',
        rating: '★ ★ ',
        tag: 'new',
        text: 'Syndicate customized growth strategies prospective human capital leverage other`s optimal e- markets without transparent catalysts for change.Credibly coordinate highly efficient methods of empowerment cross unit solutions.',
        sku: 'wheel-fits-chevy-camaro',
        category: 'Tires & Wheels',
        tags: 'automotive parts wheels',
        description: 'Conveniently build adaptive users with front-end human capital. Appropriately unleash team building technology for goal-oriented paradigms. Dynamically generate interoperable e-business vis-a-visgoal-oriented value. Completely pursue fully tested content whereas multifunctional core competencies. Progressively scale team driven process improvements before premier functionalities. Holisticly cultivate intermandated methodologies rather than virtual technology. Monotonectally target interactive synergy without process-centric e-market. Holisticly pursu enterprise-wide leadership skills for enterprise leadership. Collaboratively underwhelm standardized expertise after effective bandwidth. Conveniently productivate holistic collaboration and idea-sharing rather than granular strategic theme areas. <br> <br> Enthusiastically aggregate ethical systems for standardized mindshare.Energistically target resource maximizing leadership skills without backward- compatible action items.Credibly impact alternative expertise vis - a - vis economically sound results.Dynamically synergize empowered benefits through functional partnerships.Authoritatively empower prospective infomediaries for interactive content.Synergistically embrace 2.0 paradigms through professional intellectual capital.Interactively strategize parallel growth strategies without out - of - the - box web services.Assertively reinvent installed base.',
        AdditionalInformation: 'Conveniently build adaptive users with front-end human capital. Appropriately unleash team building technology for goal-oriented paradigms. Dynamically generate interoperable e-business vis-a-visgoal-oriented value. Completely pursue fully tested content whereas multifunctional core competencies. Progressively scale team driven process improvements before premier functionalities. Holisticly cultivate intermandated methodologies rather than virtual technology. Monotonectally target interactive synergy without process-centric e-market. Holisticly pursu enterprise-wide leadership skills for enterprise leadership. Collaboratively underwhelm standardized expertise after effective bandwidth. Conveniently productivate holistic collaboration and idea-sharing rather than granular strategic theme areas. Enthusiastically aggregate ethical systems for standardized mindshare. Energistically target resource maximizing leadership skills without backward-compatible action items. Credibly impact alternative expertise vis-a-vis economically sound results. Dynamically synergize empowered benefits through functional partnerships. Authoritatively empower prospective infomediaries for interactive content. Synergistically embrace 2.0 paradigms through professional intellectual capital. Interactively strategize parallel growth strategies without out-of-the-box web services. Assertively reinvent installed base.',
        customerreviews: [
            { img: testimonial1, name: 'Adam Jhon ', date: '22 April, 2024', rating: '5', text: 'This product is very much qualityful and I love this working system and speed.' },
            { img: testimonial2, name: 'Jusctin Dacon ', date: '23 April, 2024', rating: '5', text: 'They delivered the product in a few time. Product quality is also very good.' },
            { img: testimonial3, name: 'Jacklin July', date: '25 April, 2024', rating: '4', text: 'Their product and service is very satisfying. I highly recommend their services.' },
            { img: testimonial4, name: 'Adison Smith', date: '28 April, 2024', rating: '5', text: 'I am just in love with this product. Their service is also very good you can also try.' }
        ]
    },
    {
        img: product7,
        title: 'Bluetooth Loudspeaker',
        price: '$23.85',
        rating: '★ ★ ★ ★ ★',
        tag: 'Sale',
        text: 'Syndicate customized growth strategies prospective human capital leverage other`s optimal e- markets without transparent catalysts for change.Credibly coordinate highly efficient methods of empowerment cross unit solutions.',
        sku: 'wheel-fits-chevy-camaro',
        category: 'Tires & Wheels',
        tags: 'automotive parts wheels',
        description: 'Conveniently build adaptive users with front-end human capital. Appropriately unleash team building technology for goal-oriented paradigms. Dynamically generate interoperable e-business vis-a-visgoal-oriented value. Completely pursue fully tested content whereas multifunctional core competencies. Progressively scale team driven process improvements before premier functionalities. Holisticly cultivate intermandated methodologies rather than virtual technology. Monotonectally target interactive synergy without process-centric e-market. Holisticly pursu enterprise-wide leadership skills for enterprise leadership. Collaboratively underwhelm standardized expertise after effective bandwidth. Conveniently productivate holistic collaboration and idea-sharing rather than granular strategic theme areas. <br> <br> Enthusiastically aggregate ethical systems for standardized mindshare.Energistically target resource maximizing leadership skills without backward- compatible action items.Credibly impact alternative expertise vis - a - vis economically sound results.Dynamically synergize empowered benefits through functional partnerships.Authoritatively empower prospective infomediaries for interactive content.Synergistically embrace 2.0 paradigms through professional intellectual capital.Interactively strategize parallel growth strategies without out - of - the - box web services.Assertively reinvent installed base.',
        AdditionalInformation: 'Conveniently build adaptive users with front-end human capital. Appropriately unleash team building technology for goal-oriented paradigms. Dynamically generate interoperable e-business vis-a-visgoal-oriented value. Completely pursue fully tested content whereas multifunctional core competencies. Progressively scale team driven process improvements before premier functionalities. Holisticly cultivate intermandated methodologies rather than virtual technology. Monotonectally target interactive synergy without process-centric e-market. Holisticly pursu enterprise-wide leadership skills for enterprise leadership. Collaboratively underwhelm standardized expertise after effective bandwidth. Conveniently productivate holistic collaboration and idea-sharing rather than granular strategic theme areas. Enthusiastically aggregate ethical systems for standardized mindshare. Energistically target resource maximizing leadership skills without backward-compatible action items. Credibly impact alternative expertise vis-a-vis economically sound results. Dynamically synergize empowered benefits through functional partnerships. Authoritatively empower prospective infomediaries for interactive content. Synergistically embrace 2.0 paradigms through professional intellectual capital. Interactively strategize parallel growth strategies without out-of-the-box web services. Assertively reinvent installed base.',
        customerreviews: [
            { img: testimonial1, name: 'Adam Jhon ', date: '22 April, 2024', rating: '5', text: 'This product is very much qualityful and I love this working system and speed.' },
            { img: testimonial2, name: 'Jusctin Dacon ', date: '23 April, 2024', rating: '5', text: 'They delivered the product in a few time. Product quality is also very good.' },
            { img: testimonial3, name: 'Jacklin July', date: '25 April, 2024', rating: '4', text: 'Their product and service is very satisfying. I highly recommend their services.' },
            { img: testimonial4, name: 'Adison Smith', date: '28 April, 2024', rating: '5', text: 'I am just in love with this product. Their service is also very good you can also try.' }
        ]
    },
    {
        img: product8,
        title: 'G-Technology G-Drive',
        price: '$23.85',
        rating: '★ ★ ★ ★',
        tag: 'Sale',
        text: 'Syndicate customized growth strategies prospective human capital leverage other`s optimal e- markets without transparent catalysts for change.Credibly coordinate highly efficient methods of empowerment cross unit solutions.',
        sku: 'wheel-fits-chevy-camaro',
        category: 'Tires & Wheels',
        tags: 'automotive parts wheels',
        description: 'Conveniently build adaptive users with front-end human capital. Appropriately unleash team building technology for goal-oriented paradigms. Dynamically generate interoperable e-business vis-a-visgoal-oriented value. Completely pursue fully tested content whereas multifunctional core competencies. Progressively scale team driven process improvements before premier functionalities. Holisticly cultivate intermandated methodologies rather than virtual technology. Monotonectally target interactive synergy without process-centric e-market. Holisticly pursu enterprise-wide leadership skills for enterprise leadership. Collaboratively underwhelm standardized expertise after effective bandwidth. Conveniently productivate holistic collaboration and idea-sharing rather than granular strategic theme areas. <br> <br> Enthusiastically aggregate ethical systems for standardized mindshare.Energistically target resource maximizing leadership skills without backward- compatible action items.Credibly impact alternative expertise vis - a - vis economically sound results.Dynamically synergize empowered benefits through functional partnerships.Authoritatively empower prospective infomediaries for interactive content.Synergistically embrace 2.0 paradigms through professional intellectual capital.Interactively strategize parallel growth strategies without out - of - the - box web services.Assertively reinvent installed base.',
        AdditionalInformation: 'Conveniently build adaptive users with front-end human capital. Appropriately unleash team building technology for goal-oriented paradigms. Dynamically generate interoperable e-business vis-a-visgoal-oriented value. Completely pursue fully tested content whereas multifunctional core competencies. Progressively scale team driven process improvements before premier functionalities. Holisticly cultivate intermandated methodologies rather than virtual technology. Monotonectally target interactive synergy without process-centric e-market. Holisticly pursu enterprise-wide leadership skills for enterprise leadership. Collaboratively underwhelm standardized expertise after effective bandwidth. Conveniently productivate holistic collaboration and idea-sharing rather than granular strategic theme areas. Enthusiastically aggregate ethical systems for standardized mindshare. Energistically target resource maximizing leadership skills without backward-compatible action items. Credibly impact alternative expertise vis-a-vis economically sound results. Dynamically synergize empowered benefits through functional partnerships. Authoritatively empower prospective infomediaries for interactive content. Synergistically embrace 2.0 paradigms through professional intellectual capital. Interactively strategize parallel growth strategies without out-of-the-box web services. Assertively reinvent installed base.',
        customerreviews: [
            { img: testimonial1, name: 'Adam Jhon ', date: '22 April, 2024', rating: '5', text: 'This product is very much qualityful and I love this working system and speed.' },
            { img: testimonial2, name: 'Jusctin Dacon ', date: '23 April, 2024', rating: '5', text: 'They delivered the product in a few time. Product quality is also very good.' },
            { img: testimonial3, name: 'Jacklin July', date: '25 April, 2024', rating: '4', text: 'Their product and service is very satisfying. I highly recommend their services.' },
            { img: testimonial4, name: 'Adison Smith', date: '28 April, 2024', rating: '5', text: 'I am just in love with this product. Their service is also very good you can also try.' }
        ]
    }, 
    {
        img: product9,
        title: 'Ultraviolet Battery',
        price: '$223.85',
        rating: '★ ★ ★ ',
        tag: 'Sale',
        text: 'Syndicate customized growth strategies prospective human capital leverage other`s optimal e- markets without transparent catalysts for change.Credibly coordinate highly efficient methods of empowerment cross unit solutions.',
        sku: 'wheel-fits-chevy-camaro',
        category: 'Tires & Wheels',
        tags: 'automotive parts wheels',
        description: 'Conveniently build adaptive users with front-end human capital. Appropriately unleash team building technology for goal-oriented paradigms. Dynamically generate interoperable e-business vis-a-visgoal-oriented value. Completely pursue fully tested content whereas multifunctional core competencies. Progressively scale team driven process improvements before premier functionalities. Holisticly cultivate intermandated methodologies rather than virtual technology. Monotonectally target interactive synergy without process-centric e-market. Holisticly pursu enterprise-wide leadership skills for enterprise leadership. Collaboratively underwhelm standardized expertise after effective bandwidth. Conveniently productivate holistic collaboration and idea-sharing rather than granular strategic theme areas. <br> <br> Enthusiastically aggregate ethical systems for standardized mindshare.Energistically target resource maximizing leadership skills without backward- compatible action items.Credibly impact alternative expertise vis - a - vis economically sound results.Dynamically synergize empowered benefits through functional partnerships.Authoritatively empower prospective infomediaries for interactive content.Synergistically embrace 2.0 paradigms through professional intellectual capital.Interactively strategize parallel growth strategies without out - of - the - box web services.Assertively reinvent installed base.',
        AdditionalInformation: 'Conveniently build adaptive users with front-end human capital. Appropriately unleash team building technology for goal-oriented paradigms. Dynamically generate interoperable e-business vis-a-visgoal-oriented value. Completely pursue fully tested content whereas multifunctional core competencies. Progressively scale team driven process improvements before premier functionalities. Holisticly cultivate intermandated methodologies rather than virtual technology. Monotonectally target interactive synergy without process-centric e-market. Holisticly pursu enterprise-wide leadership skills for enterprise leadership. Collaboratively underwhelm standardized expertise after effective bandwidth. Conveniently productivate holistic collaboration and idea-sharing rather than granular strategic theme areas. Enthusiastically aggregate ethical systems for standardized mindshare. Energistically target resource maximizing leadership skills without backward-compatible action items. Credibly impact alternative expertise vis-a-vis economically sound results. Dynamically synergize empowered benefits through functional partnerships. Authoritatively empower prospective infomediaries for interactive content. Synergistically embrace 2.0 paradigms through professional intellectual capital. Interactively strategize parallel growth strategies without out-of-the-box web services. Assertively reinvent installed base.',
        customerreviews: [
            { img: testimonial1, name: 'Adam Jhon ', date: '22 April, 2024', rating: '5', text: 'This product is very much qualityful and I love this working system and speed.' },
            { img: testimonial2, name: 'Jusctin Dacon ', date: '23 April, 2024', rating: '5', text: 'They delivered the product in a few time. Product quality is also very good.' },
            { img: testimonial3, name: 'Jacklin July', date: '25 April, 2024', rating: '4', text: 'Their product and service is very satisfying. I highly recommend their services.' },
            { img: testimonial4, name: 'Adison Smith', date: '28 April, 2024', rating: '5', text: 'I am just in love with this product. Their service is also very good you can also try.' }
        ]
    },
]