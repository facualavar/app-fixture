const useStorage = () => {
    const storage = window.localStorage

    const set = (key, content) => {
        storage.setItem(key, content)
    }

    const get = (key) => {
        storage.getItem(key)
    }

    return {set, get}
}

export default useStorage