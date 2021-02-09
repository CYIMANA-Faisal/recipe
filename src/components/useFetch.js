
import {useState, useEffect} from 'react'
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [err, setError] = useState(null)
    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error('Failed to fetch the recipes');
                }
                return res.json()
            }).then(response => {
                setData(response)
                setPending(false)
            })
            .catch((error) => {
                setPending(false)
                setError(error.message)
            })
    }, [ ]);
    return { data, isPending, err}
};

export default useFetch;