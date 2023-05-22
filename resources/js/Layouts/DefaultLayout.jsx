import NavBar from "@/Components/NavBar"
import { Head } from "@inertiajs/react";
import { useLaravelReactI18n } from 'laravel-react-i18n';

const DefaultLayout = ({ children, title }) => {
    const { t } = useLaravelReactI18n()
    const __ = t

  return (
    <>
        <Head title={ __(title) } />
        <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">

            <NavBar />

            <div className="max-w-7xl mx-auto p-6 lg:p-8">
                { children }
            </div>
        </div>
    </>
  )
}

export default DefaultLayout
