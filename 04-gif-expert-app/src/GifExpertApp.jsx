import { useState } from "react";
import AddCategory from "./components/AddCategory";

export default function GifExpertApp(){

    const [categories, setCategories] = useState([ 'One punch', 'Dragon ball' ]);

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
                    categories.map(category => {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </ol>
        </>
    );
}