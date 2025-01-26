import './Projects.css';
import image from './assets/Project1.jpg';
import image2 from './assets/Project2.png';
import image3 from './assets/Project3.jpg';
import image4 from './assets/project 4.png';
import image5 from './assets/Project5.png';
import image6 from './assets/Project6.png';
import image7 from './assets/Project7.png';
import image8 from './assets/Project8.png';
import image9 from './assets/Project 9.png';
import image10 from './assets/Project 10.png';
import image11 from './assets/Project11.png';

function Projects() {
    return (
        <section className='projects'>
            <h1>My Projects</h1>
            <div className='projects-grid'>
                <div className='project'>
                    <img src={image} alt='Project 1' />
                    <h2>Stats preview card</h2>
                    <p>Responsive stats preview card built with HTML, CSS, Flexbox, and media queries for a modern UI design.</p>
                </div>
                <div className='project'>
                    <img src={image2} alt='Project 2'/>
                    <h2>Card</h2>
                    <p>Responsive webpage with HTML/CSS cards and badges.</p>
                </div>
               <div className='project'>
                <img src={image3} alt='Project 3'/>
                <h2>Coming Soon Page</h2>
                <p>Modern Coming Soon page with HTML, CSS, and JavaScript, featuring a responsive design and interactive elements.</p>
               </div>
               <div className='project'>
                <img src={image4} alt='Project 4' />
                <h2>Order summary</h2>
                <p>Responsive Order Summary Card with HTML, CSS, hover effects, and modern design.</p>
               </div>
               <div className='project'>
                <img src={image5} alt='Project 5' />
                <h2>Product preview</h2>
                <p>Product preview page with HTML/CSS, featuring a fragrance layout, pricing, and 'Add to Cart' button.</p>
               </div>
            <div className='project'>
                <img src={image6} alt='Project 6' />
                <h2>QR code </h2>
                <p>Responsive QR Code component using HTML, CSS, Flexbox, and modern layout techniques.</p>
            </div>
            <div className='project'>
                <img src={image7} alt='Project 7'  />
                <h2>Result summary</h2>
                <p>Result summary component with a circular score indicator and performance stats for categories like Reaction, Memory, and more.</p>
            </div>
            <div className='project'>
                <img src={image8} alt='Project 8' />
                <h2>Sing Up</h2>
                <p>Modern, responsive Sign-Up page with email, Google, and Facebook authentication options.</p>
            </div>
            <div className='project'>
                <img src={image9} alt='Project 9' />
                <h2>Social Links Profile</h2>
                <p>Minimalist profile page with a picture, location, and social media links, built with HTML and CSS.</p>
            </div>
            <div className='project'>
                <img src={image10} alt='Project 10' />
                <h2>Sign-up form</h2>
                <p>A modern and responsive sign-up form with interactive validation, built using HTML, CSS, and JavaScript.</p>
            </div>
            <div className='project'>
                <img src={image11} alt='Project 11' />
                <h2>Coming soon page</h2>
                <p>A simple Coming Soon page built with HTML, CSS, and JavaScript, featuring a modern, responsive design and interactive elements.</p>
            </div>
            </div>
            <a href="/" className="back-to-home">Back to Home</a>
        </section>
    );
}

export default Projects;
