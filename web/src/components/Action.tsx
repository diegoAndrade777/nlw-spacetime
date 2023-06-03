'use client'

import { api } from '@/lib/api'
import { Edit, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'

import { EditMemoryForm } from '../components/EditMemoryForm'

interface ActionProps {
  route: string
  param: string
  token: string | undefined
  data: {
    id: string
    coverUrl: string
    content: string
    isPublic?: boolean
    excerpt?: string
    createdAt?: string
  }
}

function Action({ route, param, token, data }: ActionProps) {
  const [isEditMode, setIsEditMode] = useState(false)

  const handleDelete = async () => {
    try {
      await api.delete(`/${route}/${param}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      toast.success(
        <div>
          {'Sucesso!'} <br /> {'Memória excluída'}
        </div>,
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        },
      )

      setTimeout(function () {
        window.location.replace('/')
      }, 5000)
    } catch (error: any) {
      toast.error(
        <div>
          {'Falha ao excluir memória!'} <br /> {error.response.data.message}
        </div>,
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        },
      )
    }
  }

  const handleEditMemory = () => {
    setIsEditMode(true)
  }

  const handleConfirm = () => {
    const confirmAction = confirm('Tem certeza que deseja excluir a memória?')
    if (confirmAction) {
      handleDelete()
    } else {
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="flex cursor-pointer flex-row items-end gap-2 pt-3">
        <button
          title="Editar Memória"
          className="inline-block self-end rounded-full bg-orange-500 px-2 py-2 text-white hover:bg-orange-600"
          onClick={handleEditMemory}
        >
          <Edit size={16} />
        </button>

        <button
          title="Excluir Memória"
          className="inline-block self-end rounded-full bg-purple-700 px-2 py-2 text-white hover:bg-purple-800"
          onClick={handleConfirm}
        >
          <Trash2 size={16} />
        </button>
      </div>

      {isEditMode && <EditMemoryForm memoryObject={data} />}
    </>
  )
}

export default Action
