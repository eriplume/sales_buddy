"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { showErrorNotification, showSuccessNotification } from '@/utils/notifications';
import { Table, TextInput } from '@mantine/core';
import EditIcon from './EditIcon';
import { CustomerType } from '../types';

export default function CustomersTable() {
  const [customerTypes, setCustomerTypes] = useState<CustomerType[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [value, setValue] = useState('');

  const fetchCustomerTypes = async () => {
    try {
      const response = await fetch(`/features/admin/api/customerTypes`);
      const data = await response.json();
      setCustomerTypes(data.customer_types);
    } catch (error) {
      console.error(error);
    }
  };
    
  useEffect(() => {
    fetchCustomerTypes()
  }, []);

  const handleUpdate = async(value: string) => {
    if (value) {
      try {
        await axios.patch(`/features/admin/api/customerTypes/${editingId}`, {
          customer_type: {
            name: value
          },
        });
        showSuccessNotification(`更新しました`);
        fetchCustomerTypes();
        setEditingId(null)
      } catch (error) {
        showErrorNotification('更新に失敗しました');
      }
    };
  }
  
  const handleDelete = async(id: number) => {
    const isConfirmed = confirm("削除しますか？");
    if (!isConfirmed) {
      return;
    }
    try {
      await axios.delete(`/features/admin/api/users/${id}`);
      showSuccessNotification(`削除しました`);
      fetchCustomerTypes()
      setEditingId(null)
    } catch (error) {
      showErrorNotification('削除に失敗しました。');
    }
  };

  const handleEdit = (id: number) => {
    const typeToEdit = customerTypes.find(types => types.id === id);
    if (typeToEdit) {
    setValue(typeToEdit.name); 
  }
    setEditingId(id);
  };
  
  const rows = customerTypes && customerTypes.map((type) => (
    <Table.Tr key={type.id}>
      <Table.Td>{type.id}</Table.Td>
        {editingId === type.id?
          <Table.Td className="w-72">
            <TextInput
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
            />
          </Table.Td>
        :
          <Table.Td className="w-72">{type.name}</Table.Td>
        }
      <Table.Td>
        <EditIcon 
          editingId={editingId} 
          setEditingId={setEditingId} 
          id={type.id} 
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          value={value}
          setValue={setValue}
          handleEdit={handleEdit}
        />
      </Table.Td>
    </Table.Tr>
  ));
  
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>id</Table.Th>
          <Table.Th>name</Table.Th>
          <Table.Th>edit</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

