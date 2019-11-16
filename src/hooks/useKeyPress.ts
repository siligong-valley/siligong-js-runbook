import { useEffect } from "react";

type KeyType = string;

type Keys = KeyType[]

type HandlerType = () => void

function useKeyPress(keys: Keys) {

    let handler: HandlerType

    const setHandler = (myFunc: HandlerType) => {
        handler = myFunc
    }

    function downHandler({ key }: KeyboardEvent) {
        if (keys.includes(key)) {
            if (handler) {
                handler();
            }
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', downHandler);

        return () => {
            window.removeEventListener('keydown', downHandler);
        };
    }, []);

    return setHandler
}

export default useKeyPress