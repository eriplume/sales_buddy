type ReportContentProps = {
  content: string;
}

export default function ReportContent({content} : ReportContentProps) {
  return (
    <div className="p-4 bg-white rounded-sm">
      <div className='text-sm md:text-md'>{content}</div>
    </div>
  )
}