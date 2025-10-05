import { useState } from "react"

const ProductDescription = () => {

    let soleContent = <div className="flex flex-col ">
        <span className="text-sm">Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium animi, impedit blanditiis officia
            placeat in ad. Voluptatibus dolor, tempora mollitia magnam adipisci
            deserunt! Delectus dolorem vel ad unde non possimus.o
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Iste, nostrum vero, distinctio earum laudantium, molestiae nobis
            voluptates fugit maiores sequi consequuntur nesciunt harum ipsum velit
            excepturi perspiciatis quae enim porro.</span>
        <span className="text-sm">Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium animi, impedit blanditiis officia
            placeat in ad. Voluptatibus dolor, tempora mollitia magnam adipisci
            deserunt! Delectus dolorem vel ad unde non possimus.o
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Iste, nostrum vero, distinctio earum laudantium, molestiae nobis
            voluptates fugit maiores sequi consequuntur nesciunt harum ipsum velit
            excepturi perspiciatis quae enim porro.</span>
    </div>

    const [dynamicContent, setDynamicContent] = useState(soleContent);

    return (
        <div className="mt-20 !mb-0">
            <div className="flex gap-3 mb-4">
                <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36 " onClick={()=> setDynamicContent(soleContent)} >Description</button>
                <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36 " onClick={()=> setDynamicContent('soleContent')}>Care Guide</button>
                <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36 " onClick={()=> setDynamicContent('soleContent')}>Size Guide</button>
            </div>
            {dynamicContent}
        </div>
    )
}

export default ProductDescription
