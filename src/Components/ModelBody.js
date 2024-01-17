import React from 'react'


function ModelBody({ id }) {
    let data;
    switch (id) {
        case 1:
            data = <div>
                <ul style={{fontWeight: "medium", fontSize:"x-large"}}>
                    <li>Inauguration</li>
                    <li>Department address by Dean academics, HoD and staff members</li>
                    <li>Grouping of students for various course modules</li>
                    <li>Fundamentals and Instructions for each course </li>
                </ul>
                
            </div>
            break;
        case 2:
            data = <>
            <h2>Introduction to cell Biology</h2>
                <ul style={{fontWeight: "medium", fontSize:"x-large"}}>
                    <li>Blood Smear and Blood group analysis</li>
                    <li>Morphological studies – plant, animal and microorganism</li>
                </ul>
                <div style={{fontWeight: "small", fontSize:"large"}}>
                This course is designed to understand the structural and organizational differences that defines the two major cell types using Light Microscope. This study enhances student’s skills to observe and identify different types of blood cells with accuracy. It also introduces the students the concept of tonicity and its significance in cellular biology
                </div>
                <h2>Biochemical techniques for beginners</h2>
                <ul style={{fontWeight: "medium", fontSize:"x-large"}}>
                    <li>Quantitative analysis of carbohydrates</li>
                    <li>Buffer preparation</li>
                </ul>
                <div style={{fontWeight: "small", fontSize:"large"}}>
                This course is designed to train students with the basic biochemistry laboratory techniques. Biochemistry is a laboratory-based science that brings together biology and chemistry. Students can understand and solve the biological problems by using the knowledge of chemical structure and techniques. Hands on training sessions on various identification tests for carbohydrates will be conducted. Students acquire the skill to distinguish reducing and non-reducing sugars by performing the experiment in the real lab.
                </div>
            </>
            break;
        case 3:
            data = <>
            <h2>Fundamentals of Microbiology</h2>
                <ul style={{fontWeight: "medium", fontSize:"x-large"}}>
                    <li>Microbial staining techniques -Gram Stain, Leishman Stain</li>
                </ul>
                <div style={{fontWeight: "small", fontSize:"large"}}>
                On completion of this course, the students will be able to get knowledge on the Aseptic
Technique in Laboratory Preparation and Analysis, Morphological identification of Microorganisms using staining techniques, knowledge on light microscope handling and usage to understand the cellular properties of stained microbes. 
                </div>
                <h2>Fundamentals of Molecular Biology, Molecular Modelling</h2>
                <ul style={{fontWeight: "medium", fontSize:"x-large"}}>
                    <li>Isolation of DNA from various sources</li>
                    <li>Sequence analysis</li>
                </ul>
                <div style={{fontWeight: "small", fontSize:"large"}}>
                This course helps to isolate, purify, quantify and analyze the DNA from various sources using agarose gel electrophoresis. It also helps to understand the Fundamental principles involved in creating recombinant DNA, amplifying DNA using PCR techniques and identifying the criminals using forensic sciences.
                </div>
            </>
            break;
        case 4:
            data = <>
            <h2>Design of bioreactors</h2>
                <ul style={{fontWeight: "medium", fontSize:"x-large"}}>
                    <li>Microbial large scale culture techniques – Batch and   fed batch cultivation</li>
                </ul>
                <div style={{fontWeight: "small", fontSize:"large"}}>
                This session helps students to gain insights into various bioreactors design and operation. The students can observe the working of bioreactors. At the end of this session, students would have learned about the various bioreactor configurations and their application in biotechnology industries.
                </div>
                <h2>Bio separation Techniques</h2>
                <ul style={{fontWeight: "medium", fontSize:"x-large"}}>
                    <li>Centrifugation, Chromatography</li>
                    <li>Cell disruption – Ultrasonication</li>
                </ul>
                <div style={{fontWeight: "small", fontSize:"large"}}>
                This training helps students to gain Knowledge on Preservation of fruits and vegetables Freeze drying, Isolation of cells from fermentation culture, Separation of protein from egg white, Purification of proteins for therapeutic applications and Bio products release using cell disruption techniques
                </div>
            </>
            break;
        case 5:
            data = <>
            <h2>Project and Model expo</h2>
                <ul style={{fontWeight: "medium", fontSize:"x-large"}}>
                    <li>Project Expo</li>
                    <li>Prize Distribution</li>
                    <li>Vote of thanks </li>
                </ul>
                <div style={{fontWeight: "small", fontSize:"large"}}>
                Bioinformatics is mainly used to extract knowledge from biological data through the
development of algorithms and software. In the school program training will be provided in the following area. Introduction to biological sequences. Biological databases, Sequence analysis, Protein structure modelling, Primary and secondary structure analysis of a protein and Visualization of 3-D structure of a protein.
                </div>
            </>
            break;
    }

    return (
        data 
    );
}

export default ModelBody