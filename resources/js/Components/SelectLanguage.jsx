import { router } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';

const SelectLanguage = () => {

    const { setLocale, getLocales } = useLaravelReactI18n()

    const languages = getLocales()

    const changeLang = (val) => {

        if(languages.includes(val)){

            const element = document.querySelector("html")

            element.setAttribute('dir', val === "ar" ? "rtl" : "ltr")

            setLocale(val)

            router.remember(val, 'locale')
        }
    }

  return (
    <select className='w-24 mx-2 px-4 p-2 text-center bg-slate-500 text-black rounded-full bodrder-1 border-slate-600' defaultValue={'ar'} onChange={(e) => changeLang(e.target.value)}>
        {languages?.map((lang, i) => (
            <option
            key={i+1}
            className='p-3 mx-2 font-sans'
            value={lang}>
                {lang === "ar" ? " عربـي " : "English"}
            </option>
        ))}
    </select>
  )
}

export default SelectLanguage
