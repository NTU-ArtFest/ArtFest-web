import DuZhiGun from '@/components/bio/du_zhi_gun';

export const metadata = {
    title: '杜知更 - 維基百科 - 束縛的百科全書',
    description: '這是有關杜知更博士的維基百科，當你點進來簡直是危機重重。',
  };

export default function Bio() {
    return (
        <div className="container">
            <DuZhiGun />
        </div>
    );
}