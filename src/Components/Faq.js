import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MobileHeaderGeneric from './MobileHeaderGeneric';
import GenericHeader from './genericHeader';
import Footer from './footer';

const departments = [
    {
        department: '',
        FaqQuestion: [
            {
                Question: 'How many industrial estates working in the entire province?',
                Answer: 'The Sindh Small Industries Corporation has established 19 Industrial Estates and 03 Industrial parks in all over Sindh.'
            },
            {
                Question: 'What is the objective of Sindh Small Industries Corporation (Government of Sindh)?',
                Answer: 'Sindh Small Industries Corporation came into being under the Act XXVI 1972 working under the auspices of Government of Sindh with the objective to promote Small and Cottage Industries including handicrafts in the Province.'
            },
            {
                Question: 'What are the requirements for allotment of industrial plots in Sindh Small industries Corporation?',
                Answer: 'Required Document for Allotment of plots.Application of Party 02 Passport Size Photos Undertaking given by Allottee. Copy of CNIC. Bank Certificate Payorder of cost of plot Official Receipt (O.R)'
            },
            {
                Question: 'How much time is consumed for issuing allotment order? ',
                Answer: 'For issuance of allotment order the procedure approximately completed is 15 to 20 days.  '
            },
            {
                Question: 'Is there any Fee after of allotment of plot(s)?',
                Answer: 'Yes, yearly License Fee will be charge after the allotment of plot(s) from the alloottee.'
            },
            {
                Question: 'What is difference between Industrial Estate and Industrial Park so far established in the Province?  ',
                Answer: 'A slight difference of area is earmarked. Industrial parks are established on about 05 acre land only and the industrial estate established on more than that.  '
            },
            {
                Question: 'What is the Procedure to obtain NOC?',
                Answer: 'The allottee may apply to the Corporation for issuance of NOC for availing of any facility to be provided by various agencies on payment of fee'
            },
            {
                Question: 'Size (Area) of Industrial Plot?',
                Answer: 'In SSIC, there are mostly 02 category of plot(s) i.e. 500 Sq.Yds and 1000 Sq.Yds most of the Estates.'
            },
            {
                Question: 'What is the trend of Industries are in the Regions/Districts?  ',
                Answer: 'The trend of Small Scale Industries mostly is according to availability of raw material in the respective Regions/Districts. '
            },
        ]



    }
    , {
        department: 'ENERGY DEPARTMENT :',
        FaqQuestion: [
            {
                Question: 'Where is the Coal found in Sindh Province? ',
                Answer: 'Coal is found in Thaprakar,Jamshoro,Thatta and Badin Districts of Sindh Province.'
            },
            {
                Question: 'How much is the reserves of Coal found in Sindh Province? ',
                Answer: 'There is approximately 185 billion tons of coal in total in Sindh Province.'
            },
            {
                Question: 'What are the responsibilities of Licensing Authority? ',
                Answer: 'To grant and regulate coal mining concessions, monitoring of concessions through field offices, to defend the litigation in Courts and to defend the government interest, to hold coal mining committees and conduct auctions for royalty and cess tax through Coal Mines Committee and decide the offered bids as per potential of the areas. '
            },
            {
                Question: 'What is the difference between Large Scale Mining and Small Scale Mining?',
                Answer: 'Large scale mining can be any mega project either undertaken by the local or foreign investors, made in respect of an area, of land not exceeding 250 square kilometers involving huge  investment. In addition to that for large scale mining the competitive bids are invited by Sindh Coal Authority, Energy Department, bidding is announced in national and international newspapers for inviting the most serious investors after signing MoU with Sindh Coal Authority, thereafter the matter is dealt by Directorate of Coal Mines Development, Energy Department. As such, large scale mining title holder has to deposit US$500,000.Whereas, small scale mining is confined to any mining project in which investment is for an amount less than PKR.300 million in Pakistani currency.'
            },
            {
                Question: 'What is the function of Licensing Authority?',
                Answer: 'Licensing Authority grants or renews a coal title or a coal permit; refuse to grant or renew a coal title or a coal permit; cancel a coal title or coal permit; amend terms or conditions of any coal title or coal permit.'
            },
            {
                Question: 'What is Royalty? ',
                Answer: 'Royalty is seven and half percent on the value at the pit’s mouth subject to a minimum of PKR 375 per ton (1000 kg).'
            },
            {
                Question: 'Where Thar Coal field is located and how much coal reserves are there?',
                Answer: 'Thar Coal fields are located in Thar desert area occupying East and Southeastern portion of Sindh Province of Pakistan. Being a desert, the area is extremely dry arid region with very low rainfall and limited water resources. Thar desert possesses 175 billion ton, one of the biggest Lignite deposits spread in an area of 9100 sq. km in the Tharparkar district. '
            },

            {
                Question: 'How many Blocks are designed in Thar Coalfield?',
                Answer: 'There are 12 (twelve)- blocks designed in the Thar Coalfield.'
            }, {
                Question: 'How and when these Thar coal reserves were discovered?',
                Answer: 'The tangible indications that coal was present beneath the sands of the Thar Desert came with the drilling of five water wells by the British Overseas Development Agency (ODA) in collaboration with the defunct Sindh Arid Zone Development Authority (SAZDA). Water drill hole ODA2 was drilled in 1988 near the village of Khario Ghulam Shah about 15 km east of Islamkot. The descriptions of cuttings from this well noted “Carbonaceous Shale” between depths of 126-129m. On the basis of the presence of coal in ODA2 water well the Geological Survey of Pakistan (GSP) and United States Geological Survey (USGS) examined and described drill cuttings from other nearby SAZDA wells in March 1989. The hole No.TH-5 was geophysical logged along with other holes and it was estimated the total coal present in well was 19 m. Further confirmation of the coal presence in Thar Desert exploration program was carried out by drilling 4 bore holes.In October 1992, the Geological Survey of Pakistan (GSP), and United States Geological Survey (USGS) began a 21 bore holes exploration program to define the magnitude and geographic limits of the Thar Coal field. In 1993, an additional 10 bore holes were drilled by the John .T. Boyd Company under the auspices of USAID, additional 03 drill holes were also drilled by GSP under the auspices of USAID. The studies proved that Thar coalfield is spread over an area of 9100 square kilometers with dimensions of 140 km (north-south) 65 km (east-west) having 175 billion tones of Lignite categorized “A” to “B”. The GSP carried out the drilling program for development of the blocks for further proven coal reserves from 1994-2000 and Blocks I, II, III and IV were developed. In 2005-2006, Sindh Coal Authority developed Block V and VI through Northeast Coalfield Geological Survey Bureau, China. In 2008-09, Sindh Coal Authority developed Block VII, VIII and extended the block III up to 56 Sq.km (i-e Block III-B) through M/s Deep Rock Drilling Pvt. Limited.'
            },
        ]
    },
    {
        department: "Sindh Building Control Authority :",
        FaqQuestion: [
            {
                Question: 'What types of construction permits can be submitted for approval at single window facility?',
                Answer: 'Single Window Facility only processes and approves the cases of residential proposed building plans other than plots defined in clause 25-9 (Old City Areas) of KB&TPR, 2002 amended upto date and Katchi Abadis. The cases of revised/amended plan shall only be processed and approved by single window facility where previous approval has been granted by SWF.'
            }, {
                Question: 'What are the steps for approvals of construction permits at single window facility?',
                Answer: `Step 1:\n
            Obtain -forwarding from the relevant Land-Owning Agency confirming the Title, Land Use and Dimensions of plot. The relevant plot shall be verified from the approved layout plan of scheme/ society by MPD/ LDA/ MDA/ officer of Single Window Facility.
            Step 2:
            Engage Licensed Professional to prepare engineering design and drawing specifications and to supervise their respective works at site.
            Step 3:
            Owner / representative shall Submit Hardcopy of proposal at SBCA smart counter.
            Step 4:
            Acknowledgement Receipt Shall be issued after payment of scrutiny fees and in case of Additional Floor/ Basement, fee shall be paid separately.`
             },
            // {
            //     Question: '',
            //     Answer: ''
            // }, 
        ]
    }
]
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
                        departments.map((department,index) => (
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
                                                    {faqItem?.Answer}
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