"use client";
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Modal from '@/components/modal';
import { ArrowRightIcon, ArrowTopRightOnSquareIcon, Bars3Icon} from '@heroicons/react/24/outline';
import { AiFillInstagram, AiFillMail, AiFillPhone} from 'react-icons/ai'
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { motion } from "framer-motion"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const news = [
    {
      title: "Digital Business",
      name: "Кто зарабатывает на образовании: ТОП-40 казахстанских EdTech-компаний",
      desc: "По итогам 2022 года общий объем выручки крупнейших казахстанских EdTech-компаний вырос всего на 1,17%, говорится в результатах исследования Smart Ranking.",
      image_url: "/static/img/news/1.jpg",
      link_url: "https://digitalbusiness.kz/2023-04-10/kto-zarabatyvaet-na-obrazovanii-top-40-kazahstanskih-edtech-kompanij/"
    },
    {
      title: "Inbusiness.kz",
      name: "Инвестиции в EdTech-стартапы: что изменилось за последний год?",
      desc: "Учебные заведения сталкиваются с растущим спросом на подготовку нового поколения к непредсказуемым экономическим вызовам, а также социальным изменениям, совершенно иным профессиям и технологическому развитию.",
      image_url: "/static/img/news/2.jpg",
      link_url: "https://inbusiness.kz/ru/author_news/investicii-v-edtech-startapy-chto-izmenilos-za-poslednij-god"
    },
    {
      title: "Пульс Mail.ru",
      name: "Разработку казахстанского EdTech-стартапа внедрили в Южной Корее",
      desc: "В государственной школе Incheon Dohwa Elementary School города Инчхон с апреля этого года начали использовать в образовательном процессе программу IT-компании «CodiPlay», передает DKNews.kz.",
      image_url: "/static/img/news/3.jpg",
      link_url: "https://pulse.mail.ru/article/razrabotku-kazahstanskogo-edtech-startapa-vnedrili-v-yuzhnoj-koree-8721034644433477648-8047193216050820174/"
    },
    {
      title: "Telegram",
      name: "DigitalBusiness.kz",
      desc: "Программа казахстанской ИТ-компании CodiPlay с апреля 2023 года используется в образовательном процессе государственной школы Incheon Dohwa Elementary School города Инчхон в Южной Корее. EdTech-стартапа CodiPlay разработал одноименное приложение с э…",
      image_url: "/static/img/news/4.jpg",
      link_url: "https://t.me/digitalbussinesskz/691"
    },
    {
      title: "Digital Business",
      name: "Разработку казахстанского EdTech-стартапа внедрили в Южной Корее",
      desc: "В государственной школе Incheon Dohwa Elementary School города Инчхон начали использовать приложение стартапа CodiPlay для обучения программированию учеников с 1 по 6 классы.",
      image_url: "/static/img/news/5.jpg",
      link_url: "https://digitalbusiness.kz/2023-04-05/razrabotku-kazahstanskogo-edtech-startapa-vnedrili-v-yuzhnoj-koree/"
    },
    {
      title: "Dknews.kz",
      name: "Разработку казахстанского EdTech-стартапа внедрили в Южной Корее",
      desc: "В государственной школе Incheon Dohwa Elementary School города Инчхон с апреля этого года начали использовать в образовательном процессе программу IT-компании «CodiPlay»",
      image_url: "/static/img/news/2.jpg",
      link_url: "https://dknews.kz/ru/dk-life/280696-razrabotku-kazahstanskogo-edtech-startapa-vnedrili-v"
    },
    {
      title: "Bluescreen.kz",
      name: "Профессии будущего: как подготовить к ним своего ребенка?",
      desc: "Все больше специалистов из самых разных областей говорят о совершенно новых профессиях и изменениях в структуре рынка труда. Во многом это связано с ускорением темпа разработки и внедрения новых технологий.",
      image_url: "/static/img/news/7.jpg",
      link_url: "https://bluescreen.kz/news/12897/profiessii-budushchiegho-kak-podghotovit-k-nim-svoiegho-riebienka"
    },
    {
      title: "Kursiv Media",
      name: "Зачем образованию нужны EdTech проекты?",
      desc: "В глобальном масштабе образование – это быстрорастущий рынок во всех типах экономики с разным уровнем развития. Размер рынка EdTech оценивался в $254,80 млрд в 2021 году и достигнет $605,40 млрд к 2027 году, увеличившись в среднем на 15,52% в течение прогнозируемого периода.",
      image_url: "/static/img/news/2.jpg",
      link_url: "https://kz.kursiv.media/opinions/zachem-obrazovaniyu-nuzhny-edtech-proekty/"
    },
  ]
  const teamMembers = [
    {
      img: '/static/img/team/team_member_03.png',
      name: 'Жанадил Талдыбаев',
      position: 'CEO'
    },
    {
      img: '/static/img/team/team_member_04.png',
      name: 'Адилет Альханов',
      position: 'СОО'
    },
    // {
    //   img: '/static/img/team/team_member_01.png',
    //   name: 'Test',
    //   position: 'Test 1'
    // },
    {
      img: '/static/img/team/team_member_07.png',
      name: 'Аслан Мырзагалиев',
      position: 'Инженер'
    },
    {
      img: '/static/img/team/team_member_05.png',
      name: 'Азамат Саидулы',
      position: 'Разработчик'
    },
    {
      img: '/static/img/team/team_member_02.png',
      name: 'Абай Есенкабыл',
      position: 'Разработчик'
    },
    {
      img: '/static/img/team/team_member_06.png',
      name: 'Степан Останин',
      position: 'Разработчик'
    },
    {
      img: '/static/img/team/team_member_09.png',
      name: 'Алияр Кадикенов',
      position: 'Менеджер по продажам'
    },
    {
      img: '/static/img/team/team_member_10.png',
      name: 'Адильмырза Муратов',
      position: 'Дизайнер'
    },
    {
      img: '/static/img/team/team_member_11.png',
      name: 'Дания Есетова',
      position: 'Маркетолог'
    },
    {
      img: '/static/img/team/team_member_12.png',
      name: 'Мадина Талгат',
      position: 'Проектный менеджер'
    },
    {
      img: '/static/img/team/team_member_13.png',
      name: 'Казыбек Курман',
      position: 'Ассистент'
    },
    {
      img: '/static/img/team/team_member_14.png',
      name: 'Маржан Балабек',
      position: 'PR'
    },
    {
      img: '/static/img/team/team_member_15.png',
      name: 'Еламан Мырзагалиев',
      position: 'Логист'
    },
    {
      img: '/static/img/team/team_member_16.png',
      name: 'Гульбану',
      position: 'Учитель-методолог'
    },
    {
      img: '/static/img/team/team_member_08.png',
      name: 'Досымхан',
      position: 'Учитель-методолог'
    },
  ]

  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [setWidth]);

  if (width === 0) {
    return (
      <></>
    )
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  return (
    <main className={`h-full mx-[30px] lg:mx-[60px] min-w-fit 2xl:max-w-fit 2xl:mx-auto lining-nums`}>
      <Head>
        <title>CodiPlay</title>
      </Head>
      <Modal isOpen={isModalOpen} setOpen={setIsModalOpen}/>
      <div className=''>
        {/* Header */}
        <div className="w-full hidden lg:flex max-w-screen-2xl justify-between 2xl:gap-52 my-[35px]">
          <ul className='flex justify-start items-center gap-10 2xL:gap-20 2xl:text-lg'>
            <a href={'/'}>
              <li className='hover:text-primary transition-all'>
                <img src="/static/img/logo_icon.svg" alt="" className='bg-primary rounded-[5px] px-[9px] py-[13px]'/>
              </li>
            </a>
            <a href={'/'}>
              <li className='hover:text-primary transition-all'>
                Главная
              </li>
            </a>
            <a href={'#codiplay'}>
              <li className='hover:text-primary transition-all'>
                CodiPlay
              </li>
            </a>
            <a href={'#codikit'}>
              <li className='hover:text-primary transition-all'>
                CodiKit
              </li>
            </a>
            <a href={'#coditeach'}>
              <li className='hover:text-primary transition-all'>
                CodiTeach
              </li>
            </a>
            <a href={'#contacts'}>
              <li className='hover:text-primary transition-all'>
                Контакты
              </li>
            </a>
            <a href={'https://invest.codiplay.kz'}>
              <li className='flex items-center gap-2 hover:text-primary transition-all'>
                Инвесторам <ArrowTopRightOnSquareIcon className='w-5 h-5'/>
              </li>
            </a>
          </ul>
          <button onClick={openModal} className="bg-primary flex items-center gap-10 pl-10 pr-2 py-2 rounded-full text-white">
            Подключить школу
            <div className="p-[10px] bg-white rounded-full">
                <ArrowRightIcon className='h-5 w-5 text-black rotate-[-45deg]'/>
            </div>
          </button>
        </div>
        {/* Mobile header */}
        <div className="w-full lg:hidden my-[35px]">
          <ul className='flex justify-between items-center'>
            <li>
              <img src="/static/img/logo_icon.svg" alt="" className='bg-primary rounded-[5px] px-[9px] py-[13px]'/>
            </li>
            <li onClick={toggleMenu}>
              <Bars3Icon className='w-10 h-10'/>
            </li>
          </ul>
          <ul className={`${isMenuOpen ? 'block' : 'hidden'} mt-5 p-5 flex flex-col gap-3 rounded-lg bg-primary text-white`}>
            <li onClick={() => {location.href = '/'}}>
              Главная
            </li>
            <li onClick={() => {location.href = '#codiplay'}}>
              CodiPlay
            </li>
            <li onClick={() => {location.href = '#codikit'}}>
              CodiKit
            </li>
            <li onClick={() => {location.href = '#coditeach'}}>
              CodiTeach
            </li>
            <li onClick={() => {location.href = '#contacts'}}>
              Контакты
            </li>
            <li onClick={() => {location.href = 'https://invest.codiplay.kz'}} className='flex items-center gap-2 hover:text-primary transition-all'>
              Инвесторам <ArrowTopRightOnSquareIcon className='w-5 h-5'/>
            </li>
            <button onClick={openModal} className="bg-white text-primary flex items-center gap-10 pl-10 pr-2 py-2 rounded-full">
              Подключить школу
              <div className="p-[10px] bg-primary rounded-full">
                  <ArrowRightIcon className='h-5 w-5 text-white rotate-[-45deg]'/>
              </div>
            </button>
          </ul>
        </div>
        {/* Hero section */}
        <div className="w-full max-w-screen-2xl lg:flex lg:gap-10 2xl:flex 2xl:gap-32 lg:items-center lg:justify-between">
          <p className='text-2xl lg:text-6xl'>Обучение программированию на <span className="text-primary">смартфоне</span></p>
          <img src="/static/img/iphone.png" alt="" className='xl:w-1/3 2xl:w-full' />
        </div>
        {/* Products cards */}
        <div className="w-full max-w-screen-2xl grid grid-cols-1 lg:grid-cols-3 gap-[20px] my-[40px] lg:my-[80px]">
          <div onClick={()=>{location.href='#codiplay'}} className="rounded-[10px] relative bg-lightgray p-[20px] h-[200px]">
            <div>
              <p className="text-black text-lg mb-2 font-medium">Приложение CodiPlay</p>
              <p className="text-mediumgray text-sm">Обучение программированию через аркадные игры</p>
            </div>
            <div className="p-[12px] mt-12 bg-white rounded-full inline-block border-[1px] border-black">
                <ArrowRightIcon className='h-5 w-5 text-black'/>
            </div>
            <img src="/static/img/half_phone.png" className='absolute bottom-0 right-5' alt="" />
          </div>
          <div onClick={()=>{location.href='#codikit'}} className="rounded-[10px] relative bg-lightgray p-[20px] h-[200px]">
            <div>
              <p className="text-black text-lg mb-2 font-medium">Набор CodiKit</p>
              <p className="text-mediumgray text-sm w-1/2">Набор для сборки IoT гаджетов</p>
            </div>
            <div className="p-[12px] mt-6 lg:mt-8 bg-white rounded-full inline-block border-[1px] border-black">
                <ArrowRightIcon className='h-5 w-5 text-black'/>
            </div>
            <img src="/static/img/half_codikit.png" className='absolute bottom-0 w-1/2 lg:w-fit right-5' alt="" />
          </div>
          <div onClick={()=>{location.href='#coditeach'}} className="rounded-[10px] relative bg-lightgray p-[20px] h-[200px]">
            <div>
              <p className="text-black text-lg mb-2 font-medium">Платформа CodiTeach</p>
              <p className="text-mediumgray text-sm">Образовательная платформа для учителей</p>
            </div>
            <div className="p-[12px] mt-12 bg-white rounded-full inline-block border-[1px] border-black">
                <ArrowRightIcon className='h-5 w-5 text-black'/>
            </div>
            <img src="/static/img/half_macbook.png" className='absolute bottom-0 right-0 w-2/3  lg:w-fit' alt="" />
          </div>
        </div>
        {/* Statistics cards */}
        <div className="w-full max-w-screen-2xl">
          <div className="border-t-[1px] border-primary border-opacity-30 grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
            <p className="text-2xl lg:text-5xl p-[20px] border-b-[1px] lg:border-b-[0px] lg:border-r-[1px] border-primary border-opacity-30">28 000 пользователей</p>
            <p className="text-2xl lg:text-5xl p-[20px] border-b-[1px] lg:border-b-[0px] lg:border-r-[1px] border-primary border-opacity-30">25 школ в Казахстане</p>
            <p className="text-2xl lg:text-5xl p-[20px]">5 школ в Южной Корее</p>
          </div>
          <div className="flex justify-center my-10 lg:my-20">
            <button onClick={openModal} className="py-3 lg:py-6 px-6 lg:px-20 rounded-full text-white bg-primary text-lg lg:text-2xl">Подключить школу к CodiPlay</button>
          </div>
        </div>
        {/* Product description cards */}
        <div id='codiplay' className="w-full max-w-screen-2xl grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-3 mt-20 lg:mt-[300px]">
          <img src="/static/img/playing_codiplay.png" className='lg:h-full object-cover border-[1px] border-mediumgray rounded-[20px] lg:rounded-[50px]' alt="" />
          <div className="lg:order-last order-first lg:col-span-2 border-[1px] border-mediumgray rounded-[20px] lg:rounded-[50px] p-5 lg:px-[80px] lg:py-[50px]">
            <div className="flex flex-col gap-[38px]">
              <p className="text-sm lg:text-4xl">Приложение <span className="font-bold text-primary">CodiPlay</span> - обучение программированию через аркадные игры</p>
              <p className="text-xs text-mediumgray lg:text-black lg:text-xl lg:w-1/2">Школьники от 8 лет изучают основы программирования в увлекательной форме</p>
              <div className='flex flex-col gap-[20px]'>
                <p className="text-xs lg:text-xl lg:w-1/2">Изучаемые языки программирования:</p>
                <div className="text-xs lg:text-lg flex flex-wrap items-stretch gap-[20px]">
                  <span className="px-10 py-2 border-[1px] rounded-full border-mediumgray text-mediumgray inline-block">Python</span>
                  <span className="px-10 py-2 border-[1px] rounded-full border-mediumgray text-mediumgray inline-block">С++/C#</span>
                  <span className="px-10 py-2 border-[1px] rounded-full border-mediumgray text-mediumgray inline-block">Scratch/Block coding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='codikit' className="w-full mt-10 lg:mt-0 gap-10 lg:gap-0 max-w-screen-2xl grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2 border-[1px] border-mediumgray rounded-[20px] lg:rounded-[50px] p-5 lg:px-[80px] lg:py-[50px]">
              <div className="flex flex-col gap-10 lg:gap-[38px]">
                <p className="text-sm lg:text-4xl"><span className="font-bold text-primary">CodiKit</span> - набор для сборки и программирования IoT-гаджетов</p>
                <p className="text-xs lg:text-xl text-mediumgray lg:text-black">В наборах CodiKit находятся все необходимые детали и макеты для создания 15 IoT-проектов. </p>
                <p className="text-xs lg:text-xl text-mediumgray lg:text-black">Чтобы закрепить знания полученные в игровой форме школьники собирают IoT-гаджеты с набором CodiKit</p>
                <div className='flex flex-col gap-[20px]'>
                  <p className="text-xs lg:text-xl lg:w-1/2">Примеры проектов:</p>
                  <div className="flex flex-wrap items-stretch lg:flex gap-[20px]">
                    <span className="px-10 py-2 text-xs lg:text-lg border-[1px] rounded-full border-primary text-primary inline-block">Умная парковка</span>
                    <span className="px-10 py-2 text-xs lg:text-lg border-[1px] rounded-full border-primary text-primary inline-block">Умная лампа</span>
                    <span className="px-10 py-2 text-xs lg:text-lg border-[1px] rounded-full border-primary text-primary inline-block">Светофор</span>
                    <span className="px-10 py-2 text-xs lg:text-lg border-[1px] rounded-full border-primary text-primary inline-block">Умная ферма</span>
                    <span className="px-10 py-2 text-xs lg:text-lg border-[1px] rounded-full border-primary text-primary inline-block">Смарт корзина с датчиком движения</span>
                  </div>
                </div>
              </div>
          </div>
          <img src="/static/img/codikit.png" className='lg:h-full object-cover border-[1px] border-mediumgray rounded-[20px] lg:rounded-[50px]' alt="" />
        </div>
        {/* Problem of schools */}
        <div className="w-full max-w-screen-2xl my-10 lg:my-[150px]">
          <div className="lg:ml-[100px]">
            <p className="text-xl lg:text-6xl lg:w-1/2 font-bold">Учителя информатики не программисты </p>
            <div className='mt-[20px] lg:ml-[400px] flex items-end gap-10'>
              <img src="/static/img/curved_arrow.png" className='lg:w-full w-1/2' alt="" />
              <p className="text-xs lg:text-xl 2xl:text-3xl text-mediumgray">Во многих случаях не имеют компетенцию, чтобы обучать детей программированию</p>
            </div> 
          </div>
        </div>
        {/* CodiTeach platform */}
        <div id='coditeach' className="w-full max-w-screen-2xl">
          <div className="border-[1px] border-mediumgray rounded-[20px] lg:rounded-[50px] p-5 lg:px-[80px] lg:py-[50px] items-center gap-10 grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 flex flex-col gap-[38px]">
                <p className="text-xl lg:text-4xl"><span className="font-bold text-primary">CodiTeach</span> - платформа для поддержки учителей и контроля процесса обучения.</p>
                <img src="/static/img/arrow_down.png" className='w-5 ml-10 lg:ml-20' alt="" />
                <div className="lg:flex lg:flex-col gap-[20px]">
                  <div className="flex flex-wrap items-stretch gap-[20px]">
                    <span className="px-2 lg:px-10 text-xs shrink-0 py-2 border-[1px] rounded-full border-black text-black inline-block">Обучение преподавателей программированию</span>
                    <span className="px-2 lg:px-10 text-xs shrink-0 py-2 border-[1px] rounded-full border-black text-black inline-block">Доступ к учебному плану</span>
                    <span className="px-2 lg:px-10 text-xs shrink-0 py-2 border-[1px] rounded-full border-black text-black inline-block">Отслеживание прогресса каждого ученика</span>
                    <span className="px-2 lg:px-10 text-xs shrink-0 py-2 border-[1px] rounded-full border-black text-black inline-block">Проведение экзаменов</span>
                    <span className="px-2 lg:px-10 text-xs shrink-0 py-2 border-[1px] rounded-full border-black text-black inline-block">Контроль процесса обучения детей</span>
                    <span className="px-2 lg:px-10 text-xs shrink-0 py-2 border-[1px] rounded-full border-black text-black inline-block">Онлайн поддержка учителей</span>
                    <span className="px-2 lg:px-10 text-xs shrink-0 py-2 border-[1px] rounded-full border-black text-black inline-block">Возможность задавать домашние задания</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <img src="/static/img/coditeach-mockup.png"alt="" />
              </div>
            </div>
        </div>
        {/* Why CodiPlay is solution? */}
        <div className="w-full max-w-screen-2xl">
          <div className="col-span-2 border-[1px] border-mediumgray rounded-[20px] lg:rounded-[50px] p-5 lg:px-[80px] lg:py-[50px] mt-16">
            <p className="text-xl lg:text-6xl">Почему <span className="text-primary">CodiPlay</span> может поменять IT-образование в нашей стране навсегда ?</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] mt-[20px]">
            <div className="border-[1px] border-mediumgray rounded-[20px] lg:rounded-[50px] p-5 lg:p-[50px]">
              <img src="/static/img/scratch.png" className='' alt="" />
            </div>
            <div className="rounded-[20px] lg:rounded-[50px] text-white bg-primary p-5 lg:p-[80px]">
              <p className="text-lg lg:text-4xl">
                <b>Сodiplay</b> - имеет уникальную систему компиляции кода прямо со смартфона, что исключает необходимость компьютера на всех этапах.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-screen-2xl my-20 lg:my-[100px]">
          <div className="relative">
            <p className="text-lg lg:text-6xl w-fit lg:w-2/3 font-bold">
              Теперь, программировать можно прямо с телефона 
              <img src="/static/img/underline.png" className='lg:ml-0 ml-[-50px]' alt="" />
              <img src="/static/img/star.png" className='absolute w-5 lg:w-fit top-[-30px] right-0 lg:right-1/4' alt="" />
            </p>
          </div>
          <div className="flex justify-end">
            <img src="/static/img/smile.png" className='w-10 lg:w-fit' alt="" />
          </div>
          <div className="flex justify-center mt-5 lg:mt-10">
            <p className="text-mediumgray text-xl lg:text-2xl">Это значит:</p>
            <img src="/static/img/arrow_down_2.png" className='mt-2 ml-2' alt="" />
          </div>
        </div>
        {/* Reasons */}
        <div className="w-full max-w-screen-2xl grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
          <div className="border-[1px] border-mediumgray p-5 lg:p-[50px] rounded-[20px] lg:rounded-[50px] text-xl lg:text-2xl">
            <span className="text-primary font-bold">Тысячи детей</span> в городах и регионах, у которых нет доступа к компьютеру смогут начать свой путь в программировании и будут конкурентоспособны на IT-рынке.
          </div>
          <div className="border-[1px] border-mediumgray p-5 lg:p-[50px] rounded-[20px] lg:rounded-[50px] text-xl lg:text-2xl">
            Школы, у которых нет бюджета на дорогостоящее техническое оборудование смогут обучать программированию, потому что <span className="text-primary font-bold"> смартфон есть почти у каждого школьника.</span>
          </div>
          <div className="border-[1px] border-mediumgray p-5 lg:p-[50px] rounded-[20px] lg:rounded-[50px] text-xl lg:text-2xl">
            Система CodiPlay обходится школе в <span className="text-primary font-bold">500-600 ₸ на 1 школьника</span>, в зависимости от количества учеников в школе, что делает IT-образование доступным с малых лет.
          </div>
        </div>
        <div className="w-full max-w-screen-2xl grid grid-cols-1 lg:grid-cols-2 gap-[20px] mt-[20px]">
          <div className="border-[1px] border-mediumgray p-5 lg:p-[50px] rounded-[20px] lg:rounded-[50px] text-xl lg:text-2xl">
            Например, собрав вентилятор из набора CodiKit, ребенок получает навык программированию полноразмерного бытового вентилятора. И закончив курс CodiPlay, <span className="font-bold text-primary">становится настоящим инженером и программистом. </span>
          </div>
          <div className="border-[1px] border-mediumgray p-5 lg:p-[50px] rounded-[20px] lg:rounded-[50px] text-xl lg:text-2xl">
            После прохождения полного курса, школьники получают  <span className="font-bold text-primary">сертификат от Astana IT University</span> и освобождаются от определенных дисциплин.
          </div>
        </div>
        {/* Connect school */}
        <p className="text-xl lg:text-4xl text-center mt-20 lg:mt-[200px]">Подключить CodiPlay в вашу школу</p>
        <div className="flex justify-center mt-10 lg:mt-20">
          <motion.button animate={{scale: [1.5, 1, 1.5]}} transition={{repeat: Infinity, duration: 5}} onClick={openModal} className='rounded-full text-lg lg:text-3xl bg-primary text-white w-[150px] h-[150px] lg:w-[300px] lg:h-[300px]'>
            Подключить
          </motion.button>
          {/* <button onClick={openModal} className="rounded-full text-lg lg:text-3xl bg-primary text-white w-[150px] h-[150px] lg:w-[300px] lg:h-[300px]">Подключить</button> */}
        </div>
        {/* Team */}
        <div className="w-full max-w-screen-2xl mt-20">
          <p className="text-5xl font-bold">Наша команда</p>
          <CarouselProvider
              className='my-10'
              naturalSlideWidth={400}
              naturalSlideHeight={600}
              totalSlides={15}
              visibleSlides={width >= 768 ? 4 : 1}
              interval={2500}
              isPlaying={true}
            >
            <Slider className='h-[430px]'>
              {
                teamMembers.map((member, index) => {
                  return (
                    <Slide index={index} key={`${index}-team-member`}>
                      <div className="mx-5 max-w-sm p-5 rounded-2xl">
                        <img className="object-cover h-72 w-full rounded-xl" src={member.img} alt="investor" width={300}/>
                        <p className='text-2xl pt-2 font-bold'>{member.name}</p>
                        <p className='py-2'>{member.position}</p>
                      </div>
                    </Slide>
                  )
                })
              }
            </Slider>
            <div className="flex justify-around">
                <ButtonBack><ChevronLeftIcon className='w-10 h-10'/></ButtonBack>
                <ButtonNext><ChevronRightIcon className='w-10 h-10'/></ButtonNext>
              </div>
          </CarouselProvider>
        </div>
        {/* Projec video */}
        <div className="w-full max-w-screen-2xl mt-20">
          <p className="text-5xl text-center mt-40 font-bold">
            О проекте
          </p>
          <div className="flex justify-center my-10">
            <iframe className='rounded-xl w-full h-48 md:h-[500px] md:w-2/3' src="https://www.youtube.com/embed/tHEeCCNwWG4" title="YouTube video player" 
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            // @ts-ignore
            allowFullScreen="true"></iframe>
          </div>
        </div>
        <hr  className='my-20'/>
        {/* Mass media about us */}
        <div className="w-full max-w-screen-2xl mt-20">
          <p className="text-5xl font-bold">Сми о нас</p>
          
        <CarouselProvider
              className='my-10'
              naturalSlideWidth={400}
              naturalSlideHeight={600}
              totalSlides={8}
              visibleSlides={width >= 768 ? 3 : 1}
              interval={2500}
              isPlaying={true}
            >
              <Slider className='h-[450px]'>
                {
                  news.map((item, index) => {
                    return (
                    <Slide index={index} key={`${index}-mass-media`}>
                      <div className="mx-5 max-w-sm p-5 bg-white rounded-2xl border-[1px] border-mediumgray">
                        <img className="object-cover h-40 w-full rounded-xl" src={item.image_url} alt="investor" width={300}/>
                        <p className="text-blue-600 pt-2 pb-1 font-bold">{item.title}</p>
                        <p className="pt-1 pb-2 font-bold text-black">{item.name}</p>
                        <p className="line-clamp-2 my-2 text-black">{item.desc}</p>
                        <a href={item.link_url} className='font-bold mt-6 text-blue-800 flex items-center gap-2 mt-2'>Подробнее <ArrowRightIcon className='w-5 h-5'/> </a>
                      </div>
                    </Slide>
                    )
                  })
                }
              </Slider>
              <div className="flex justify-around">
                <ButtonBack><ChevronLeftIcon className='w-10 h-10'/></ButtonBack>
                <ButtonNext><ChevronRightIcon className='w-10 h-10'/></ButtonNext>
              </div>
        </CarouselProvider>
        </div>
        {/* Footer */}
        <div id='contacts' className="w-full max-w-screen-2xl mt-[200px] bg-black rounded-t-[20px] lg:rounded-t-[50px] p-5 lg:p-[90px] lg:pb-1">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div>
              <p className="text-3xl lg:text-6xl font-bold text-white">CodiPlay</p>
              <p className='text-white mt-10'>Контакты для связи</p>
            </div>
            <div>
              <button onClick={() => {window.location.href = 'https://www.instagram.com/codiplay.kz'}} className='flex mb-5 items-center text-white gap-[20px] pr-5 border-[1px] border-white rounded-full p-2'>
                <div className="rounded-full p-[10px] bg-white text-primary"><AiFillInstagram/></div>
                Инстаграм CodiPlay
              </button>
              <button onClick={() => {window.location.href = 'mailto:office@codiplay.kz'}} className='flex mb-5 items-center text-white gap-[20px] pr-5 border-[1px] border-white rounded-full p-2'>
                <div className="rounded-full p-[10px] bg-white text-primary"><AiFillMail/></div>
                Написать на почту
              </button>
              <button onClick={() => {window.location.href = 'tel:+77071707949'}}  className='flex items-center text-white gap-[20px] pr-5 border-[1px] border-white rounded-full p-2'>
                <div className="rounded-full p-[10px] bg-white text-primary"><AiFillPhone/></div>
                Позвонить нам
              </button>
            </div>
            <div>
              <img src="/static/img/qazinnovations.png" alt="" className='mt-20 w-1/2'/>
              <p className="text-white my-10">Проект реализован при поддержке <span onClick={()=>{location.href='https://qazinn.kz'}} className="cursor-pointer text-blue-400 underline">АО «НАРИ «QazInnovations»</span></p>
            </div>
          </div>
          
          <div className="border-t-[1px] text-white border-white p-[20px] mt-[100px] grid grid-cols-1 gap-20 lg:flex lg:justify-between">
              <div>
                <p>2023 CodiPlay</p>
                <p>Права защищены</p>
              </div>
              <div>
                <p>Политика обработки данных</p>
              </div>
              <div>
                <p>Вернуться наверх</p>
              </div>
            </div>
        </div>
      </div>
      
    </main>
  )
}
