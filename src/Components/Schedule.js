import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModelBody from "./ModelBody";

const modalData = [
  { id: 1, heading: 'Biotechnology workshop and orientation', content: '' },
  { id: 2, heading: 'Biochemistry', content: ''  },
  { id: 3, heading: 'Microbiology, Molecular Biology, Molecular modeling', content: ''  },
  { id: 4, heading: 'Bioreactors, Bio Seperators', content: ''  },
  { id: 5, heading: 'Project and model expo', content: ''  },
]


const Schedule = () => {
  const ModalComponent = ({ id, heading, onHide, children }) => {
  
    return (
      <Modal
        show={id === showModalId}
        onHide={onHide}
        size="lg"
        aria-labelledby={`contained-modal-title-vcenter-${id}`}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id={`contained-modal-title-vcenter-${id}`}>
            {heading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    );
  };
  const tableData = [
    { id: 1, col1: 'Day 1', col2: '<h4>Biotechnology workshop and orientation</h4>', col3: 'Value 1' },
    { id: 2, col1: 'Day 2', col2: '<h4>Introduction to cell Biology <br/> Biochemical techniques for beginners</h4>', col3: 'Value 2' },
    { id: 3, col1: 'Day 3', col2: '<h4>Fundamentals of Microbiology <br/> Fundamentals of Molecular Biology, Molecular Modelling</h4>', col3: 'Value 3' },
    { id: 4, col1: 'Day 4', col2: '<h4>Design of bioreactors <br/> Bio separation Techniques</h4>', col3: 'Value 4' },
    { id: 5, col1: 'Day 5', col2: '<h4>Project and Model expo</h4>', col3: 'Value 5' },
  ];

  const [showModalId, setShowModalId] = useState(null);

  const handleModalShow = (id) => {
    setShowModalId(id);
  };

  const handleModalHide = () => {
    setShowModalId(null);
  };

  return (
    <div className="schedule-container" style={{ padding: "0px", marginTop: '10vh', textAlign: 'center', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px', padding: '2vh', background: '#fafafa' }}>
      <table className="table table-hover table-borderless table-lg">
        <thead >
          <tr className="table-dark">
            <td colSpan={2}>
              <h2 style={{ fontSize: '3rem' }}>Syllabus</h2>
            </td>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id} className="table-row" style={{ cursor: "pointer" }} onClick={() => handleModalShow(row.id)}>
              <td><h4>{row.col1}</h4></td>
              <td dangerouslySetInnerHTML={{ __html: row.col2 }} />
            </tr>
          ))}
        </tbody>
      </table>
      
      {modalData.map((modal) => (
        <ModalComponent key={modal.id} id={modal.id} heading={modal.heading} onHide={handleModalHide}>
          {/* Modal Body content goes here */}
          <ModelBody id={modal.id}/>
        </ModalComponent>
      ))}
    </div>
  );
};

export default Schedule;
