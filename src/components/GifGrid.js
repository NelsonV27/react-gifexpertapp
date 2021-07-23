import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( { category } ) => {

    const { data: images, loading } = useFetchGifs( category );
    

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p>}

            <div className="card-grid">
            
            {
                //para que retorne el id y el titulo de la imagen en un item se utiliza el map porque es un arreglo
                images.map( img => (
                     <GifGridItem
                         key={img.id} 
                         {...img} 
                     />
                ))
            }
         
            </div>
        </>
        
    )
}
