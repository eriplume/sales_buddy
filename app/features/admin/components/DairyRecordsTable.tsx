"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { showErrorNotification, showSuccessNotification } from '@/utils/notifications';
import { Table } from '@mantine/core';
import DeleteIcon from './DeleteIcon';
import { DairyRecord } from '../types';
import { formatDate } from '@/utils/dateUtils';

export default function DairyRecordsTable() {
  const [records, setRecords] = useState<DairyRecord[]>([]);
  const fetchRecords = async () => {
    try {
      const response = await fetch(`/features/admin/api/dairyRecords`);
      const data = await response.json();
      setRecords(data.dairy_records);
    } catch (error) {
      console.error(error);
    }
  };
    
  useEffect(() => {
    fetchRecords()
  }, []);
  
  const handleDelete = async(id: number) => {
    const isConfirmed = confirm("削除しますか？");
    if (!isConfirmed) {
      return;
    }
    try {
      await axios.delete(`/features/admin/api/dairyRecords/${id}`);
      showSuccessNotification(`削除しました`);
      fetchRecords()
    } catch (error) {
      showErrorNotification('削除に失敗しました。');
    }
  };
    
  const rows = records && records.map((record) => (
    <Table.Tr key={record.id}>
      <Table.Td>{record.id}</Table.Td>
      <Table.Td>{record.totalAmount}</Table.Td>
      <Table.Td>{record.totalNumber}</Table.Td>
      <Table.Td>{record.count}</Table.Td>
      <Table.Td>{record.setRate}</Table.Td>
      <Table.Td>{record.averageSpend}</Table.Td>
      <Table.Td>{formatDate(record.date)}</Table.Td>
      <Table.Td>{record.userId}</Table.Td>
      <Table.Td><DeleteIcon id={record.id} handleDelete={handleDelete}/></Table.Td>
    </Table.Tr>
  ));
  
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>id</Table.Th>
          <Table.Th>金額</Table.Th>
          <Table.Th>点数</Table.Th>
          <Table.Th>客数</Table.Th>
          <Table.Th>セット率</Table.Th>
          <Table.Th>客単価</Table.Th>
          <Table.Th>登録日</Table.Th>
          <Table.Th>ユーザー</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

