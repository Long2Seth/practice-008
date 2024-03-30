import React from 'react'
import { ConfirmIcon } from '@/component/Icon/ConfirmIcon'


type Props = {
  params: {
    key: string
  }
  searchParams: any
}

import Style from './style.module.css'
import Button from './component/Button'



export default function ConfirmEmail(props: Props) {
  return (
    <main className={Style.container}>
      <ConfirmIcon color="#080" classname="h-32 w-32 mb-8" />

      <h1 className="text-5xl my-4 font-semibold">Email has been Confirmed!</h1>
     
      <p className="text-2xl my-2">
        Your email has been verified! you can go to login page by press below button!
      </p>
      <p className="text-2xl">
        អ៊ីម៉ែលរបស់អ្នកបានផ្ទៀងផ្ទាត់ជោគជ័យ! សូមចុចប៉ូតុងខាងក្រោមដើម្បីចូលទៅកម្មវិធី
      </p>
      <div className="flex gap-4" >
        <Button title="Cancel" className="bg-gray-50 text-gray-800 my-8" />
        <Button title="Login" className="my-8" />
      </div>
    </main>
  )
}
