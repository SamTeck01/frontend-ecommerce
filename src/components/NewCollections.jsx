import LATEST from '../assets/latest';
import Item from './Item';

export default function NewCollections() {
  return (
    <section className="bg-primary" >
      <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]" >
        <h3 className="h3 text-center" >Latest Products</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-r from-transparent via-black
         to-transparent mb-16 " />
        {/*container */}
        <div className="grid grid-cols-1 sx:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6" >
            {LATEST.map((item)=> <Item key={item.id} item={item} id={item.id} /> ) }
        </div>
      </div>
    </section>
  )
}
