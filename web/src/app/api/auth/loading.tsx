'use client'

import Image from 'next/image'
import React from 'react'

import loadingImage from '../../loading.gif'

function Loading() {
  return (
    <div className="overflow-hidden bg-white bg-cover bg-center bg-no-repeat">
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <Image
          src={loadingImage}
          width={500}
          height={500}
          quality={100}
          alt="loading"
        />
      </div>
    </div>
  )
}

export default Loading
