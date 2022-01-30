import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import './AnswerReport.scss'


const AnswerReport = ({
    setOpenReport
}) => {

    return (
        <div className="answer-report">
           <p>Report the question?</p>
           <Button>Report</Button>
           <Button onClick={()=>setOpenReport(false)}>Cancel</Button>
        </div>
    )
}

export default AnswerReport