import { api } from '@/lib/api'
import React from 'react'
import { cookies } from 'next/headers'
import Image from 'next/image'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'

import Action from '@/components/Action'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

dayjs.locale(ptBR)

interface Memory {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
  content: string
}

export default async function MemoryDetails({ params }: any) {
  const memoryId = params.id

  const token = cookies().get('token')?.value

  const response = await api.get(`/memories/${memoryId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memory: Memory = response.data

  return (
    <>
      <div className="flex flex-col p-8">
        <Link
          href="/"
          className="flex items-center gap-1 pb-4 text-sm text-gray-200 hover:text-gray-100"
        >
          <ChevronLeft className="h-4 w-4" />
          voltar à timeline
        </Link>
        <div
          key={memory.id}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
            {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
          </time>
          <Image
            src={memory.coverUrl}
            alt=""
            width={592}
            height={280}
            className="aspect-video w-full rounded-lg object-cover"
          />
          <p className="text-lg leading-relaxed text-gray-100">
            {memory.content}
          </p>
        </div>

        <Action route="memories" param={memoryId} token={token} data={memory} />
      </div>
    </>
  )
}
