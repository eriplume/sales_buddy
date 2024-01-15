"use client"
import { useState } from 'react';
import CopyActionButton from "../../../components/ui/CopyActionButton"
import EditActionIcon from "../../../components/ui/EditActionIcon";
import Content from './ReportContent';
import EditReportForm from './EditReportForm';

type SummaryContentProps = {
  content: string;
  id: number;
};

export default function SummaryContent({content, id}: SummaryContentProps) {
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
      <Content content={content}/>
    </div>
  )
}
