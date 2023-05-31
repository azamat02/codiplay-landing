"use client";
import { useState } from 'react';
import Head from 'next/head';
import Modal from '@/components/modal';
import { VisibilityObserver } from 'reactjs-visibility';
import { ArrowRightIcon, CheckCircleIcon, CheckIcon, ChevronDoubleUpIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useEffect } from 'react';
import { AiFillInstagram, AiFillMail, AiFillPhone, AiOutlineInstagram, AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai'
import Link from 'next/link';

export default function Home() {
  const [isButton1Visible, setIsButton1Visible] = useState(false)
  const [width, setWidth] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isProgressVisible, setIsProgressVisible] = useState(false)
  const news = [
    {
      title: "Digital Business",
      name: "Кто зарабатывает на образовании: ТОП-40 казахстанских EdTech-компаний",
      desc: "По итогам 2022 года общий объем выручки крупнейших казахстанских EdTech-компаний вырос всего на 1,17%, говорится в результатах исследования Smart Ranking.",
      image_url: "/static/news/1.jpg",
      link_url: "https://digitalbusiness.kz/2023-04-10/kto-zarabatyvaet-na-obrazovanii-top-40-kazahstanskih-edtech-kompanij/"
    },
    {
      title: "Inbusiness.kz",
      name: "Инвестиции в EdTech-стартапы: что изменилось за последний год?",
      desc: "Учебные заведения сталкиваются с растущим спросом на подготовку нового поколения к непредсказуемым экономическим вызовам, а также социальным изменениям, совершенно иным профессиям и технологическому развитию.",
      image_url: "/static/news/2.jpg",
      link_url: "https://inbusiness.kz/ru/author_news/investicii-v-edtech-startapy-chto-izmenilos-za-poslednij-god"
    },
    {
      title: "Пульс Mail.ru",
      name: "Разработку казахстанского EdTech-стартапа внедрили в Южной Корее",
      desc: "В государственной школе Incheon Dohwa Elementary School города Инчхон с апреля этого года начали использовать в образовательном процессе программу IT-компании «CodiPlay», передает DKNews.kz.",
      image_url: "/static/news/3.jpg",
      link_url: "https://pulse.mail.ru/article/razrabotku-kazahstanskogo-edtech-startapa-vnedrili-v-yuzhnoj-koree-8721034644433477648-8047193216050820174/"
    },
    {
      title: "Telegram",
      name: "DigitalBusiness.kz",
      desc: "Программа казахстанской ИТ-компании CodiPlay с апреля 2023 года используется в образовательном процессе государственной школы Incheon Dohwa Elementary School города Инчхон в Южной Корее. EdTech-стартапа CodiPlay разработал одноименное приложение с э…",
      image_url: "/static/news/4.jpg",
      link_url: "https://t.me/digitalbussinesskz/691"
    },
    {
      title: "Digital Business",
      name: "Разработку казахстанского EdTech-стартапа внедрили в Южной Корее",
      desc: "В государственной школе Incheon Dohwa Elementary School города Инчхон начали использовать приложение стартапа CodiPlay для обучения программированию учеников с 1 по 6 классы.",
      image_url: "/static/news/5.jpg",
      link_url: "https://digitalbusiness.kz/2023-04-05/razrabotku-kazahstanskogo-edtech-startapa-vnedrili-v-yuzhnoj-koree/"
    },
    {
      title: "Dknews.kz",
      name: "Разработку казахстанского EdTech-стартапа внедрили в Южной Корее",
      desc: "В государственной школе Incheon Dohwa Elementary School города Инчхон с апреля этого года начали использовать в образовательном процессе программу IT-компании «CodiPlay»",
      image_url: "/static/news/2.jpg",
      link_url: "https://dknews.kz/ru/dk-life/280696-razrabotku-kazahstanskogo-edtech-startapa-vnedrili-v"
    },
    {
      title: "Bluescreen.kz",
      name: "Профессии будущего: как подготовить к ним своего ребенка?",
      desc: "Все больше специалистов из самых разных областей говорят о совершенно новых профессиях и изменениях в структуре рынка труда. Во многом это связано с ускорением темпа разработки и внедрения новых технологий.",
      image_url: "/static/news/7.jpg",
      link_url: "https://bluescreen.kz/news/12897/profiessii-budushchiegho-kak-podghotovit-k-nim-svoiegho-riebienka"
    },
    {
      title: "Kursiv Media",
      name: "Зачем образованию нужны EdTech проекты?",
      desc: "В глобальном масштабе образование – это быстрорастущий рынок во всех типах экономики с разным уровнем развития. Размер рынка EdTech оценивался в $254,80 млрд в 2021 году и достигнет $605,40 млрд к 2027 году, увеличившись в среднем на 15,52% в течение прогнозируемого периода.",
      image_url: "/static/news/2.jpg",
      link_url: "https://kz.kursiv.media/opinions/zachem-obrazovaniyu-nuzhny-edtech-proekty/"
    },
  ]

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [setWidth]);

  if (width === 0) {
    return (
      <></>
    )
  }

  return (
    <main className={`h-full mx-[60px] min-w-fit 2xl:max-w-fit 2xl:mx-auto lining-nums`}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        <title>CodiPlay</title>
      </Head>
      <Modal isOpen={isModalOpen} setOpen={setIsModalOpen}/>
      <div className=''>
        {/* Header */}
        <div className="w-full max-w-screen-2xl flex justify-between 2xl:gap-52 my-[35px]">
          <ul className='flex justify-start items-center gap-20 text-lg'>
            <Link href={'/'}>
              <li>
                <img src="/static/img/logo_icon.svg" alt="" className='bg-primary rounded-[5px] px-[9px] py-[13px]'/>
              </li>
            </Link>
            <Link href={'/'}>
              <li>
                Главная
              </li>
            </Link>
            <Link href={'#codiplay'}>
              <li>
                CodiPlay
              </li>
            </Link>
            <Link href={'#codikit'}>
              <li>
                CodiKit
              </li>
            </Link>
            <Link href={'#coditeach'}>
              <li>
                CodiTeach
              </li>
            </Link>
            <Link href={'#contacts'}>
              <li>
                Контакты
              </li>
            </Link>
          </ul>
          <button className="bg-primary flex items-center gap-10 pl-10 pr-2 py-2 rounded-full text-white">
            Подключить школу
            <div className="p-[10px] bg-white rounded-full">
                <ArrowRightIcon className='h-5 w-5 text-black rotate-[-45deg]'/>
            </div>
          </button>
        </div>
        {/* Hero section */}
        <div className="w-full max-w-screen-2xl flex 2xl:gap-32 items-center justify-between">
          <p className='text-6xl'>Обучение программированию на <span className="text-primary">смартфоне</span></p>
          <img src="/static/img/iphone.png" alt="" />
        </div>
        {/* Products cards */}
        <div className="w-full max-w-screen-2xl grid grid-cols-3 gap-[20px] my-[80px]">
          <div className="rounded-[10px] relative bg-lightgray p-[20px] h-[200px]">
            <div>
              <p className="text-black text-lg mb-2 font-medium">Приложение CodiPlay</p>
              <p className="text-mediumgray text-sm">Обучение программированию через аркадные игры</p>
            </div>
            <div className="p-[12px] mt-12 bg-white rounded-full inline-block border-[1px] border-black">
                <ArrowRightIcon className='h-5 w-5 text-black'/>
            </div>
            <img src="/static/img/half_phone.png" className='absolute bottom-0 right-5' alt="" />
          </div>
          <div className="rounded-[10px] relative bg-lightgray p-[20px] h-[200px]">
            <div>
              <p className="text-black text-lg mb-2 font-medium">Приложение CodiPlay</p>
              <p className="text-mediumgray text-sm w-1/2">Обучение программированию через аркадные игры</p>
            </div>
            <div className="p-[12px] mt-8 bg-white rounded-full inline-block border-[1px] border-black">
                <ArrowRightIcon className='h-5 w-5 text-black'/>
            </div>
            <img src="/static/img/half_codikit.png" className='absolute bottom-0 right-5' alt="" />
          </div>
          <div className="rounded-[10px] relative bg-lightgray p-[20px] h-[200px]">
            <div>
              <p className="text-black text-lg mb-2 font-medium">Приложение CodiPlay</p>
              <p className="text-mediumgray text-sm">Обучение программированию через аркадные игры</p>
            </div>
            <div className="p-[12px] mt-12 bg-white rounded-full inline-block border-[1px] border-black">
                <ArrowRightIcon className='h-5 w-5 text-black'/>
            </div>
            <img src="/static/img/half_macbook.png" className='absolute bottom-0 right-0' alt="" />
          </div>
        </div>
        {/* Statistics cards */}
        <div className="w-full max-w-screen-2xl">
          <div className="border-t-[1px] border-primary border-opacity-30 grid grid-cols-3 gap-[20px]">
            <p className="text-5xl p-[20px] border-r-[1px] border-primary border-opacity-30">20 000 пользователей</p>
            <p className="text-5xl p-[20px] border-r-[1px] border-primary border-opacity-30">25 школ в Казахстане</p>
            <p className="text-5xl p-[20px]">5 школ в Южной Корее</p>
          </div>
          <div className="flex justify-center my-20">
            <button className="py-6 px-20 rounded-full text-white bg-primary text-2xl">Подключить школу к CodiPlay</button>
          </div>
        </div>
        {/* Product description cards */}
        <div className="w-full max-w-screen-2xl grid grid-cols-3 mt-[300px]">
          <img src="/static/img/playing_codiplay.png" className='border-[1px] object-cover h-full border-mediumgray rounded-[50px]' alt="" />
          <div className="col-span-2 border-[1px] border-mediumgray rounded-[50px] px-[80px] py-[50px]">
            <div className="flex flex-col gap-[38px]">
              <p className="text-4xl">Приложение <span className="font-bold text-primary">CodiPlay</span> - обучение программированию через аркадные игры</p>
              <p className="text-xl w-1/2">Школьники от 8 лет изучают основы программирования в увлекательной форме</p>
              <div className='flex flex-col gap-[20px]'>
                <p className="text-xl w-1/2">Изучаемые языки программирования:</p>
                <div className="flex gap-[20px]">
                  <span className="px-10 py-2 border-[1px] rounded-full border-mediumgray text-mediumgray inline-block">Python</span>
                  <span className="px-10 py-2 border-[1px] rounded-full border-mediumgray text-mediumgray inline-block">С++/C#</span>
                  <span className="px-10 py-2 border-[1px] rounded-full border-mediumgray text-mediumgray inline-block">Scratch/Block coding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-screen-2xl grid grid-cols-3">
          <div className="col-span-2 border-[1px] border-mediumgray rounded-[50px] px-[80px] py-[50px]">
              <div className="flex flex-col gap-[38px]">
                <p className="text-4xl"><span className="font-bold text-primary">CodiKit</span> - набор для сборки и программирования IoT-гаджетов</p>
                <p className="text-xl w-1/2">В наборах CodiKit находятся все необходимые детали и макеты для создания 15 IoT-проектов. </p>
                <p className="text-xl w-1/2">Чтобы закрепить знания полученные в игровой форме школьники собирают IoT-гаджеты с набором CodiKit</p>
                <div className='flex flex-col gap-[20px]'>
                  <p className="text-xl w-1/2">Примеры проектов:</p>
                  <div className="flex gap-[20px]">
                    <span className="px-10 py-2 border-[1px] rounded-full border-primary text-primary inline-block">Умная парковка</span>
                    <span className="px-10 py-2 border-[1px] rounded-full border-primary text-primary inline-block">Умная лампа</span>
                    <span className="px-10 py-2 border-[1px] rounded-full border-primary text-primary inline-block">Светофор</span>
                  </div>
                  <div className="flex gap-[20px]">
                    <span className="px-10 py-2 border-[1px] rounded-full border-primary text-primary inline-block">Умная ферма</span>
                    <span className="px-10 py-2 border-[1px] rounded-full border-primary text-primary inline-block">Смарт корзина с датчиком движения</span>
                  </div>
                </div>
              </div>
          </div>
          <img src="/static/img/codikit.png" className='h-full object-cover border-[1px] border-mediumgray rounded-[50px]' alt="" />
        </div>
        {/* Problem of schools */}
        <div className="w-full max-w-screen-2xl my-[150px]">
          <div className="ml-[100px]">
            <p className="text-6xl w-1/2 font-bold">Учителя информатики не программисты </p>
            <div className='mt-[20px] ml-[400px] flex items-end gap-10'>
              <img src="/static/img/curved_arrow.png"  alt="" />
              <p className="text-xl 2xl:text-3xl text-mediumgray">Во многих случаях не имеют компетенцию, чтобы обучать детей программированию</p>
            </div> 
          </div>
        </div>
        {/* CodiTeach platform */}
        <div className="w-full max-w-screen-2xl">
          <div className="border-[1px] border-mediumgray rounded-[50px] px-[80px] py-[50px] grid grid-cols-5">
              <div className="col-span-3 flex flex-col gap-[38px]">
                <p className="text-4xl"><span className="font-bold text-primary">CodiTeach</span> - платформа для поддержки учителей и контроля процесса обучения.</p>
                <img src="/static/img/arrow_down.png" className='w-5 ml-20' alt="" />
                <div className="flex flex-col gap-[20px]">
                  <div className="flex flex-wrap items-stretch gap-[20px]">
                    <span className="px-10 shrink-0 py-2 border-[1px] rounded-full border-black text-black inline-block">Обучение преподавателей программированию</span>
                    <span className="px-10 shrink-0 py-2 border-[1px] rounded-full border-black text-black inline-block">Доступ к учебному плану</span>
                    <span className="px-10 shrink-0 py-2 border-[1px] rounded-full border-black text-black inline-block">Отслеживание прогресса каждого ученика</span>
                    <span className="px-10 shrink-0 py-2 border-[1px] rounded-full border-black text-black inline-block">Проведение экзаменов</span>
                    <span className="px-10 shrink-0 py-2 border-[1px] rounded-full border-black text-black inline-block">Контроль процесса обучения детей</span>
                    <span className="px-10 shrink-0 py-2 border-[1px] rounded-full border-black text-black inline-block">Онлайн поддержка учителей</span>
                    <span className="px-10 shrink-0 py-2 border-[1px] rounded-full border-black text-black inline-block">Возможность задавать домашние задания</span>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <img src="/static/img/coditeach-mockup.png"alt="" />
              </div>
            </div>
        </div>
        {/* Why CodiPlay is solution? */}
        <div className="w-full max-w-screen-2xl">
          <div className="col-span-2 border-[1px] border-mediumgray rounded-[50px] px-[80px] py-[50px] mt-16">
            <p className="text-6xl">Почему <span className="text-primary">CodiPlay</span> может поменять IT-образование в нашей стране навсегда ?</p>
          </div>
          <div className="grid grid-cols-2 gap-[20px] mt-[20px]">
            <div className="border-[1px] border-mediumgray rounded-[50px] p-[50px]">
              <img src="/static/img/scratch.png" alt="" />
            </div>
            <div className="rounded-[50px] text-white bg-primary p-[80px]">
              <p className="text-4xl">
                <b>Сodiplay</b> - имеет уникальную систему компиляции кода прямо со смартфона, что исключает необходимость компьютера на всех этапах.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-screen-2xl my-[100px]">
          <div className="relative">
            <p className="text-6xl w-2/3 font-bold">
              Теперь, программировать можно прямо с телефона 
              <img src="/static/img/underline.png" alt="" />
              <img src="/static/img/star.png" className='absolute top-[-30px] right-1/4' alt="" />
            </p>
          </div>
          <div className="flex justify-end">
            <img src="/static/img/smile.png" alt="" />
          </div>
          <div className="flex justify-center">
            <p className="text-mediumgray text-2xl">Это значит:</p>
            <img src="/static/img/arrow_down_2.png" className='mt-2 ml-2' alt="" />
          </div>
        </div>
        {/* Reasons */}
        <div className="w-full max-w-screen-2xl grid grid-cols-3 gap-[20px]">
          <div className="border-[1px] border-mediumgray p-[50px] rounded-[50px] text-2xl">
            <span className="text-primary font-bold">Тысячи детей</span> в городах и регионах, у которых нет доступа к компьютеру смогут начать свой путь в программировании и будут конкурентоспособны на IT-рынке.
          </div>
          <div className="border-[1px] border-mediumgray p-[50px] rounded-[50px] text-2xl">
            Школы, у которых нет бюджета на дорогостоящее техническое оборудование смогут обучать программированию, потому что <span className="text-primary font-bold"> смартфон есть почти у каждого школьника.</span>
          </div>
          <div className="border-[1px] border-mediumgray p-[50px] rounded-[50px] text-2xl">
            Система CodiPlay обходится школе в <span className="text-primary font-bold">500-600 ₸ на 1 школьника</span>, в зависимости от количества учеников в школе, что делает IT-образование доступным с малых лет.
          </div>
        </div>
        <div className="w-full max-w-screen-2xl grid grid-cols-2 gap-[20px] mt-[20px]">
          <div className="border-[1px] border-mediumgray p-[50px] rounded-[50px] text-2xl">
            Например, собрав вентилятор из набора CodiKit, ребенок получает навык программированию полноразмерного бытового вентилятора. И закончив курс CodiPlay, <span className="font-bold text-primary">становится настоящим инженером и программистом. </span>
          </div>
          <div className="border-[1px] border-mediumgray p-[50px] rounded-[50px] text-2xl">
            После прохождения полного курса, школьники получают  <span className="font-bold text-primary">сертификат от Astana IT University</span> и освобождаются от определенных дисциплин.
          </div>
        </div>
        {/* Connect school */}
        <p className="text-4xl text-center mt-[200px]">Подключить CodiPlay в вашу школу</p>
        <div className="flex justify-center mt-20">        
          <button className="rounded-full text-3xl bg-primary text-white w-[300px] h-[300px]">Подключить</button>
        </div>
        {/* Footer */}
        <div className="w-full max-w-screen-2xl mt-[200px] bg-black rounded-t-[50px] p-[90px] pb-1">
          <div className="grid grid-cols-2">
            <div>
              <p className="text-6xl font-bold text-white">CodiPlay</p>
              <p className='text-white mt-10'>Контакты для связи</p>
            </div>
            <div>
              <button className='flex mb-5 items-center text-white gap-[20px] pr-5 border-[1px] border-white rounded-full p-2'>
                <div className="rounded-full p-[10px] bg-white text-primary"><AiFillInstagram/></div>
                Инстаграмм CodiPlay
              </button>
              <button className='flex mb-5 items-center text-white gap-[20px] pr-5 border-[1px] border-white rounded-full p-2'>
                <div className="rounded-full p-[10px] bg-white text-primary"><AiFillMail/></div>
                Написать на почту
              </button>
              <button className='flex items-center text-white gap-[20px] pr-5 border-[1px] border-white rounded-full p-2'>
                <div className="rounded-full p-[10px] bg-white text-primary"><AiFillPhone/></div>
                Позвонить нам
              </button>
            </div>
          </div>
          
          <div className="border-t-[1px] text-white border-white p-[20px] mt-[100px] flex justify-between">
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
