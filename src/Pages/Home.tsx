import Accordion from "../components/Accordion";
import Cards from "../components/Cards";
import Hero from "../components/Hero";
import Services from "../components/Services";
const Home = () => {
  return (
    <div>
        <Hero title="Experts in Assessing Leaders and Teams" tagline="Bringing Perspective, Content Ideas and Change to Leaders Seeking
Purpose-Driven Actions" image={{src: "https://images.unsplash.com/photo-1559752714-c04296c68f63?w=1080&fit=crop&crop=entropy&auto=format", alt: "Hero Image"}} />
        <Cards  
            blockTitle="Features" 
            blockDescription="Experts in assessing leaders and teams" 
            cards={[
                {
                    title: "Business Perspective",
                    description: "We bring a unique business perspective to our coaching engagements, helping leaders and teams understand the impact of their actions on the overall success of the organization.",
                    image: {
                        src: "https://images.unsplash.com/photo-1533152386-e1f8d8950bb4?w=1080&fit=crop&crop=entropy&auto=format",
                        alt: "Leadership Coaching"
                    }
                },
                {
                    title: "Talent Solutions",
                    description: "Our team of experts design talent solutions that are tailored to the specific needs of our clients, ensuring that they have the right people in the right roles to drive business results.",
                    image: {
                        src: "https://images.unsplash.com/photo-1542370540528-fc28585c439c?w=1080&fit=crop&crop=entropy&auto=format",
                        alt: "Team Coaching"
                    }
                },
                {
                    title: "Content",
                    description: "We provide strategy and content that are focused on delivering tangible results. Our approach combines industry knowledge with proven consultative techniques to help leaders and teams achieve their goals.",
                    image: {
                        src: "https://images.unsplash.com/photo-1542927502-14b98754030d?w=1080&fit=crop&crop=entropy&auto=format",
                        alt: "Business Coaching"
                    }
                }
            ]}
          />
          <Services
            blockDescription="Expert(s) in assessing leaders and teams"
            blockTitle="Services"
            services={
              [
                {
                  title: "Assessment (as is) with direct reference to Gallup and Strengths Finder TM.",
                  description: "Our leadership services are designed to help leaders at all levels of the organization develop the skills and capabilities needed for business results.",
                  items: [
                    {
                      item: "Executive Coaching"
                    },
                    {
                      item: "Leadership Development"
                    },
                    {
                      item: "Succession Planning"
                    }
                  ]
                },
                {
                  title: "Targeted content based on an outside-in focus.",
                  description: " Services are focused on helping teams work together more effectively to achieve their goals and drive business success.",
                  items: [
                    {
                      item: "Team Building"
                    },
                    {
                      item: "Collaboration"
                    },
                    {
                      item: "Conflict Resolution"
                    }
                  ]
                },
                {
                  title: "Positioning. Two levels: Branding 101 and Closing 102.",
                  description: "Our business coaching services are designed to help organizations develop the skills and capabilities they need to drive business results.",
                  items: [
                    {
                      item: "Strategic Planning"
                    },
                    {
                      item: "Change Management"
                    },
                    {
                      item: "Performance Management"
                    }
                  ]
                }
              ]
            }
          />
         
          <Accordion
            blockTitle="FAQs"
            blockDescription="Experts in assessing leaders and teams"
            accordions={
              [
              {
              title: "What is leadership coaching?",
              content: "Leadership coaching is a process that helps leaders at all levels of the organization develop the skills and capabilities they need to drive business results.",
             
              },
              {
                title: "What services does Point Of View LLC provide?",
                content: "Point Of View LLC provides services in assessing leaders and teams. They bring a business perspective to their coaching engagements and design talent solutions that deliver results.",
               
                },
              
            ]
          }
          />
           
    </div>
  )
}

export default Home