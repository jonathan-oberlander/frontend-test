import { useCallback, useEffect, useState } from 'react'

type State<D> = {
    data: D | null
    loading: boolean
    error: Error| null 
}

const initialState = {   
    data: null,
    loading: false,
    error: null,
} satisfies State<object>

export const useAsyncCallback = <D extends object>(
    asyncCb: () => Promise<D>,
    instant = false
  ) => {
    const [state, setState] = useState<State<D>>(initialState)

    const func = useCallback(
        async () => {
            setState({ error: null, loading: true, data: null })

            try {
                const data = await asyncCb()
                setState({ error: null, loading: false, data })    
            } catch(error) {
                if (error instanceof Error) {
                    setState({ error, loading: false, data: null })
                } else {
                    console.error(error)
                }
            }
        }
    , [asyncCb])

    useEffect(() => {
        if (instant) {
            func()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { 
        func, 
        state 
    }
}
