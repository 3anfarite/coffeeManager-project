import React , { useRef , useEffect} from 'react'
import styled from 'styled-components'
import ImgBlock from './ImgBlock'
import TextBlock from './TextBlock'
import image from '../images/screenShot.jpeg'
import gsap from 'gsap' 
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ServiceSection = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20rem;
    position: relative;

`

const Background = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 160vh;
    background-color: #fff;
    background-size: auto 100vw;
    z-index: -1;
`

const Title = styled.h1`
    display: inline-block;
    color: #141A29;
    font-size: 2rem;
    margin-top: 1rem;
    position: relative;

    &::before{
        content:"";
        height: 1px;
        width: 50%;
        position: absolute;
        left: 50%;
        bottom: 0;
        border-bottom: 2px solid black;
        transform: translate(-50%);
    }
`
const Line = styled.span`
    border-left: 3px solid #141A29;
    height: 15rem;
    margin-top: 2rem;
    border-radius: 20px 20px 0 0;
    @media only Screen and (max-width:48em){
        height: 2rem;
    }
`

const Triangle = styled.span`
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-top: 1rem solid #141A29;
`
const Content  = styled.div`
    display: flex;
    margin-top: 1rem;
    margin-bottom: 10rem;
    /* margin: 3rem 10rem; */
    align-items: center;
    justify-content: space-between;
    position: relative;
    
    @media only Screen and (max-width:48em){
        display: block;
        &:last-child{
            margin-bottom: 2rem;
        }
    }
`

const OBJ = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    width: 40vw;
    position: relative;

    @media only Screen and (max-width:48em){
        display: flex;
        margin-left: auto;
    margin-right: auto;
    }
`

const Services = () => {

    const ref = useRef(null)
    const revealRefs = useRef([]);
    revealRefs.current = []
    gsap.registerPlugin(ScrollTrigger)

    const addToRefs = (el) =>{
        if(el && !revealRefs.current.includes(el)){
            revealRefs.current.push(el)
        }
        console.log("reveal refs", revealRefs.current)
    }

    useEffect(() => {
        const element = ref.current;
        ////
        const mq = window.matchMedia("(max-width: 48em)");
        const t1 = gsap.timeline({
          scrollTrigger: {
            trigger: document.getElementById("services"),
    
            start: "top top",
    
            end: "bottom bottom",
    
            pin: element,
            pinReparent: true,
          },
        });
        
    
        revealRefs.current.forEach((el, index) => {
           console.log(el.childNodes);
          if (mq.matches) {
            t1.from(
              el.childNodes[0],
    
              {
                x: -300,
                opacity: 0,
                duration: 2,
    
                ease: "power2",
                scrollTrigger: {
                  id: `section-${index + 1}`,
                  trigger: el,
                  start: "top center+=300",
                  end: "bottom bottom-=100",
                  scrub: true,
                 
                  //
                  // toggleActions: "play none none reverse",
                },
              }
            )
              .from(
                el.childNodes[2],
    
                {
                  y: 400,
    
                  duration: 2,
    
                  ease: "power2",
                  scrollTrigger: {
                    id: `section-${index + 1}`,
                    trigger: el,
                    start: "top center+=100",
                    end: "bottom bottom-=200",
                    scrub: true,
                    // markers:true,
                    //
                    // toggleActions: "play none none reverse",
                  },
                }
              )
              .to(
                el,
    
                {
                  opacity: 0,
    
                  ease: "power2",
                  scrollTrigger: {
                    id: `section-${index + 1}`,
                    trigger: el,
                    start: "top top+=70",
                    end: "center top+=300",
                    scrub: true,
                    // markers:true,
                  },
                }
              );
          } else {
            t1
              .from(
                el.childNodes[1],
    
                {
                  y: 400,
    
                  duration: 2,
    
                  ease: "power2",
                  scrollTrigger: {
                    id: `section-${index + 1}`,
                    trigger: el,
                    start: "top center+=100",
                    end: "bottom bottom-=200",
                    scrub: true,
                    // markers:true,                    //
                    // toggleActions: "play none none reverse",
                  },
                }
              )
              .from(
                el.childNodes[0],
      
                {
                  x: -300,
                  opacity: 0,
                  duration: 2,
      
                  ease: "power2",
                  scrollTrigger: {
                    id: `section-${index + 1}`,
                    trigger: el,
                    start: "top center+=300",
                    end: "bottom bottom-=100",
                    scrub: true,
                    snap: true,
                    //
                    // toggleActions: "play none none reverse",
                  },
                }
              )
              .to(
                el,
    
                {
                  opacity: 0,
                  duration:1,  
                  ease: "power2",
                  scrollTrigger: {
                    id: `section-${index + 1}`,
                    trigger: el,
                    start: "top top+=70",
                    end: "center top+=100",
                    scrub: true,
                    // markers:true,
                  },
                }
              );
          }
        });
      }, []);
    
      

    return (
        <ServiceSection >
            <Background ref={ref}>
                <Title>What we offer</Title>
                {/* <Line id="line"/>
                <Triangle id="triangle"/> */}
            </Background>
            <Content ref={addToRefs} id="services" >
                <TextBlock
                    topic="Get your own design"
                    title="Saving yours and your clients time "
                    subText="Manage your restaurant or your coffee shop in a defferent way "
                />
                
                <ImgBlock img = "screenShot.png"/>
                
                <OBJ>
                    <img src={image}/>
            </OBJ>
            </Content>
            
            <Content ref={addToRefs} >
                <TextBlock
                    topic="New system"
                    title="Now it's easy to manage it"
                    subText="Manage your restaurant or your coffee shop in a defferent way"
                />
                <ImgBlock img = "screenShot.png"/>

                <OBJ>
                    <img src={image}/>
            </OBJ> 
            </Content>
           
            <Content ref={addToRefs} >
                <TextBlock
                    topic="Many features"
                    title="High quality resopnsive website"
                    subText="Once your system is online, we will stay on hand to help you use it and provide technical support and maintenance
                    your business
                    "
                />
                
                <ImgBlock img = "screenShot.png"/>

                <OBJ>
                    <img src={image}/>
            </OBJ> 
            </Content>  
                                 
        </ServiceSection>

    )
}

export default Services
