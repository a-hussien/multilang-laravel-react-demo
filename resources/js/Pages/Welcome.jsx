import DefaultLayout from '@/Layouts/DefaultLayout';
import { useLaravelReactI18n } from 'laravel-react-i18n';

const Welcome = () => {
    const { t } = useLaravelReactI18n()
    const __ = t

    return (
        <div className="flex justify-center">
            <h1 className="mt-6 text-4xl font-semibold text-gray-700 dark:text-white">
                { __('general.welcome') }
            </h1>
        </div>
    );
}

Welcome.layout = page => <DefaultLayout children={page} title="general.main.title" />

export default Welcome
