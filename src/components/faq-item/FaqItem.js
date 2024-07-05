import './faq-item.css';
import { ReactComponent as PlusIcon } from '../../img/plus.svg';
import { ReactComponent as MinusIcon } from '../../img/minus.svg';

const FaqItem = ({ question, answer, isOpen, onClick }) => {
    return (
      <div className="faq-item">
        <hr className="faq-item__separator" />
        <div className="faq-item__question" onClick={onClick}>
          <div>
              {isOpen ? <MinusIcon className="faq-item__icon" width="16" height="16" /> : <PlusIcon className="faq-item__icon" width="16" height="16" />}
          </div>
          <p className="question-text">{question}</p>
        </div>
        {isOpen && (
          <div className="faq-item__answer">
            <p className="answer-text">{answer}</p>    
          </div>
        )}
      </div>
    );
  };
  
  export default FaqItem;