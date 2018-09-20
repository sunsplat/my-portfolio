import React, { Component } from "react";
import { Page, Document } from 'react-pdf';
import ResumePdf from '../media/ESun_Resume_2018.pdf';
import '../css/resume.css';

export default class Resume extends Component {
    state = {
    numPages: null,
    pageNumber: 1,
  }

  previousPage() {
      this.setState({ pageNumber: this.state.pageNumber - 1 });
  }

  nextPage() {
      this.setState({ pageNumber: this.state.pageNumber + 1 });
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className="resume">
        <Document
          file={ResumePdf}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div>
            <button onClick={() => this.previousPage()}>&larr;</button>
            &nbsp; Page {pageNumber} of {numPages} &nbsp;
            <button onClick={() => this.nextPage()}>&rarr;</button>
        </div>
      </div>
    );
  }
  //   // ({ loaded, total }) => alert('Loading a document: ' + (loaded / total) * 100 + '%');
  // render() {
  //   return (
  //       <div>
  //           <Document file={Resume2018}/>
  //       </div>
  //   );
  // }
}
