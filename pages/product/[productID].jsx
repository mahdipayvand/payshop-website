import Link from "next/link";
import Image from "next/image";
import { Button, Title } from "components";
import { RiHeartLine, RiShoppingBasket2Line, RiArrowLeftSLine } from "react-icons/ri";

const Product = () => (
  <div className="container mx-auto">
    <div className="grid grid-cols-2 gap-x-20">
      <div className="flex flex-col gap-y-10">
        <h1 className="text-xl font-medium text-gray-700 leading-relaxed">
          گوشی موبایل نوکیا مدل 105 - 2019 TA-1174 DS FA دو سیم کارت ظرفیت 4 مگابایت و رم 4 مگابایت
        </h1>
        <div className="flex gap-x-3">
          <button className="h-14 w-14 border rounded-full border-gray-200 hover:border-gray-300 grid place-items-center hover:text-gray-600">
            <RiHeartLine className="w-6 h-6" />
          </button>
          <Button className="h-14">
            <RiShoppingBasket2Line className="w-6 h-6" />
            افزودن به سبد خرید
          </Button>
        </div>
        <div className="flex h-24 border rounded-xl items-cente r justify-between p-6 bg-gray-100">
          <div className="flex flex-col gap-y-1">
            <p className="text-xs">در دسته‌بندی</p>
            <h2 className="text-lg text-gray-600 font-medium">گوشی موبایل نوکیا</h2>
          </div>
          <Link href="#" className="text-xs flex items-center gap-x-1 hover:text-violet-500">
            دیگر محصولات
            <RiArrowLeftSLine className="w-4 h-4" />
          </Link>
        </div>
        <ul className="flex flex-col divide-y">
          <li className="py-2 text-[13px]">
            <span className="w-1/3 inline-block">فناوری صفحه‌نمایش</span>
            <strong>TFT</strong>
          </li>
          <li className="py-2 text-[13px]">
            <span className="w-1/3 inline-block">اندازه</span>
            <strong>1.7</strong>
          </li>
          <li className="py-2 text-[13px]">
            <span className="w-1/3 inline-block">اقلام همراه</span>
            <strong>اتری، دفترچه‌ راهنما، شارژر</strong>
          </li>
        </ul>
      </div>
      <div className="grid place-items-center h-[460px]">
        <Image src="/products/1.jpg" width={300} height={300} />
      </div>
    </div>
    <hr className="border-2 my-10" />
    <div className="flex flex-col gap-y-5">
      <Title className="text-gray-800">توضیحات</Title>
      <div className="leading-loose text-gray-700">
        سری A گوشی‌های هوشمند میان‌رده سامسونگ توانستند با بهره بردن از مشخصات فنی مناسب و البته قیمتی مقرون به‌صرفه،
        کاربران بسیاری را به سمت خودشان جلب کنند. یکی از این گوشی‌های میان‌رده با‌کیفیت و زیبا، سامسونگ Galaxy A13 است
        که باید گفت بهره بردن از مشخصات فنی مناسب، سبب شده تا عملکرد بسیار خوب و کاملا قابل قبولی را در جایگاه یک گوشی
        هوشمند میان‌رده به شما ارائه کند. در نمای رو‌به‌رویی این گوشی به صفحه‌نمایش با ابعاد 6.6 اینچ و رزولوشن
        1080×2408 از نوع PLS LCD مجهز شده. صفحه‌نمایشی که با توجه به توانایی نمایش 400 پیکسل در هر اینچ، توانایی ارائه
        عملکرد و وضوح تصویر بسیار خوبی را دارد. بریدگی قطره‌ای شکل ناچ در قسمت بالایی و مرکزی صفحه‌نمایش هم سنسور دروبین
        سلفی با رزولوشن 8 مگاپیکسل را در خود جای داده است. یک سنسور دوربین اصلی قدرتمند با توانایی ارائه عملکرد بسیار
        خوب و رزولوشن 50 مگاپیکسل از نوع عریض در کنار سنسور 5 مگاپیکسل از نوع اولترا واید (ultrawide) باز زاویه دید
        گسترده 123 درجه و دو سنسور 2 مگاپیکسل از نوع ماکرو و سنحش عمق، سنسور‌های دروبین چهارگانه قسمت پشتی سامسونگ
        Galaxy A13 را تشکیل می‌دهند. در بخش مشخصات سخت‌افزاری هم این گوشی میان‌رده به پردازنده اختصاصی اگزینوس 850
        سامسونگ مجهز شده که در اجرای بازی و البته نرم‌افزار‌های کاربردی، توانایی ارائه عملکرد بسیار خوب و قابل قبولی
        دارد. باتری با میزان ظرفیت 5000 میلی‌آمپر‌ساعت هم به ازای هر بار شارژ صد درصدی، توانایی ارائه طول عمر مفید (زمان
        آماده به‌کار) بسیار خوب و قابل قبولی را دارد.
      </div>
    </div>
  </div>
);

export default Product;
