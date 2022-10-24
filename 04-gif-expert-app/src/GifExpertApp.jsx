import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export function GifExpertApp(){

    const [categories, setCategories] = useState([ 'One punch' ]);

    const onNewCategory = ( newCategory ) => {

        if(categories.includes(newCategory)) return;

        setCategories([...categories, newCategory]);
    }

    return(
        <>
            <h1>GigExpertApp</h1>

            <AddCategory onNewCategory={ onNewCategory } />

            <ol>
            {
                categories.map(category => 
                    <GifGrid category={category} key={category} />
                )
            }
        </ol>
        </>
    );
}