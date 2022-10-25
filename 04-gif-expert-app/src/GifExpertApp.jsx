import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export function GifExpertApp(){

    const [categories, setCategories] = useState([ 'One punch' ]);

    const onNewCategory = ( newCategory ) => {

        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
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