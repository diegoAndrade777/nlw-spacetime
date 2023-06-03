import Image from 'next/image'
import React from 'react'

import loadingImage from '../assets/loading.gif'

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden bg-transparent bg-cover bg-center bg-no-repeat">
      <Image
        src={loadingImage}
        width={500}
        height={500}
        quality={100}
        alt="loading"
      />
    </div>
  )
}

export default Loading
