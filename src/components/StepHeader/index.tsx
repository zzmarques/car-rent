import '../../sass/components/_StepHeader.scss';

interface StepTypes {
    title: string;
    subtitle: string
    step: string
}

const StepHeader = ({ title, subtitle, step }: StepTypes) => {
    
    return (
        <div className="header-step">
            <div className="header-form">
                <h2 className="title">{title}</h2>
                <span className="subtitle">{subtitle}</span>
            </div>

            <span className="steps">{step}</span>
        </div>
    )
}

export default StepHeader