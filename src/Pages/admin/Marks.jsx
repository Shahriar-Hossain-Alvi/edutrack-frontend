import InsertMarks from '../../components/pageComponents/MarksPage/InsertMarks.jsx';
import SectionHeader from '../../utils/SectionHeader/SectionHeader.jsx';

const Marks = () => {


    return (
        <div>
            <div className='flex justify-between'>
                <SectionHeader section_title="Insert & Update Marks" />

                <InsertMarks />
            </div>


        </div>
    );
};

export default Marks;