import { AppStore, store } from '@/redux/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'

type ReduxStoreProviderProps = {
    children: React.ReactNode
}

const ReduxStoreProvider = ({
    children
}: ReduxStoreProviderProps) => {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        storeRef.current = store
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}

export default ReduxStoreProvider;