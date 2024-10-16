import { useNavigate } from 'react-router-dom';
import arrowimg from '../../../assets/arrow.svg';

interface NavigationBarProps {
  label: string;  // 동적으로 변경할 label 텍스트
}

function NavigationBar({ label }: NavigationBarProps) {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // 이전 페이지로 돌아가기
    };
    
  return (
    <div className="w-full h-[55px] border border-b-custom-softgrey bg-custom-softblue flex items-center">
      <img src={arrowimg} alt="arrow" className="w-[20px] h-[20px] ml-4" onClick={handleGoBack}/>
      <div className="ml-3 text-center">
        <span className="text-[20px] font-semibold">{label}</span>
      </div>
    </div>
  );
}

export default NavigationBar;
