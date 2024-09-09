import Python from '../img/python.png';
import Article from '../components/article'
import Java from '../img/java1.png';
import Figma from '../img/figma.png'
export default function Existing()
{
    return<>
    <div >
        <div className="row aln-center">
            <div className="col-4 col-6-medium col-12-small">
            <Article 
            title="Learn Python" 
            photo={Python}  // Use the imported image
            content="Python is a versatile programming language used for various applications."
            author="Jane Doe"
            date="July 1, 2024"
        />
        </div>
        <div className="col-4 col-6-medium col-12-small"> <Article 
            title="Learn Java" 
            photo={Java} 
            content="Java is a versatile, object-oriented programming language renowned for its platform independence,"
            author="John Smith"
            date="June 30, 2024"
        /></div>
        <div className="col-4 col-6-medium col-12-small">
            <Article 
            title="Learn Java" 
            photo={Figma} 
            content="Figma is the leading collaborative design tool for building meaningful products."
            author="John Smith"
            date="June 21, 2024"
        /></div>
        </div>
    </div>
  </>
}