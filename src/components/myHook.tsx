import { useState } from "react"

export function useOnlineStatus(){
    var [isOnline, setIsOnline] = useState(false)
    return isOnline
}