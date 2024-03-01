"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { showErrorNotification, showSuccessNotification } from '@/utils/notifications';
import { Table } from '@mantine/core';
import DeleteIcon from './DeleteIcon';
import { formatDate } from '@/utils/dateUtils';
import { WeeklyReport } from '../types';
import { UserIcon } from '@heroicons/react/24/outline';

export default function WeeklyReportsTable() {
  const [reports, setReports] = useState<WeeklyReport[]>([]);
  const fetchReports = async () => {
    try {
      const response = await fetch(`/features/admin/api/weeklyReports`);
      const data = await response.json();
      setReports(data.weekly_reports);
    } catch (error) {
      console.error(error);
    }
  };
    
  useEffect(() => {
    fetchReports()
  }, []);
  
  const handleDelete = async(id: number) => {
    const isConfirmed = confirm("削除しますか？");
    if (!isConfirmed) {
      return;
    }
    try {
      await axios.delete(`/features/admin/api/weeklyReports/${id}`);
      showSuccessNotification(`削除しました`);
      fetchReports()
    } catch (error) {
      showErrorNotification('削除に失敗しました。');
    }
  };
    
  const rows = reports && reports.map((report) => (
    <Table.Tr key={report.id}>
      <Table.Td>{report.id}</Table.Td>
      <Table.Td>{formatDate(report.startDate)}</Table.Td>
      <Table.Td>{formatDate(report.endDate)}</Table.Td>
      <Table.Td>{report.content}</Table.Td>
      <Table.Td>{report.userId}</Table.Td>
      <Table.Td><DeleteIcon id={report.id} handleDelete={handleDelete}/></Table.Td>
    </Table.Tr>
  ));
  
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>id</Table.Th>
          <Table.Th>開始日</Table.Th>
          <Table.Th>終了日</Table.Th>
          <Table.Th>コンテンツ</Table.Th>
          <Table.Th><UserIcon className='w-5 h-5'/></Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

