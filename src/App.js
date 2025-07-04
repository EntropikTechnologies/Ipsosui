import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Info, RotateCcw  } from 'lucide-react';

const SurveyForm = () => {
  const [currentPage, setCurrentPage] = useState(1);

 
  const initialFormData = {
    email: '',
    eventNumber: '',
    jobNumber: '00-000000-00-00',
    country: 'Please select',
    language: 'Please select',
    testCells: 'Please select',
    category: 'Durables',
    cells: Array(6).fill({
      adEnvironment: '',
      adUnit: '',
      adFileType: '',
      surveyDevice: '',
      adForm: '',
      adWebsite: ''
    }),
    questions: {
      womenPresent: ['', '', ''],
      menPresent: ['', '', ''],
      creativeAdvertising: ['', '', '']
    }
  };
  
  const [formData, setFormData] = useState({
    email: '',
    eventNumber: '',
    jobNumber: '00-000000-00-00',
    country: 'Please select',
    language: 'Please select',
    testCells: 'Please select',
    category: 'Durables',
    cells: [
      {
        adEnvironment: '',
        adUnit: '',
        adFileType: '',
        surveyDevice: '',
        adForm: '',
        adWebsite: ''
      },
      {
        adEnvironment: '',
        adUnit: '',
        adFileType: '',
        surveyDevice: '',
        adForm: '',
        adWebsite: ''
      },
      {
        adEnvironment: '',
        adUnit: '',
        adFileType: '',
        surveyDevice: '',
        adForm: '',
        adWebsite: ''
      },
      {
        adEnvironment: '',
        adUnit: '',
        adFileType: '',
        surveyDevice: '',
        adForm: '',
        adWebsite: ''
      },
      {
        adEnvironment: '',
        adUnit: '',
        adFileType: '',
        surveyDevice: '',
        adForm: '',
        adWebsite: ''
      },
      {
        adEnvironment: '',
        adUnit: '',
        adFileType: '',
        surveyDevice: '',
        adForm: '',
        adWebsite: ''
      }
    ],
    questions: {
      womenPresent: ['', '', ''],
      menPresent: ['', '', ''],
      creativeAdvertising: ['', '', '']
    }
  });

  const adUnitOptionsMap = {
    'Instagram': ['Reels', 'Feed'],
    'Facebook': ['Reels', 'Feed'],
    'Tiktok': ['Stories'],
    'Youtube': ['Stories'], // Matches the <option value="Youtube">
    'linkedln': ['Videos'], // Matches the <option value="linkedln">
    'Douyin': ['Stories']
  };

  const handleInputChange = (field, value, index = null) => {
    if (index !== null && field === 'questions') {
      setFormData(prev => ({
        ...prev,
        questions: {
          ...prev.questions,
          [value.key]: prev.questions[value.key].map((item, i) => i === index ? value.val : item)
        }
      }));
    } else if (index !== null) {
      setFormData(prev => ({
        ...prev,
        [field]: prev[field].map((item, i) => i === index ? value : item)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleCellChange = (cellIndex, field, value) => {
    setFormData(prev => ({
      ...prev,
      cells: prev.cells.map((cell, i) => {
        if (i === cellIndex) {
          const updatedCell = { ...cell, [field]: value }
          if (field === 'adEnvironment') {
            switch (value) {
              case 'Facebook':
                updatedCell.adWebsite = 'https://www.facebook.com';
                
                break;
              case 'Instagram':
                updatedCell.adWebsite = 'https://www.instagram.com';
               
                break;
              case 'Tiktok':
                updatedCell.adWebsite = 'https://qa.studyview.getdecode.io/v1/study/in/94cdc252-4efa-4a0b-aff4-8d7378a979b4/d235122d-05ce-4324-a828-194d77a10ea2';
                break;
              case 'linkedln':
                updatedCell.adWebsite = 'https://qa.studyview.getdecode.io/v1/study/in/94cdc252-4efa-4a0b-aff4-8d7378a979b4/bec4f4b4-bb95-4927-9994-c93d493d1eec';
                break;
              case 'Youtube':
                updatedCell.adWebsite = 'https://qa.studyview.getdecode.io/v1/study/in/94cdc252-4efa-4a0b-aff4-8d7378a979b4/4678b335-755c-4b4c-a6c3-7087af00d19a';
                break;
              case 'Douyin':
                updatedCell.adWebsite = 'https://qa.studyview.getdecode.io/v1/study/in/94cdc252-4efa-4a0b-aff4-8d7378a979b4/eea04fd1-e4ca-462b-9f3e-3afd69310f4d';
                break;
              default:
                updatedCell.adWebsite = '';
            }
          }
          if (field === 'adUnit') {
            const currentAdEnvironment = updatedCell.adEnvironment;
            switch (value) {
              case 'Reels' :
                if (currentAdEnvironment === 'Facebook') {
                  updatedCell.adWebsite = 'https://qa.studyview.getdecode.io/v1/study/in/94cdc252-4efa-4a0b-aff4-8d7378a979b4/63b1c96e-5279-4d4c-a895-38b0b54493de';
                } else {
                  updatedCell.adWebsite = 'https://qa.studyview.getdecode.io/v1/study/in/94cdc252-4efa-4a0b-aff4-8d7378a979b4/eea4e1a9-f7a7-4bff-8539-e2970b429a62';
                }
               break;
              case 'Feed':
                if (currentAdEnvironment === 'Facebook') {
                 updatedCell.adWebsite = 'https://qa.studyview.getdecode.io/v1/study/in/94cdc252-4efa-4a0b-aff4-8d7378a979b4/07b643d3-a5f6-4051-b5d8-16da710b301f';
                } else {
                  updatedCell.adWebsite = 'https://qa.studyview.getdecode.io/v1/study/in/94cdc252-4efa-4a0b-aff4-8d7378a979b4/f5050210-5540-4656-b1c5-60a52e55a352';
                }
                break;
            }
          }
          return updatedCell;
        }
        return cell;
      })
    }));
  };

  const nextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    } else {
      console.log('Form Submitted', formData);
      alert('Form Submitted! Check console for data.');
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //Reset
  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all fields in the form? This action cannot be undone.')) {
      setFormData(initialFormData);
    }
  };

  const renderPage1 = () => (
    <div className="compact-page-container">
      <h2 className="compact-title">Project Information</h2>

      <div className="compact-grid-cols-2">
        <div>
          <label htmlFor="email" className="compact-label-style">
            Your Email Address
          </label>
          <div className="compact-relative-container">
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="compact-input-field"
            />
            {/* <Info className="compact-info-icon" /> */}
        
          </div>
        </div>

        <div>
          <label htmlFor="eventNumber" className="compact-label-style">
            Event Number
          </label>
          <div className="compact-relative-container">
            <input
              id="eventNumber"
              type="text"
              value={formData.eventNumber}
              onChange={(e) => handleInputChange('eventNumber', e.target.value)}
              className="compact-input-field"
            />
            <Info className="compact-info-icon" />
          </div>
        </div>

        <div>
          <label htmlFor="jobNumber" className="compact-label-style">
            JB Number
          </label>
          <div className="compact-flex-center-gap">
            <input
              type="text"
              value={formData.jobNumber.split('-')[0]}
              onChange={(e) => {
                const parts = formData.jobNumber.split('-');
                parts[0] = e.target.value;
                handleInputChange('jobNumber', parts.join('-'));
              }}
              className="compact-input-part-field"
            />
            <span>-</span>
            <input
              type="text"
              value={formData.jobNumber.split('-')[1]}
              onChange={(e) => {
                const parts = formData.jobNumber.split('-');
                parts[1] = e.target.value;
                handleInputChange('jobNumber', parts.join('-'));
              }}
              className="compact-input-part-field-medium"
            />
            <span>-</span>
            <input
              type="text"
              value={formData.jobNumber.split('-')[2]}
              onChange={(e) => {
                const parts = formData.jobNumber.split('-');
                parts[2] = e.target.value;
                handleInputChange('jobNumber', parts.join('-'));
              }}
              className="compact-input-part-field"
            />
            <span>-</span>
            <input
              type="text"
              value={formData.jobNumber.split('-')[3]}
              onChange={(e) => {
                const parts = formData.jobNumber.split('-');
                parts[3] = e.target.value;
                handleInputChange('jobNumber', parts.join('-'));
              }}
              className="compact-input-part-field"
            />
            <Info className="compact-info-icon-small" />
          </div>
        </div>

        <div>
          <label htmlFor="country" className="compact-label-style">
            Country of field
          </label>
          <select
            id="country"
            value={formData.country}
            onChange={(e) => handleInputChange('country', e.target.value)}
            className="compact-select-field"
          >
            <option value="Please select">Select...</option>
            <option value="US">US</option>
            <option value="UK">UK</option>
            <option value="CA">CA</option>
            <option value="AU">AU</option>
          </select>
        </div>

        <div>
          <label htmlFor="language" className="compact-label-style">
            Language
          </label>
          <select
            id="language"
            value={formData.language}
            onChange={(e) => handleInputChange('language', e.target.value)}
            className="compact-select-field"
          >
            <option value="Please select">Select...</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>

        <div>
          <label htmlFor="testCells" className="compact-label-style">
            # of Test Cells
          </label>
          <select
            id="testCells"
            value={formData.testCells}
            onChange={(e) => handleInputChange('testCells', e.target.value)}
            className="compact-select-field"
          >
            <option value="Please select">Select...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </div>
  );
  const renderPage2 = () => (
    <div className="compact-page-container">
      <div className="compact-center-content">
        <label htmlFor="category" className="compact-label-style">
          Category
        </label>
        <select
          id="category"
          value={formData.category}
          onChange={(e) => handleInputChange('category', e.target.value)}
          className="compact-select-field-large"
        >
          <option value="">Select...</option>
          <option value="Durables">Durables</option>
          <option value="FMCG">FMCG</option>
          <option value="Services">Services</option>
        </select>
      </div>

      <div className="compact-table-container">
        <table className="compact-table">
          <thead className="compact-table-header-bg">
            <tr>
              <th scope="col" className="compact-table-th compact-text-center">Cell</th>
              <th scope="col" className="compact-table-th">Ad Environment</th>
              <th scope="col" className="compact-table-th">Ad Unit</th>
              <th scope="col" className="compact-table-th">Ad File Type</th>
              <th scope="col" className="compact-table-th">Survey Device</th>
              <th scope="col" className="compact-table-th">Ad Form</th>
              <th scope="col" className="compact-table-th">Ad Website</th>
            </tr>
          </thead>
          <tbody className="compact-table-body-bg">
            {formData.cells.map((cell, index) => (
              <tr key={index}>
                <td className="compact-table-td compact-font-medium">{index + 1}</td>
                <td className="compact-table-td">
                  <select
                    value={cell.adEnvironment}
                    onChange={(e) => handleCellChange(index, 'adEnvironment', e.target.value)}
                    className="compact-select-field-small"
                  >
                    <option value="">Select...</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Tiktok">Tiktok</option>
                    <option value="linkedln">Linkedln</option>
                    <option value="Youtube">Youtube</option>
                    <option value="Douyin">Douyin</option>
                  </select>
                </td>
                <td className="compact-table-td">
                  <select
                    value={cell.adUnit}
                    onChange={(e) => handleCellChange(index, 'adUnit', e.target.value)}
                    className="compact-select-field-small"
                  >
                    <option value="">Select...</option>
                     {(adUnitOptionsMap[cell.adEnvironment] || []).map(unit => (
                      <option key={unit} value={unit}>{unit}</option>
                     ))}
                    {/* {cell.adEnvironment === 'linkedln' ? (
                    <option value="Videos">Videos</option>
                    ) : (
                    <>
                    <option value="Reels">Reels</option>
                    <option value="Feed">Feed</option>
                    </>
                    )} */}
                  </select>
                </td>
                <td className="compact-table-td">
                  <select
                    value={cell.adFileType}
                    onChange={(e) => handleCellChange(index, 'adFileType', e.target.value)}
                    className="compact-select-field-small"
                  >
                    <option value="">Select...</option>
                    <option value="Display (Animated)">Display (Animated)</option>
                    <option value="Video">Video</option>
                    <option value="Display (Static)">Display (Static)</option>
                  </select>
                </td>
                <td className="compact-table-td">
                  <select
                    value={cell.surveyDevice}
                    onChange={(e) => handleCellChange(index, 'surveyDevice', e.target.value)}
                    className="compact-select-field-small"
                  >
                    <option value="">Select...</option>
                    <option value="Smartphone">Smartphone</option>
                    <option value="Desktop">Desktop</option>
                    <option value="Tablet">Tablet</option>
                  </select>
                </td>
                <td className="compact-table-td">
                  <select
                    value={cell.adForm}
                    onChange={(e) => handleCellChange(index, 'adForm', e.target.value)}
                    className="compact-select-field-small"
                  >
                    <option value="">Select...</option>
                    <option value="Finished">Finished</option>
                    <option value="Draft">Draft</option>
                    <option value="Pending">Pending</option>
                  </select>
                </td>
                <td className="compact-table-td">
                  {cell.adWebsite ? (
                    <a href={cell.c} target="_blank" rel="noopener noreferrer" className="compact-link">
                      Link
                    </a>
                  ) : (
                    'N/A'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="compact-questions-section">
        <div className="compact-question-text">
          <p className="compact-font-bold">1) Are women present in (any of) the creative(s) tested in this project? If so, in which cell(s)?</p>
          <p className="compact-font-bold">2) Are men present in (any of) the creative(s) tested in this project? If so, in which cell(s)?</p>
          <p className="compact-font-bold">3) Advertised product/brand is any of Alcohol, Tobacco, Tobacco alternatives, Electronic cigarettes?</p>
        </div>

        <div className="compact-table-container">
          <table className="compact-table">
            <thead className="compact-table-header-bg">
              <tr>
                <th scope="col" className="compact-table-th">Cell</th>
                <th scope="col" className="compact-table-th">Women present?</th>
                <th scope="col" className="compact-table-th">Men present?</th>
                <th scope="col" className="compact-table-th">Advertising Alcohol/Tobacco etc.?</th>
              </tr>
            </thead>
            <tbody className="compact-table-body-bg">
              {[1, 2, 3].map((cellNum, index) => (
                <tr key={index}>
                  <td className="compact-table-td compact-font-medium">{cellNum}</td>
                  <td className="compact-table-td">
                    <select
                      value={formData.questions.womenPresent[index]}
                      onChange={(e) => handleInputChange('questions', { key: 'womenPresent', val: e.target.value }, index)}
                      className="compact-select-field-small"
                    >
                      <option value="">Select...</option>
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </td>
                  <td className="compact-table-td">
                    <select
                      value={formData.questions.menPresent[index]}
                      onChange={(e) => handleInputChange('questions', { key: 'menPresent', val: e.target.value }, index)}
                      className="compact-select-field-small"
                    >
                      <option value="">Select...</option>
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </td>
                  <td className="compact-table-td">
                    <select
                      value={formData.questions.creativeAdvertising[index]}
                      onChange={(e) => handleInputChange('questions', { key: 'creativeAdvertising', val: e.target.value }, index)}
                      className="compact-select-field-small"
                    >
                      <option value="">Select...</option>
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderPage3 = () => (
    <div className="compact-page-container">
      <h2 className="compact-title">Summary</h2>
      <p className="compact-text-gray">Please review your entries before submitting.</p>

      <div className="compact-summary-section">
        <h3 className="compact-summary-heading">Project Information</h3>
        <div className="compact-summary-grid">
          <div><strong>Your Email Address:</strong> {formData.email || 'N/A'}</div>
          <div><strong>Event Number:</strong> {formData.eventNumber || 'N/A'}</div>
          <div><strong>JB Number:</strong> {formData.jobNumber || 'N/A'}</div>
          <div><strong>Country of field:</strong> {formData.country || 'N/A'}</div>
          <div><strong>Language:</strong> {formData.language || 'N/A'}</div>
          <div><strong># of Test Cells:</strong> {formData.testCells || 'N/A'}</div>
        </div>
      </div>

      <div className="compact-summary-section">
        <h3 className="compact-summary-heading">Cell Details</h3>
        <p className="compact-text-gray"><strong>Category:</strong> {formData.category || 'N/A'}</p>
        <div className="compact-table-container">
          <table className="compact-table">
            <thead className="compact-table-header-bg-light">
              <tr>
                <th scope="col" className="compact-table-th compact-text-center">Cell</th>
                <th scope="col" className="compact-table-th">Ad Environment</th>
                <th scope="col" className="compact-table-th">Ad Unit</th>
                <th scope="col" className="compact-table-th">Ad File Type</th>
                <th scope="col" className="compact-table-th">Survey Device</th>
                <th scope="col" className="compact-table-th">Ad Form</th>
                <th scope="col" className="compact-table-th">Ad Website</th>
              </tr>
            </thead>
            <tbody className="compact-table-body-bg">
              {formData.cells.map((cell, index) => (
                <tr key={index}>
                  <td className="compact-table-td compact-text-center compact-font-medium">{index + 1}</td>
                  <td className="compact-table-td">{cell.adEnvironment || 'N/A'}</td>
                  <td className="compact-table-td">{cell.adUnit || 'N/A'}</td>
                  <td className="compact-table-td">{cell.adFileType || 'N/A'}</td>
                  <td className="compact-table-td">{cell.surveyDevice || 'N/A'}</td>
                  <td className="compact-table-td">{cell.adForm || 'N/A'}</td>
                  <td className="compact-table-td">
                    {cell.adWebsite ? (
                      <a href={cell.adWebsite} target="_blank" rel="noopener noreferrer" className="compact-link">
                        Link
                      </a>
                    ) : (
                      'N/A'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="compact-summary-section">
        <h3 className="compact-summary-heading">Additional Questions</h3>
        <div className="compact-table-container">
          <table className="compact-table">
            <thead className="compact-table-header-bg-light">
              <tr>
                <th scope="col" className="compact-table-th">Cell</th>
                <th scope="col" className="compact-table-th">Women present?</th>
                <th scope="col" className="compact-table-th">Men present?</th>
                <th scope="col" className="compact-table-th">Advertising Alcohol/Tobacco etc.?</th>
              </tr>
            </thead>
            <tbody className="compact-table-body-bg">
              {[1, 2, 3].map((cellNum, index) => (
                <tr key={index}>
                  <td className="compact-table-td compact-font-medium">{cellNum}</td>
                  <td className="compact-table-td">{formData.questions.womenPresent[index] || 'N/A'}</td>
                  <td className="compact-table-td">{formData.questions.menPresent[index] || 'N/A'}</td>
                  <td className="compact-table-td">{formData.questions.creativeAdvertising[index] || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      <style>
        {`
        body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          overflow-x: hidden; 
        }

        .app-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f3f4f6;
          padding: 0.5rem;
        }

        .main-card {
          max-width: 900px;
          width: 100%;
          background-color: #fff;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          padding: 1.5rem;
          box-sizing: border-box;
          display: flex; 
          flex-direction: column; 
        }

        .compact-page-container {
          padding: 0.5rem 0;
          flex-grow: 1; 
        }

        .compact-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .compact-label-style {
          display: block;
          font-size: 0.75rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.125rem;
        }

        .compact-relative-container {
          position: relative;
          width: 394px;
          height: 20px;
        }

        .compact-input-field,
        .compact-select-field {
          width: 100%;
          padding: 0.375rem 0.625rem;
          border: 1px solid #d1d5db;
          border-radius: 0.25rem;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          outline: none;
          font-size: 0.875rem;
        }

        .compact-input-field:focus,
        .compact-select-field:focus,
        .compact-select-field-large:focus,
        .compact-input-part-field:focus,
        .compact-input-part-field-medium:focus,
        .compact-select-field-small:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }

        .compact-info-icon {
          position: absolute;
          right: 0.5rem;
          top: 50%;
          transform: translateY(-50%);
          height: 0.875rem;
          width: 0.875rem;
          color: #9ca3af;
        }

        .compact-grid-cols-2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .compact-grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem 1.5rem;
          }
        }

        .compact-flex-center-gap {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .compact-input-part-field,
        .compact-input-part-field-medium {
          padding: 0.375rem 0.25rem;
          border: 1px solid #d1d5db;
          border-radius: 0.25rem;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          outline: none;
          text-align: center;
          font-size: 0.875rem;
          flex-shrink: 0; 
        }

        .compact-input-part-field {
          width: 3.5rem;
        }

        .compact-input-part-field-medium {
          width: 4.5rem;
        }

        .compact-info-icon-small {
          height: 0.8rem;
          width: 0.8rem;
          color: #9ca3af;
          margin-left: 0.125rem;
          flex-shrink: 0;
        }

        .compact-center-content {
          text-align: center;
          margin-bottom: 1rem;
        }

        .compact-select-field-large {
          width: 12rem;
          padding: 0.375rem 0.625rem;
          border: 1px solid #d1d5db;
          border-radius: 0.25rem;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          outline: none;
          font-size: 0.875rem;
          max-width: 100%; 
        }

        .compact-table-container {
          overflow-x: auto; 
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          border-radius: 0.375rem;
          border: 1px solid #e5e7eb;
          margin-top: 1rem;
        }

        .compact-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px; 
        }

        .compact-table-header-bg {
          background-color: #f9fafb;
        }

        .compact-table-th {
          padding: 0.5rem 0.75rem;
          text-align: left;
          font-size: 0.625rem; 
          font-weight: 500;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid #e5e7eb;
        }

        .compact-table-th.compact-text-center {
            text-align: center;
        }

        .compact-table-body-bg {
          background-color: #fff;
        }

        .compact-table tbody tr {
            border-bottom: 1px solid #e5e7eb;
        }
        .compact-table tbody tr:last-child {
            border-bottom: none;
        }


        .compact-table-td {
          padding: 0.5rem 0.75rem;
          white-space: nowrap; 
          font-size: 0.75rem;
          color: #374151;
        }

        .compact-font-medium {
          font-weight: 500;
          color: #111827;
        }

        .compact-select-field-small {
          width: 100%;
          padding: 0.25rem 0.375rem;
          border: 1px solid #d1d5db;
          border-radius: 0.25rem;
          outline: none;
          font-size: 0.75rem; 
        }

        .compact-questions-section {
          margin-top: 1.5rem;
        }

        .compact-question-text {
          font-size: 0.75rem;
          color: #374151;
          margin-bottom: 0.75rem;
        }

        .compact-question-text p {
          margin-bottom: 0.25rem;
        }

        .compact-font-bold {
          font-weight: 600;
        }

        .compact-text-gray {
          color: #4b5563;
          font-size: 0.875rem;
          text-align: center;
          margin-bottom: 1rem;
        }

        .compact-summary-section {
          background-color: #f9fafb;
          padding: 1rem;
          border-radius: 0.375rem;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          margin-top: 1rem;
        }

        .compact-summary-heading {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .compact-summary-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: #374151;
        }

        @media (min-width: 640px) {
            .compact-summary-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }


        .compact-table-header-bg-light {
          background-color: #f3f4f6;
        }

        .navigation-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
          flex-shrink: 0; 
        }

        .navigation-center-group {
          display: flex;
           align-items: center;
          gap: 1rem; /* Adjust the space between the reset button and page indicator */
}

        .nav-button {
          display: flex;
          align-items: center;
          padding: 0.375rem 0.875rem;
          border-radius: 0.25rem;
          font-weight: 500;
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
          font-size: 0.875rem;
        }

        .nav-button.previous {
          background-color: #e5e7eb;
          color: #374151;
        }

        .nav-button.previous:hover:not(:disabled) {
          background-color: #d1d5db;
        }

        .nav-button.previous:disabled {
          background-color: #f3f4f6;
          color: #9ca3af;
          cursor: not-allowed;
        }

        .nav-button.next {
          background-color:rgb(71, 106, 180);
          color: #fff;
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }

        .nav-button.next:hover {
          background-color: #1d4ed8;
        }

        .nav-button.reset {
          background-color:rgb(175, 132, 85);
          color: #fff;
          padding-left: 1.25rem;
          padding-right: 1.25rem;
          }

          .nav-button.reset:hover {
            background-color:rgb(241, 126, 4);
          }

        .nav-button.submit {
          background-color: #16a34a;
          color: #fff;
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }

        .nav-button.submit:hover {
          background-color: #15803d;
        }

        .nav-icon {
          width: 0.875rem;
          height: 0.875rem;
        }

        .nav-icon.left {
          margin-right: 0.375rem;
        }

        .nav-icon.right {
          margin-left: 0.375rem;
        }

        .nav-icon.center {
          //margin-right: 0.375rem;
          text-align: center;
        }

        .page-indicator {
          font-size: 0.75rem;
          color: #4b5563;
        }

        .privacy-policy {
          text-align: center;
          margin-top: 1rem;
          flex-shrink: 0; 
        }

        .privacy-policy-link {
          font-size: 0.75rem;
          color: #2563eb;
          text-decoration: none;
        }

        .privacy-policy-link:hover {
          text-decoration: underline;
        }
        .compact-link {
            color: #2563eb;
            text-decoration: none;
            font-weight: 500;
        }

        .compact-link:hover {
            text-decoration: underline;
        }
        `}
      </style>

      <div className="main-card">
        <div className="content-card">
          {currentPage === 1 && renderPage1()}
          {currentPage === 2 && renderPage2()}
          {currentPage === 3 && renderPage3()}
        </div>

        <div className="navigation-container">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`nav-button previous ${currentPage === 1 ? 'nav-button-disabled' : ''}`}
          >
            <ChevronLeft className="nav-icon left" />
            Previous
          </button>
          
          <div className="navigation-center-group">
          {currentPage < 3 && (
            <button
              onClick={handleReset}
              className="nav-button reset"
            >
              <RotateCcw className="nav-icon center" />
              Reset
            </button>
          )}
        
          <div className="page-indicator">
            Page {currentPage} of 3
          </div>
          </div>

          <button
            onClick={nextPage}
            className={`nav-button ${currentPage === 3 ? 'submit' : 'next'}`}
          >
            {currentPage === 3 ? 'Submit' : (currentPage === 2 ? 'Review' : 'Next')}
            {currentPage !== 3 && <ChevronRight className="nav-icon right" />}
          </button>
        </div>

        {currentPage === 1 && (
          <div className="privacy-policy">
            <a href="#" className="privacy-policy-link">
              Privacy policy
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SurveyForm;