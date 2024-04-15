import React from 'react';
import Image from "next/image";

const ContenueArticle = () => {
    return (
        <section>
            <section className={'my-16 flex justify-between'}>
                <h1 className={'title-font text-3xl sm:text-4xl mb-4 font-medium text-gray-100'}>TitreArticle</h1>
                <div className={'flex items-center'}>
                    <p className={'text-gray-100 mr-4'}>NomUtilisateur</p>
                    <a href={'/profile'}>
                        <Image width={"50"} height={"50"} src={""} alt={"pp"} className={"rounded-full bg-neutral-600"}/>
                    </a>
                </div>
            </section>

            <section>
                <Image
                    src="/path/to/your/image.jpg"
                    alt="Image"
                    width={620}
                    height={310}
                    className="bg-neutral-600 mb-10 w-full rounded"
                />
                <p className={'text-gray-100 mb-20'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Velit ut tortor pretium viverra. Sit amet est placerat in egestas erat
                    imperdiet sed euismod. Bibendum ut tristique et egestas quis ipsum. Ac tortor dignissim convallis
                    aenean et tortor at risus viverra. Turpis egestas maecenas pharetra convallis. Neque aliquam
                    vestibulum morbi blandit cursus risus at ultrices. Nulla pellentesque dignissim enim sit amet.
                    Congue eu consequat ac felis donec et. Congue nisi vitae suscipit tellus mauris a diam. Elementum
                    tempus egestas sed sed. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Rhoncus urna
                    neque viverra justo nec ultrices dui. Diam in arcu cursus euismod quis viverra nibh cras. Felis eget
                    nunc lobortis mattis aliquam faucibus. Orci nulla pellentesque dignissim enim. Eget magna fermentum
                    iaculis eu non. Sed tempus urna et pharetra pharetra massa massa ultricies.

                    Arcu bibendum at varius vel. Odio pellentesque diam volutpat commodo sed egestas egestas. Interdum
                    velit euismod in pellentesque. Blandit massa enim nec dui nunc mattis. Risus sed vulputate odio ut
                    enim blandit volutpat maecenas volutpat. Integer vitae justo eget magna fermentum iaculis eu non
                    diam. Facilisi etiam dignissim diam quis. Tellus at urna condimentum mattis pellentesque id nibh.
                    Viverra accumsan in nisl nisi. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum.
                    Tincidunt vitae semper quis lectus nulla at. Cursus eget nunc scelerisque viverra mauris in aliquam.
                    Morbi tristique senectus et netus et malesuada fames. Eu tincidunt tortor aliquam nulla facilisi
                    cras. Nunc non blandit massa enim nec. Quis viverra nibh cras pulvinar mattis. Tellus id interdum
                    velit laoreet id. Eros in cursus turpis massa tincidunt dui.

                    Diam in arcu cursus euismod quis viverra nibh cras pulvinar. In vitae turpis massa sed elementum.
                    Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Est velit egestas dui id
                    ornare. Tincidunt id aliquet risus feugiat in ante metus dictum at. At risus viverra adipiscing at
                    in tellus integer feugiat. Aliquet nibh praesent tristique magna sit amet purus gravida. Magna etiam
                    tempor orci eu lobortis elementum. Sit amet purus gravida quis. Eu nisl nunc mi ipsum faucibus vitae
                    aliquet nec. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Varius
                    quam quisque id diam vel quam elementum.
                </p>
            </section>
        </section>
    );
};

export default ContenueArticle;
