"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { showErrorNotification, showSuccessNotification } from '@/utils/notifications';
import { Table, NativeSelect } from '@mantine/core';
import EditIcon from './EditIcon';

type User = {
  id: number;
  name: string;
  groupId: number;
  roleValue: number;
}

export default function UsersTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [value, setValue] = useState('');

  const roleToLabels: { [key: number]: string } = {
    0: 'general',
    1: 'leader',
    2: 'admin'
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch(`/features/admin/api/users`);
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers()
  }, []);

  const handleUpdate = async(value: string) => {
    if (value) {
      try {
        await axios.patch(`/features/admin/api/users/${editingId}`, {
          user: {
            role: Number(value)
          },
        });
        showSuccessNotification(`更新しました`);
        fetchUsers()
        setEditingId(null)
      } catch (error) {
        showErrorNotification('更新に失敗しました');
      }
    };
  }
  
  const rows = users && users.map((user) => (
    <Table.Tr key={user.id}>
      <Table.Td>{user.id}</Table.Td>
      <Table.Td>{user.name}</Table.Td>
      <Table.Td>{user.groupId}</Table.Td>
      {editingId === user.id?
        <Table.Td>
          <NativeSelect
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            data={[
              { label: 'general', value: '0' },
              { label: 'leader', value: '1' },
              { label: 'admin', value: '2' },
            ]}
          />
        </Table.Td>
      :
        <Table.Td>{roleToLabels[user.roleValue]}</Table.Td>
      }
      <Table.Td>
        <EditIcon 
          editingId={editingId} 
          setEditingId={setEditingId} 
          userId={user.id} 
          handleUpdate={handleUpdate}
          value={value}
          /></Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>id</Table.Th>
          <Table.Th>name</Table.Th>
          <Table.Th>team</Table.Th>
          <Table.Th>role</Table.Th>
          <Table.Th>edit</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}