"use client"
import { useState } from 'react';
import CopyActionButton from "../../ui/CopyActionButton"
import EditActionIcon from "../../ui/EditActionIcon";
import ReportContent from './ReportContent';
import EditReportForm from './EditReportForm';

type SummaryContentProps = {
  content: string;
  id: number;
}

export default function SummaryContentArea({content, id} :  SummaryContentProps) {
  const [ edit, setEdit ] = useState(false);

  return edit ? (
    <div className='flex flex-col'>
      <EditReportForm content={content} edit={edit} setEdit={setEdit} id={id}/>
    </div>
  ) : (
    <div className='flex flex-col'>
      <div className='flex justify-end items-center pr-2 pb-2'>
        <CopyActionButton value={content}/>
        <EditActionIcon edit={edit} setEdit={setEdit}/>
      </div>
      <ReportContent content={content}/>
    </div>
  )
}
