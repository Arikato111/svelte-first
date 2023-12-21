import Banner from '@/components/Banner'
import { Certificates } from '@/components/Certificates'
import Projects from '@/components/Projects'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Home | Arikato111",
}

export default function Home() {
  return (
  <main>
    <div className='box-lg'>
        <Banner />
    </div>
    <Image className="mt-5 mb-20 object-cover h-[400px] w-[100vw]" src={"/j2.jpg"} alt='sky' width={2000} height={1000} />
    <div className='bg-gray-100'>
        <div className='box'>
          <Certificates />
        </div>
    </div>
    <div className="box">
      <Projects />
    </div>
    <div className='box'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero nemo at id autem est nesciunt optio maiores, amet necessitatibus nulla! Illo, natus tempore. Non voluptatem nam ab libero rerum tempora.
      Vero quas facilis incidunt cumque facere veniam error, odio ratione blanditiis voluptas, delectus numquam assumenda corrupti qui ipsam perspiciatis autem? Tempora necessitatibus rem sit dolore dignissimos ducimus voluptatibus odio mollitia.
      Quaerat tempora voluptate, quisquam magnam laboriosam corrupti nemo nulla, a illum, ratione cupiditate natus blanditiis? Facere ratione labore in quae nostrum quidem vero? Soluta, aut iure ex alias odio fugiat.
      Facilis aperiam dolorum, autem ut totam libero, ipsa distinctio fugit illo voluptatem explicabo. Animi vitae delectus natus, doloribus, consequuntur reiciendis minus dolores illum deleniti ex maxime odio nisi aperiam quos.
      Eaque fugit quos, quidem, fuga sequi hic eum, assumenda necessitatibus rerum minima nostrum animi. Consequatur vel recusandae perferendis, labore fuga animi aut. Autem error eaque illum, fugit ex quod esse.
      Laboriosam fugiat illum at recusandae voluptate. Necessitatibus asperiores, animi, delectus corrupti sit dolorum molestiae at sunt odit alias deleniti unde fugiat pariatur libero, sed consequatur expedita laudantium! Alias, explicabo libero.
      Deleniti quo aperiam dolores itaque, enim fugiat esse quasi quidem. Eum labore, pariatur beatae impedit enim necessitatibus animi eius exercitationem optio tenetur quasi quae nemo quibusdam tempora, quaerat aliquid rem.
      Dicta vitae, porro accusamus consequatur inventore enim libero ut deserunt accusantium? Fuga, non doloribus tempore, laudantium magnam rem ducimus eos, libero maiores est aliquam illo eaque obcaecati ex excepturi odio.
      Perferendis rerum est nostrum ut ducimus. Ab aperiam non in omnis recusandae adipisci iste tenetur, ratione minus repudiandae officia deleniti inventore nobis sint quidem delectus illo maxime voluptates illum laborum.
      Sed nobis ut possimus, porro et iusto, sapiente laboriosam vel praesentium, cumque quisquam accusantium ducimus. Iste saepe atque mollitia quibusdam, quo dignissimos ipsum corporis ea rerum, voluptatibus tenetur accusantium debitis.
    </div>
 </main>
  )
}
