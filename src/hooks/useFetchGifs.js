import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'


//Creacion del hooks y la diferencia de un funcional component
export const useFetchGifs = ( category ) => {
    //Estado que va a cargar por defecto
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGifs( category )
            .then( imgs => {
                
                setState({
                    data: imgs,
                    loading: false
                });
               
                
               
            })

    }, [ category ])

    return state; // {data: [], loading: true}

}