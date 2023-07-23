import React, { ReactNode } from 'react';
import PostGrid from "../../components/postsComponents/PostGrid";
import PostSingle from "../../components/postsComponents/PostSingle";
import Title1 from '../../components/postsComponents/Title1';
import Parag from '../../components/postsComponents/Parag';
import Title2 from '../../components/postsComponents/Title2';
import Linkk from '../../components/postsComponents/Linkk';
import Imag from '../../components/postsComponents/Imag';



const arrayDivImage: ReactNode[] = [
    <Imag key={1} urlImage={`/images/imagem_perfil1.jpg`}/>       
]

const arraydivText: ReactNode[] = [
    <Title1 key={1} text={'Titulo 1 Example'}/>,

    <Parag key={2} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
     neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
     voluptatibus aut eius molestiae est repellendus illo. Et internos totam
      qui amet voluptatem ab aliquam quia.`} />, 

    <Parag key={3} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
     neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
     voluptatibus aut eius molestiae est repellendus illo. Et internos totam 
     qui amet voluptatem ab aliquam quia.`} />, 

     <Parag key={4} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
     neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
     voluptatibus aut eius molestiae est repellendus illo. Et internos totam
      qui amet voluptatem ab aliquam quia.`} />, 

    <Parag key={5} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
     neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
     voluptatibus aut eius molestiae est repellendus illo. Et internos totam 
     qui amet voluptatem ab aliquam quia.`} />, 

     <Parag key={6} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
     neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
     voluptatibus aut eius molestiae est repellendus illo. Et internos totam
      qui amet voluptatem ab aliquam quia.`} />, 

    <Parag key={7} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
     neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
     voluptatibus aut eius molestiae est repellendus illo. Et internos totam 
     qui amet voluptatem ab aliquam quia.`} />, 

    <Linkk key={8} urlLink={`/`} description={`Acesse aqui este example`}/>,

    <Parag key={9} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
    neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
    voluptatibus aut eius molestiae est repellendus illo. Et internos totam
     qui amet voluptatem ab aliquam quia.`} />, 

   <Parag key={10} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
    neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
    voluptatibus aut eius molestiae est repellendus illo. Et internos totam 
    qui amet voluptatem ab aliquam quia.`} />, 

    <Parag key={11} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
    neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
    voluptatibus aut eius molestiae est repellendus illo. Et internos totam
     qui amet voluptatem ab aliquam quia.`} />, 

   <Parag key={12} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
    neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
    voluptatibus aut eius molestiae est repellendus illo. Et internos totam 
    qui amet voluptatem ab aliquam quia.`} />, 

    <Parag key={13} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
    neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
    voluptatibus aut eius molestiae est repellendus illo. Et internos totam
     qui amet voluptatem ab aliquam quia.`} />, 

   <Parag key={14} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
    neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
    voluptatibus aut eius molestiae est repellendus illo. Et internos totam 
    qui amet voluptatem ab aliquam quia.`} />, 

    <Title2 key={15} text={`Title 2 Example`}/>,

    <Parag key={16} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
     neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
     voluptatibus aut eius molestiae est repellendus illo. Et internos totam
      qui amet voluptatem ab aliquam quia.`} />, 

    <Parag key={17} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
     neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
     voluptatibus aut eius molestiae est repellendus illo. Et internos totam 
     qui amet voluptatem ab aliquam quia.`} />, 

     <Parag key={18} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
     neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
     voluptatibus aut eius molestiae est repellendus illo. Et internos totam
      qui amet voluptatem ab aliquam quia.`} />, 

    <Parag key={19} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
     neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
     voluptatibus aut eius molestiae est repellendus illo. Et internos totam 
     qui amet voluptatem ab aliquam quia.`} />, 

     <Parag key={20} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
     neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
     voluptatibus aut eius molestiae est repellendus illo. Et internos totam
      qui amet voluptatem ab aliquam quia.`} />, 

    <Parag key={21} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
     neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
     voluptatibus aut eius molestiae est repellendus illo. Et internos totam 
     qui amet voluptatem ab aliquam quia.`} />, 

    <Linkk key={22} urlLink={`/`} description={`Acesse aqui este example`}/>,

    <Parag key={23} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
    neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
    voluptatibus aut eius molestiae est repellendus illo. Et internos totam
     qui amet voluptatem ab aliquam quia.`} />, 

   <Parag key={24} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
    neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
    voluptatibus aut eius molestiae est repellendus illo. Et internos totam 
    qui amet voluptatem ab aliquam quia.`} />, 

    <Parag key={25} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
    neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
    voluptatibus aut eius molestiae est repellendus illo. Et internos totam
     qui amet voluptatem ab aliquam quia.`} />, 

   <Parag key={26} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
    neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
    voluptatibus aut eius molestiae est repellendus illo. Et internos totam 
    qui amet voluptatem ab aliquam quia.`} />, 

    <Parag key={27} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
    neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
    voluptatibus aut eius molestiae est repellendus illo. Et internos totam
     qui amet voluptatem ab aliquam quia.`} />, 

   <Parag key={28} text={`Lorem ipsum dolor sit amet. Et molestiae tempora nam
    neque asperiores sed dolor omnis quo molestiae possimus. In voluptatem 
    voluptatibus aut eius molestiae est repellendus illo. Et internos totam 
    qui amet voluptatem ab aliquam quia.`} />, 
]



export default function Example() {
    return (
        <>            
            <PostGrid>
                <PostSingle
                    divOneContent={arrayDivImage}
                    divTwoContent={arraydivText}
                />
            </PostGrid>            
        </>
    )
}
