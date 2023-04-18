import {atom ,useSetRecoilState} from "recoil"
import { AtomEffect } from "recoil"
import { recoilPersist } from "recoil-persist";



export const useSsrComplectedState = () => {
    const setSsrCompleted = useSetRecoilState(ssrCompletedState)
    return () => setSsrCompleted(true)
}  
const { persistAtom } = recoilPersist()
export const persistAtomEffect = <T,>(param: Parameters<AtomEffect<T>>[0]) => {   param.getPromise(ssrCompletedState).then(() => persistAtom(param)); };  



const ssrCompletedState = atom({
    key: "SsrCompleted",
    default: false,
  })


export const cartState = atom({
    key: "cartState",
    default: [],
    effects_UNSTABLE: [persistAtomEffect]
})

