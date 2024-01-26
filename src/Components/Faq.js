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
import { TextField } from '@mui/material';


const allFaqQuestions = departmentsFaq.flatMap(department => department.FaqQuestion);
const Faq = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [filteredFaq, setfilteredFaq] = useState([])
    const [isFilterOn, setisFilterOn] = useState(true)
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
    const filterData = (event) => {
        setisFilterOn(false)
        try {
            if (event.target.value !== '') {
                let filterValue = event.target.value.toLowerCase();

                const getFilterData = allFaqQuestions.filter(question => {
                    return question.Question.toLowerCase().includes(filterValue);
                });
                setfilteredFaq(getFilterData);
            }
            else {
                setisFilterOn(true)
                setfilteredFaq([]); // Set filteredFaq back to departmentsFaq
            }
        } catch (error) {
            console.log(error);
        }
    };


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
                    <div className="row g-0">
                        <div className="col-lg-4 col-xxl-5">
                            <TextField
                                className="mb-4"
                                size='small'
                                type="text"
                                placeholder="Search Faq..."
                                onChange={filterData}
                                style={{ width: "100%" }}
                            />
                        </div>
                    </div>
                    {
                        !isFilterOn && filteredFaq?.map((faqItem) => {
                            return <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ fontWeight: 'bold' }}>{faqItem?.Question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <span style={{ whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: faqItem?.Answer }} ></span>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        })
                    }
                    {
                        isFilterOn && departmentsFaq?.map((department, index) => (
                            <div key={index}>
                                <Typography style={{ fontSize: "22px", marginTop: index >= 1 && 40, marginBottom: 10 }}>{department?.department}</Typography>
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
                                                    <span style={{ whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: faqItem?.Answer }} ></span>
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