import { AdjustmentsHorizontalIcon, DevicePhoneMobileIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import imagedf from './../../public/images/Screenshot 2023-07-19 102038.png'
import Image from "next/image";

export default function Home() {
  return (
    <div className="container px-2 mx-auto">
      <div className='grid gap-4 md:grid-cols-12  min-h-screen md:grid-rows-[48px_minmax(300px,_1fr)]'>
        <div className='rounded-md h-fit border bg-slate-800 border-slate-900 md:block md:row-span-2 md:col-span-3'>
          <div>
            <div className="flex items-center justify-between h-12 px-4 text-gray-400  cursor-pointer">
              <span>دسته بندی مقالات</span>
              <ChevronDownIcon className="w-6 h-6 strok-gray-400" />
            </div>
            {
              false && <div className="px-2">
                <ul className="mb-4">
                  <li
                    className="px-2 flex items-center justify-between text-gray-100 py-2 mb-1 rounded-md cursor-pointer ease-linear duration-200 hover:bg-slate-400 hover:text-slate-800">
                    <span>گوشی موبایل</span>
                    <DevicePhoneMobileIcon className="w-5 h-5" />
                  </li>
                  <li
                    className="px-2 flex items-center justify-between text-gray-100 py-2 mb-1 rounded-md cursor-pointer ease-linear duration-200 hover:bg-slate-400 hover:text-slate-800">
                    <span>گوشی موبایل</span>
                    <DevicePhoneMobileIcon className="w-5 h-5" />
                  </li>
                  <li
                    className="px-2 flex items-center justify-between text-gray-100 py-2 mb-1 rounded-md cursor-pointer ease-linear duration-200 hover:bg-slate-400 hover:text-slate-800">
                    <span>گوشی موبایل</span>
                    <DevicePhoneMobileIcon className="w-5 h-5" />
                  </li>
                </ul>
              </div>
            }
          </div>
        </div>
        <div className=' md:col-span-9 md:flex items-center overflow-scroll'>
          <div className="border flex items-center rounded-md px-4 h-full w-full bg-slate-800 border-slate-900 overflow-scroll">
            <div className="flex items-center text-gray-400 ">
              <AdjustmentsHorizontalIcon className="w-5 h-5 mt-0.5" />
              <span className="text-sm mr-2 whitespace-nowrap	">
                مرتب سازی :
              </span>
            </div>
            <div className="">
              <ul className="flex items-center overflow-x-scroll">
                <li className="px-4 whitespace-nowrap	 w-fit py-2 cursor-pointer text-gray-200 text-sm">جدید ترین</li>
                <li className="px-4 whitespace-nowrap	 w-fit py-2 cursor-pointer text-gray-200 text-sm">بیشترین بازدید</li>
                <li className="px-4 whitespace-nowrap	 w-fit py-2 cursor-pointer text-gray-200 text-sm">قدیمی ترین</li>
                <li className="px-4 whitespace-nowrap	 w-fit py-2 cursor-pointer text-gray-200 text-sm">کوتاه ترین</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='rounded-md md:col-span-9 grid grid-cols-12 gap-4'>
          {
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(el =>
              <div className="col-span-12 sm:col-span-6  md:col-span-6 lg:col-span-4 xl:col-span-3 bg-sky-900 rounded-md h-fit p-3 relative mt-8">
                <figure className="-mt-8 rounded-md overflow-hidden mb-3">
                  <Image src={imagedf} alt="d" />
                </figure>
                <div>
                  <h3 className="text-gray-100 text-lg lg:text-xl font-black mb-3">
                    نام مقاله در سایت
                  </h3>
                  <p className="text-gray-300 text-xs w-full break-normal">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                </div>
                <hr className="opacity-20 my-3" />
                <Link href={"#"} className="block text-center font-bold text-sky-600">
                  مطالعه مقاله
                </Link>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
