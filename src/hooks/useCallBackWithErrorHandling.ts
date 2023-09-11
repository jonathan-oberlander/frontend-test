import { useState } from 'react'

export const useCallbackWithErrorHandling = (
    callback: (...arg: unknown[]) => void,
  ) => {
    const [, setState] = useState()
  
    return (...args: unknown[]) => {
        try {
            callback(...args)
        } catch (error: unknown) {
            setState(() => {
                throw error
            })
        }
    }
}
