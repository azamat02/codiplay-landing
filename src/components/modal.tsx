"use client";
import { Dialog, Transition } from '@headlessui/react'
import { CheckCircleIcon, ExclamationCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import Autocomplete from './Autocomplete';
import schools from './schools.json'
import CustomRadioGroup from './customRadioGroup';
import Select from './select';

interface ModalProps {
    isOpen: boolean,
    setOpen: Function
}

async function send(name: string, phone: string, region: string, area: string, city: string, school: string, role: string) {
  // const apiUrl = 'http://localhost:80/append_school_v2'
  const apiUrl = 'https://qazaqunion.kz/append_school_v2'
  const data = [
    name,
    phone,
    region,
    area,
    city,
    school,
    role,
    new Date().toLocaleString('ru-RU', {month: 'long', day: 'numeric', year: 'numeric', weekday: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit'})
  ]
  console.log(data)
  const response = await axios.post(apiUrl, {data}).then(res=>{
    console.log(res)
  })

  return response 
}

export default function Modal({isOpen, setOpen}: ModalProps) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState('')
    const [region, setRegion] = useState('')
    const [area, setArea] = useState('')
    const [city, setCity] = useState('')
    const [school, setSchool] = useState('')
    const [role, setRole] = useState('')
    let roles = ['Директор', 'Учитель', 'Завуч', 'Школьник', 'Родитель']
    // @ts-ignore
    let regions = [...new Set(schools.map(school => school.nate1))]
    let areas = []
    let cities = []
    let filteredSchools = []

    if (region) {
      // @ts-ignore
      areas = [...new Set(schools.map((school: any) => {if (school.nate1 === region) return school.nate2}))]
      areas = areas.filter(area => {return area != undefined})
    }

    if (area) {
      // @ts-ignore
      cities = [...new Set(schools.map((school: any) => {if (school.nate1 === region && school.nate2 == area) return school.nate3}))]
      cities = cities.filter(city => {return city != undefined})
    }

    if (city) {
      // @ts-ignore
      filteredSchools = [...new Set(schools.map((school: any) => {if (school.nate1 === region && school.nate2 == area && school.nate3 === city) return school.nate4}))]
      filteredSchools = filteredSchools.filter(school => {return school != undefined})
    }
    
    function submit() {
      if (name == '' || phone == '' || region== '' || area== '' || city== '' || school== '' || role== '') {
        setError(true)
      } else {
        setLoading(true)
        send(name, phone, region, area, city, school, role).then(res=>{
          window.location.href="https://t.me/codiplayu"
          setResponse("ok")
          setLoading(false)
          setTimeout(() => {
            setOpen(false)
            setName('')
            setPhone('')
            setRegion('')
            setArea('')
            setCity('')
            setSchool('')
            setRole('')
            setLoading(false)
            setResponse('')
          }, 3000);
        }).catch(err => {
          console.log(err)
          setResponse("error")
          setLoading(false)
          setTimeout(() => {
            setOpen(false)
            setName('')
            setPhone('')
            setRegion('')
            setArea('')
            setCity('')
            setSchool('')
            setRole('')
            setLoading(false)
            setResponse('')
          }, 2000);
        })
      }
    }

    function closeModal() {
      setOpen(false)
    }

    function openModal() {
      setOpen(true)
    }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="lining-nums relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {
                    loading ? (
                      <div className="flex justify-center items-center gap-5 font-medium">
                        <svg className='animate-spin w-10 h-10 fill-blue-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z"/> </g> </svg>
                        Отправка данных
                      </div>
                    ) : response.length !==0 ? (
                      <>
                        {response === "ok" ? (
                          <>
                            <div className=" flex items-center gap-3 bg-green-200 rounded-lg py-2 px-4 text-green-600">
                              <CheckCircleIcon className='w-5 h-5'/> Заявка принята!
                            </div>
                          </>
                        ) : (
                          <>
                            <div className=" flex items-center gap-3 bg-red-200 rounded-lg py-2 px-4 text-red-600">
                              <ExclamationTriangleIcon className='w-5 h-5'/> Что-то пошло не так, попробуйте позже...
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                          >
                            Оставьте заявку и мы обязательно с вами свяжемся
                          </Dialog.Title>
                          <div className="mt-2">
                            <hr />
                            {error && <div className="p flex items-center rounded-lg gap-3 bg-orange-200 text-orange-800 px-5 py-3"><ExclamationCircleIcon className='w-5 h-5'/> Заполните все данные</div>}
                            <div className="my-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900">ФИО</label>
                                <input onChange={(e)=>{setName(e.target.value)}} type="text" id="text" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="Введите ФИО" required/>
                            </div>
                            <div className="my-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Номер телефона</label>
                                <input onChange={(e)=>{setPhone(e.target.value)}} type="number" id="number" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="Введите номер телефона" required/>
                            </div>
                            <div className="my-6">
                              <label className="block mb-2 text-sm font-medium text-gray-900">Область</label>
                              <Autocomplete array={regions} selected={region} setSelected={(value) => {setRegion(value); setArea(''); setCity(''); setSchool('')}}/>
                            </div>
                            <div className="my-6">
                              <label className="block mb-2 text-sm font-medium text-gray-900">Регион</label>
                              <Autocomplete array={areas} selected={area} setSelected={(value) => {setArea(value); setCity(''); setSchool('')}}/>
                            </div>
                            <div className="my-6">
                              <label className="block mb-2 text-sm font-medium text-gray-900">Населенный пункт (город, поселок, сельский округ, село)</label>
                              <Autocomplete array={cities} selected={city} setSelected={(value) => {setCity(value); setSchool('')}}/>
                            </div>
                            <div className="my-6">
                              <label className="block mb-2 text-sm font-medium text-gray-900">Школа</label>
                              <Autocomplete array={filteredSchools} selected={school} setSelected={setSchool}/>
                            </div>
                            <div className="my-6">
                              <label className="block mb-2 text-sm font-medium text-gray-900">Вы</label>
                              <Select list={roles} selected={role === '' ? roles[0] : role} setSelected={setRole}/>
                            </div>
                          </div>

                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-primary py-4 text-sm font-medium text-white w-full hover:opacity-70 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                              onClick={submit}
                            >
                              Отправить заявку
                            </button>
                          </div>
                      </>
                    )
                  }
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
