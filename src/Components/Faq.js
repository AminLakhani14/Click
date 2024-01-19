import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MobileHeaderGeneric from './MobileHeaderGeneric';
import GenericHeader from './genericHeader';
import Footer from './footer';
import departmentsFaq from './constant'

const Faq = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {

        // Function to update the windowWidth state when the resize event occurs
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            {windowWidth <= 500 ? <MobileHeaderGeneric /> : <GenericHeader />}
            {windowWidth <= 500 ? (
                <div></div>
            ) : (
                <div style={{ height: "120px" }}></div>
            )}
            <div
                className="col-lg-12"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "30px",
                    position: "relative"
                }}
            >
                <div className="" >
                    <h1 className={window.innerWidth <= 540 ? "catalog  mb-4" : "catalog "}>Frequently Asked Questions (FAQ)</h1>
                </div>
            </div>
            <div className='d-flex justify-content-center mb-5'>
                <div className='w-75 mb-5 '>
                    {
                        departmentsFaq.map((department,index) => (
                            <div key={index}>
                                <Typography style={{ fontSize: "22px", marginTop: index >=1 && 40, marginBottom: 10 }}>{department?.department}</Typography>
                                {
                                    department?.FaqQuestion.map((faqItem) => (
                                        <Accordion key={faqItem?.id}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography sx={{ fontWeight: 'bold' }}>{faqItem?.Question}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    <span style={{ whiteSpace: "pre-line"}}  dangerouslySetInnerHTML={{ __html: faqItem?.Answer }} ></span>
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Faq