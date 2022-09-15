const useStorage = () => {
    const storage = window.localStorage

    const set = (key, content) => {
        storage.setItem(key, content)
    }

    const get = (key) => {
        return storage.getItem(key)
    }

    const remove = (key) => {
        storage.removeItem(key)
    }

    return {set, get, remove}
}

export default useStorage