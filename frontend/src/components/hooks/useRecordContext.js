import { RecordContext } from '../../context/RecordContext'
import { useContext } from 'react'

export const useRecordContext = () => {
    const context = useContext(RecordContext)

    if (!context) {
        throw Error('useRecordContext must be used inside an RecordContextProvider')
    }

    return context
}