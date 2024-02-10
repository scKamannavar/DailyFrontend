import React, { useEffect, useRef, useState } from 'react';
import Header from './header';
import Footer from './Footer';



import image7 from '../assets/images/issue1.png'
import image6 from '../assets/images/issue2.png'
import image5 from '../assets/images/issue3.png'
import image4 from '../assets/images/issue4.png'
import image3 from '../assets/images/issue5.png'
import image2 from '../assets/images/issue6.png'
import image1 from '../assets/images/issue7.png'

const Layout = () => {
    const [backgroundColor, setBackgroundColor] = useState('bg-[#FF608C]');
    const containerRef = useRef(null);
    const cont1Ref = useRef(null);
    const cont2Ref = useRef(null);
    const cont3Ref = useRef(null);
    const cont4Ref = useRef(null);
    const cont5Ref = useRef(null);
    const cont6Ref = useRef(null);
    const cont7Ref = useRef(null);

    const [currentissue, setCurrentissue] = useState('')

    const handleScroll = () => {
        const container = containerRef.current;
        const scrollY = container.scrollTop;
        const screenHeight = container.clientHeight;

        const cont1Offset = cont1Ref.current.offsetTop;
        const cont2Offset = cont2Ref.current.offsetTop;
        const cont3Offset = cont3Ref.current.offsetTop;
        const cont4Offset = cont4Ref.current.offsetTop;
        const cont5Offset = cont5Ref.current.offsetTop;
        const cont6Offset = cont6Ref.current.offsetTop;
        const cont7Offset = cont7Ref.current.offsetTop;

       if (scrollY > cont7Offset - screenHeight / 2) {
            setBackgroundColor('bg-[#E30512]');
            setCurrentissue(7)
        } else if (scrollY > cont6Offset - screenHeight / 2) {
            setBackgroundColor('bg-[#1D3FBB]');
            setCurrentissue(6)
        } else if (scrollY > cont5Offset - screenHeight / 2) {
            setBackgroundColor('bg-[#FFBE00]');
            setCurrentissue(5)
        } else if (scrollY > cont4Offset - screenHeight / 2) {
            setBackgroundColor('bg-[#FF6519]');
            setCurrentissue(4)
        } else if (scrollY > cont3Offset - screenHeight / 2) {
            setBackgroundColor('bg-[#00C1B5]');
            setCurrentissue(3)
        } else if (scrollY > cont2Offset - screenHeight / 2) {
            setBackgroundColor('bg-white');
            setCurrentissue(2)
        } else if (scrollY > cont1Offset - screenHeight / 2) {
            setBackgroundColor('bg-[#FF608C]');
            setCurrentissue(1)
        } 
    };

    const scrollToRef = (ref) => {
        const section = document.querySelector( ref )
        section.scrollIntoView( { behavior: 'smooth', block: 'center',inline: "nearest" } );
        // window.scrollTo({
        //     top: section.offsetTop,
        //     behavior: 'smooth'
        // });
    };
    
    useEffect(() => {
        const container = containerRef.current;
        container.addEventListener('scroll', handleScroll);
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
        
    }, []);

   

    

    return (
        <>
        
        <div ref={containerRef} className={`flex flex-col relative h-screen w-full text-[18px] font-sans font-semibold transition-colors duration-700 ease-in-out scroll-smooth lg:snap-y lg:snap-mandatory snap-none  overflow-y-auto  ${backgroundColor}`}     >
            <Header></Header>
            <div id="cont1" ref={cont1Ref} className='flex flex-col w-full h-screen bg-transparent items-center justify-center snap-start snap-always flex-shrink-0'> 
                <img src={image1} className='w-[420px]' alt="" />
                <h1>issue #7</h1>
                <h1 className='font-bold'>BUY HERE</h1>
            </div>
            <div id="cont2" ref={cont2Ref} className='flex flex-col w-full h-screen transparent items-center justify-center snap-start snap-always flex-shrink-0'>
                <img src={image2} className='w-[420px]' alt="" />
                <h1>issue #6</h1>
                <h1 className='font-bold'>BUY HERE</h1>
            </div>
            <div id="cont3" ref={cont3Ref} className='flex flex-col w-full h-screen transparent items-center justify-center snap-start snap-always flex-shrink-0'>
                <img src={image3} className='w-[420px]' alt="" />
                <h1>issue #5</h1>
                <h1 className='font-bold'>BUY HERE</h1>
            </div>
            <div id="cont4" ref={cont4Ref} className='flex flex-col w-full h-screen transparent items-center justify-center snap-start snap-always flex-shrink-0'>
                <img src={image4} className='w-[420px]' alt="" />
                <h1>issue #4</h1>
                <h1 className='font-bold'>BUY HERE</h1>
            </div>
            <div id="cont5" ref={cont5Ref} className='flex flex-col w-full h-screen transparent items-center justify-center snap-start snap-always flex-shrink-0'>
                <img src={image5} className='w-[420px]' alt="" />
                <h1>issue #3</h1>
                <h1 className='font-bold'>BUY HERE</h1>
            </div>
            <div id="cont6" ref={cont6Ref} className='flex flex-col w-full h-screen transparent items-center justify-center snap-start snap-always flex-shrink-0'>
                <img src={image6} className='w-[420px]' alt="" />
                <h1>issue #2</h1>
                <h1 className='font-bold'>BUY HERE</h1>
            </div>
            <div id="cont7" ref={cont7Ref} className='flex flex-col w-full h-screen transparent items-center justify-center snap-start snap-always flex-shrink-0'>
                <img src={image7} className='w-[420px]' alt="" />
                <h1>issue #1</h1>
                <h1 className='font-bold'>BUY HERE</h1>
            </div>
           
            <Footer></Footer>
        </div>
        </>
    );
};

export default Layout;
